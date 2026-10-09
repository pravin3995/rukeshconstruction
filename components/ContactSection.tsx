import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { formatAddress, site, whatsappHref } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

export function ContactSection({ headingLevel: Heading = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const { contact } = site;
  const items = [
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: `Chat on ${contact.phone}`, href: whatsappHref(), external: true },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Address", value: formatAddress() },
  ];

  return (
    <section id="inquiry" aria-labelledby="contact-title" className="section-y relative scroll-mt-20 bg-paper">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <Eyebrow tone="light">Contact Us</Eyebrow>
          <Heading id="contact-title" className="h-display mt-5 text-[2.1rem] text-ink sm:text-5xl lg:text-[3.4rem]">
            Let&apos;s talk about your <span className="text-gold-deep">project</span>
          </Heading>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate sm:text-lg">
            Share a few details and our team will get in touch to understand your requirements and next steps.
          </p>

          <ul className="mt-10 border-t border-ink/10">
            {items.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label} className="flex gap-5 border-b border-ink/10 py-5">
                <span className="flex size-11 shrink-0 items-center justify-center bg-ink text-gold">
                  <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="mt-1 block break-words text-base font-medium text-ink transition-colors hover:text-gold-deep">
                      {value}
                    </a>
                  ) : (
                    <address className="mt-1 text-base not-italic leading-relaxed text-ink">{value}</address>
                  )}
                </div>
              </li>
            ))}
            <li className="flex gap-5 border-b border-ink/10 py-5">
              <span className="flex size-11 shrink-0 items-center justify-center bg-ink text-gold">
                <Clock aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate">Business Hours</p>
                <dl className="mt-1 space-y-0.5 text-base text-ink">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt className="font-medium">{h.days}:</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="relative lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
