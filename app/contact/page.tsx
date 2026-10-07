import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rukesh Construction to discuss your residential, commercial or industrial construction project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title={
          <>
            Start your <span className="text-gold">project</span>
          </>
        }
        intro="Tell us what you're planning. We'll respond with clear next steps and an honest assessment of your requirements."
        image="/images/site/page-contact.jpg"
        imageAlt="Modern building facade against a deep blue sky"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
