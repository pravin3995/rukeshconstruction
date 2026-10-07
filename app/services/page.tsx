import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";
import { QUOTE_HREF } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial and industrial construction, renovation, project management and structural & civil works by Rukesh Construction.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Our construction <span className="text-gold">expertise</span>
          </>
        }
        intro="Six core disciplines, one standard of quality. Explore how we can support your next project."
        image="/images/site/page-services.jpg"
        imageAlt="Excavator preparing a construction site"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Quick index */}
      <nav aria-label="Services" className="sticky top-[72px] z-30 border-b border-ink/10 bg-white/95 backdrop-blur">
        <ul className="container-x flex gap-6 overflow-x-auto py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] [scrollbar-width:none]">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="text-slate transition-colors hover:text-ink">
                <span className="text-gold-deep">{s.number}</span> {s.shortTitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon;
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className={cn("scroll-mt-36 py-16 sm:py-24", i > 0 && "border-t border-ink/8")}
            >
              <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
                <Reveal className={cn("relative lg:col-span-6", reversed && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                    <Image src={service.image} alt={`${service.title} by Rukesh Construction`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <span className="absolute -bottom-5 left-5 bg-ink px-5 py-3 font-display text-3xl font-extrabold text-gold sm:left-8">
                    {service.number}
                  </span>
                </Reveal>
                <Reveal delay={0.1} className="lg:col-span-6">
                  <span className="flex size-14 items-center justify-center border border-gold/60 text-gold-deep">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
                  </span>
                  <h2 id={`${service.slug}-title`} className="h-display mt-7 text-3xl text-ink sm:text-[2.6rem]">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">{service.description}</p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[0.95rem] text-charcoal">
                        <Check aria-hidden="true" className="size-4 shrink-0 text-gold-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={QUOTE_HREF} variant="dark" className="mt-10">
                    Discuss Your Project
                  </ButtonLink>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <Process />
      <CTA />
    </>
  );
}
