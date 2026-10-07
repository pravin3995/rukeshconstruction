import Image from "next/image";
import { QUOTE_HREF } from "@/data/site";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/SectionHeading";

export function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-ink py-28 sm:py-36 lg:py-44">
      {/* REPLACE: /public/images/site/cta.jpg */}
      <Image
        src="/images/site/cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/75" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/60 to-transparent" />
      {/* Rising diagonal from the logo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 size-full"
      >
        <line x1="0" y1="600" x2="1440" y2="120" stroke="var(--gold)" strokeOpacity="0.55" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="560" x2="1440" y2="80" stroke="var(--gold)" strokeOpacity="0.18" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="container-x">
        <Reveal className="max-w-4xl">
          <Eyebrow>Start a Conversation</Eyebrow>
          <h2 id="cta-title" className="h-display mt-6 text-[2.1rem] text-white sm:text-5xl lg:text-[3.6rem]">
            Let&apos;s build something <span className="text-gold">great</span> together.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Have a project in mind? Talk to our team and let&apos;s turn your vision into reality.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={QUOTE_HREF}>Start Your Project</ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
