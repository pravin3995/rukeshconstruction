import { NextResponse } from "next/server";
import { emptyContact, validateContact, type ContactInput } from "@/lib/contact";

/**
 * Receives contact-form inquiries and emails them via Resend (https://resend.com).
 *
 * Required env vars (set in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY     – API key from the Resend dashboard
 *   CONTACT_TO_EMAIL   – inbox that receives inquiries (comma-separate for several)
 * Optional:
 *   CONTACT_FROM_EMAIL – sender on a domain verified in Resend,
 *                        e.g. "Rukesh Construction <website@rukeshconstruction.com>".
 *                        Defaults to Resend's test sender, which can only deliver
 *                        to the email address of your Resend account.
 */
export async function POST(request: Request) {
  let body: Partial<ContactInput> & { hp_trap?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.hp_trap) return NextResponse.json({ ok: true });

  const input: ContactInput = { ...emptyContact };
  for (const key of Object.keys(emptyContact) as (keyof ContactInput)[]) {
    input[key] = typeof body[key] === "string" ? body[key].trim() : "";
  }

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set. Inquiry:", input);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message right now. Please call or email us directly." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Rukesh Construction Website <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: input.email,
      subject: `New inquiry: ${input.projectType} — ${input.fullName}`,
      text: [
        `Name: ${input.fullName}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Project type: ${input.projectType}`,
        `Budget: ${input.budget}`,
        "",
        input.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact] Resend error", res.status, detail, "Inquiry:", input);
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't send your message right now. Please call or email us directly.",
        // TEMP (debugging live delivery): Resend's reason with email addresses redacted.
        debug: `${res.status} ${detail.replace(/[^\s"'<>()]+@[^\s"'<>()]+/g, "[email]")}`,
        from: (process.env.CONTACT_FROM_EMAIL ?? "(not set)").replace(/[^\s"'<>()]+@/g, "[x]@"),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
