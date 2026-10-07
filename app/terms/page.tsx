import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Rukesh Construction website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        {
          heading: "Use of this website",
          body: "The content on this website is provided for general information about Rukesh Construction and its services. It does not constitute a quotation or a binding offer.",
        },
        {
          heading: "Project information",
          body: "Project images and descriptions are for illustration. Specifications, timelines and costs for any project are confirmed only in a written agreement.",
        },
        {
          heading: "Intellectual property",
          body: "The Rukesh Construction name, logo and website content may not be reproduced without permission.",
        },
        {
          heading: "Contact",
          body: `Questions about these terms can be sent to ${site.contact.email}.`,
        },
      ]}
    />
  );
}
