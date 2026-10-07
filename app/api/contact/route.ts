import { NextResponse } from "next/server";
import { emptyContact, validateContact, type ContactInput } from "@/lib/contact";

/**
 * Receives contact-form inquiries.
 *
 * TODO: connect a delivery method before launch — e.g. send an email with
 * Resend / Nodemailer, post to a CRM, or store in a database. Until then,
 * inquiries are validated and logged to the server console only.
 */
export async function POST(request: Request) {
  let body: Partial<ContactInput> & { company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company) return NextResponse.json({ ok: true });

  const input: ContactInput = { ...emptyContact };
  for (const key of Object.keys(emptyContact) as (keyof ContactInput)[]) {
    input[key] = typeof body[key] === "string" ? body[key].trim() : "";
  }

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  console.info("[contact] New inquiry:", input);

  return NextResponse.json({ ok: true });
}
