import { budgetRanges, projectTypes } from "@/data/site";

/** Shared by the contact form (client) and /api/contact (server). */
export type ContactInput = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const emptyContact: ContactInput = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  const v = (k: keyof ContactInput) => (input[k] ?? "").trim();

  if (v("fullName").length < 2) errors.fullName = "Please enter your full name.";
  else if (v("fullName").length > 100) errors.fullName = "Name is too long.";

  if (!v("email")) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v("email"))) errors.email = "Please enter a valid email address.";

  if (!v("phone")) errors.phone = "Please enter your phone number.";
  else if (!PHONE_RE.test(v("phone")) || v("phone").replace(/\D/g, "").length < 7)
    errors.phone = "Please enter a valid phone number.";

  if (!(projectTypes as readonly string[]).includes(v("projectType")))
    errors.projectType = "Please select a project type.";

  if (!(budgetRanges as readonly string[]).includes(v("budget"))) errors.budget = "Please select a budget range.";

  if (v("message").length < 10) errors.message = "Please tell us a little about your project (10+ characters).";
  else if (v("message").length > 3000) errors.message = "Message is too long (3000 characters max).";

  return errors;
}
