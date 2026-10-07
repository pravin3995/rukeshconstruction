import Image from "next/image";
import { Check } from "lucide-react";
import { aboutPillars } from "@/data/content";
import { site } from "@/data/site";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

export function About({ showCta = true }: { showCta?: boolean }) {
  const years = site.stats[0];
  return (
    <section id="about" aria-labelledby="about-title" className="section-y scroll-mt-20 bg-paper">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Image column: solid photograph over an offset gold outline — the logo's outline/solid pairing. */}
        <Reveal className="relative lg:col-span-6" y={40}>
          <div aria-hidden="true" className="absolute -left-3 -top-3 bottom-10 right-10 border border-gold sm:-left-5 sm:-top-5" />
          <div className="relative aspect-[4/5] overflow-hidden bg-graphite sm:aspect-[5/6]">
            {/* REPLACE: /public/images/site/about.jpg */}
            <Image
              src="/images/site/about.jpg"
              alt="Construction team working on reinforcement steel at a building site"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-0 w-48 bg-ink p-6 sm:right-6 sm:w-56 sm:p-7">
            <p className="h-display text-5xl text-white sm:text-6xl">
              {years.value}
              <span className="text-gold">{years.suffix}</span>
            </p>
            <p className="mt-2 text-xs uppercase leading-relaxed tracking-[0.2em] text-mist">{years.label}</p>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow tone="light">About Rukesh Construction</Eyebrow>
            <h2 id="about-title" className="h-display mt-5 text-[2.1rem] text-ink sm:text-5xl lg:text-[3.4rem]">
              Building with purpose. <span className="text-gold-deep">Creating with precision.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              Rukesh Construction is committed to delivering dependable construction solutions through quality
              workmanship, attention to detail and professional project execution.
            </p>
          </Reveal>

          <ul className="mt-10 border-t border-ink/10">
            {aboutPillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={0.1 + i * 0.08} className="flex gap-5 border-b border-ink/10 py-5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-gold/60 text-gold-deep">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <div>
                    <h3 className="h-title text-lg text-ink">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{pillar.description}</p>
                  </div>
              </Reveal>
            ))}
          </ul>

          {showCta && (
            <Reveal delay={0.3} className="mt-10">
              <ButtonLink href="/about" variant="dark">
                Know More About Us
              </ButtonLink>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
