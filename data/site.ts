/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — single source of truth for company information.
 *
 *  Every value marked `REPLACE` is a placeholder. Update it with real company
 *  details before going live. Components read from here, so a change in this
 *  file updates the navbar, footer, contact section, SEO metadata and JSON-LD.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Rukesh Construction",
  shortName: "Rukesh",
  tagline: "Building the Future",
  description:
    "Rukesh Construction delivers reliable, high-quality residential, commercial and industrial construction solutions.",

  // REPLACE: the production domain (used for canonical URLs, sitemap, Open Graph).
  url: "https://www.rukeshconstruction.com",

  contact: {
    phone: "+91 88883 36576",
    phoneHref: "tel:+918888336576",
    // REPLACE: real email address.
    email: "info@rukeshconstruction.com",
    // REPLACE: real office address.
    address: {
      line1: "Office No. 00, Building Name",
      line2: "Area / Locality",
      city: "City",
      region: "State",
      postalCode: "000000",
      country: "India",
    },
    // REPLACE: real business hours.
    hours: [
      { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  // Social profiles shown in the footer. Add facebook / linkedin / youtube here to show those icons too.
  social: {
    instagram: "https://www.instagram.com/rukesh_construction_/",
  },

  // REPLACE: company statistics — use verified numbers only.
  stats: [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Commitment to Quality" },
    { value: 25, suffix: "+", label: "Skilled Professionals" },
  ],

  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact", href: "/contact" },
] as const;

/** Where every "Get a Quote" / "Start Your Project" CTA points. */
export const QUOTE_HREF = "/contact#inquiry";

/** Options for the contact form. Edit freely — validation adapts automatically. */
export const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Renovation & Remodeling",
  "Project Management",
  "Structural & Civil Works",
  "Other",
] as const;

// REPLACE: adjust budget bands / currency to suit your market.
export const budgetRanges = [
  "Under ₹25 Lakh",
  "₹25 Lakh – ₹1 Crore",
  "₹1 Crore – ₹5 Crore",
  "Above ₹5 Crore",
  "Not sure yet",
] as const;

export function formatAddress(separator = ", ") {
  const a = site.contact.address;
  return [a.line1, a.line2, `${a.city}, ${a.region} ${a.postalCode}`, a.country].join(separator);
}
