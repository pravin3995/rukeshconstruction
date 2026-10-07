import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Rukesh Construction collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Information we collect",
          body: "When you submit an inquiry, we collect the details you provide — such as your name, email address, phone number, project type, budget and message — so that we can respond to your request.",
        },
        {
          heading: "How we use your information",
          body: "We use your information only to respond to your inquiry, discuss your project and provide related services. We do not sell your personal information to third parties.",
        },
        {
          heading: "Data retention",
          body: "We keep inquiry details only for as long as necessary to respond to you and for legitimate business record-keeping.",
        },
        {
          heading: "Contact",
          body: `For questions about this policy or to request deletion of your information, contact us at ${site.contact.email}.`,
        },
      ]}
    />
  );
}
