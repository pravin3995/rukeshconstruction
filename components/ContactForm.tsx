"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { budgetRanges, projectTypes } from "@/data/site";
import { emptyContact, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";
import { cn, EASE } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "peer w-full border bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors duration-200 placeholder:text-slate/60 focus:border-ink focus-visible:outline-none";

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: keyof ContactInput;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal">
        {label} <span className="text-gold-deep" aria-hidden="true">*</span>
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex items-center gap-1.5 text-sm text-red-700"
          >
            <CircleAlert aria-hidden="true" className="size-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInput, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (key: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    // Re-validate live once a field has been visited, so errors clear as the user fixes them.
    if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validateContact(next)[key] }));
  };

  const blur = (key: keyof ContactInput) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateContact(values)[key] }));
  };

  const inputProps = (key: keyof ContactInput) => ({
    id: key,
    name: key,
    value: values[key],
    onChange: update(key),
    onBlur: blur(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    className: cn(fieldBase, errors[key] ? "border-red-600" : "border-ink/15 hover:border-ink/35"),
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const honeypot = (e.currentTarget.elements.namedItem("hp_trap") as HTMLInputElement | null)?.value;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, hp_trap: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: ContactErrors };
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setValues(emptyContact);
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        role="status"
        className="flex min-h-[520px] flex-col items-start justify-center border border-ink/10 bg-white p-8 sm:p-12"
      >
        <span className="flex size-14 items-center justify-center bg-ink text-gold">
          <CircleCheck aria-hidden="true" className="size-7" strokeWidth={1.5} />
        </span>
        <h3 className="h-display mt-8 text-3xl text-ink sm:text-4xl">Thank you.</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
          Your inquiry has been received. A member of our team will get back to you shortly to discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 cursor-pointer text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-ink underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold-deep"
        >
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={onSubmit} className="border border-ink/10 bg-white p-6 sm:p-10" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName} className="sm:col-span-2">
          <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps("fullName")} />
        </Field>
        <Field id="email" label="Email Address" error={errors.email}>
          <input type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" {...inputProps("email")} />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 00000 00000" {...inputProps("phone")} />
        </Field>
        <Field id="projectType" label="Project Type" error={errors.projectType}>
          <div className="relative">
            <select {...inputProps("projectType")} className={cn(inputProps("projectType").className, "cursor-pointer appearance-none pr-10", !values.projectType && "text-slate/70")}>
              <option value="" disabled>
                Select project type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-ink">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate" />
          </div>
        </Field>
        <Field id="budget" label="Budget" error={errors.budget}>
          <div className="relative">
            <select {...inputProps("budget")} className={cn(inputProps("budget").className, "cursor-pointer appearance-none pr-10", !values.budget && "text-slate/70")}>
              <option value="" disabled>
                Select budget range
              </option>
              {budgetRanges.map((b) => (
                <option key={b} value={b} className="text-ink">
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate" />
          </div>
        </Field>
        <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
          <textarea rows={5} placeholder="Tell us about your project — location, size, timeline…" {...inputProps("message")} className={cn(inputProps("message").className, "resize-y")} />
        </Field>
      </div>

      {/* Honeypot field — hidden from people, catches simple bots. Its name and label must not look like a
          real field (e.g. "company"), or browser autofill fills it and real inquiries get dropped. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="hp_trap">Leave this field empty</label>
        <input id="hp_trap" name="hp_trap" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            <span>
              {serverMessage} Please try again, or contact us directly by phone or email.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p id="form-note" className="text-xs leading-relaxed text-slate">
          All fields are required. We never share your details.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 bg-ink px-8 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-gold hover:text-ink disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
