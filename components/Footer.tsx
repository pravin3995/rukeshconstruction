import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { formatAddress, site } from "@/data/site";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { SocialIcons } from "./ui/SocialIcons";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const footerServices = ["residential-construction", "commercial-construction", "renovation-remodeling", "project-management"]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s) => s !== undefined);

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">{children}</h2>;
}

const linkClass = "text-sm text-mist transition-colors duration-200 hover:text-gold";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div aria-hidden="true" className="h-px w-full bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-mist">
            Reliable, high-quality residential and commercial construction — delivered with precision,
            transparency and long-term value.
          </p>
          <SocialIcons className="mt-8" />
        </div>

        <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
          <ColumnTitle>Navigation</ColumnTitle>
          <ul className="mt-6 space-y-3.5">
            {footerNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <ColumnTitle>Services</ColumnTitle>
          <ul className="mt-6 space-y-3.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={linkClass}>
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <ColumnTitle>Get in Touch</ColumnTitle>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href={site.contact.phoneHref} className={`${linkClass} flex items-center gap-3`}>
                <Phone aria-hidden="true" className="size-4 shrink-0 text-gold" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className={`${linkClass} flex items-center gap-3 break-all`}>
                <Mail aria-hidden="true" className="size-4 shrink-0 text-gold" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3 text-mist">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
              <address className="not-italic leading-relaxed">{formatAddress()}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-7 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.copyrightYear} Rukesh Construction. All Rights Reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-gold">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
