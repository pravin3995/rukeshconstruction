import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rukesh Construction — a construction company committed to quality workmanship, attention to detail and professional project execution.",
  alternates: { canonical: "/about" },
};

// REPLACE: edit the company story copy below with your own history and values.
const values = [
  {
    title: "Our Mission",
    text: "To deliver dependable construction through skilled workmanship, honest communication and careful project management — so every client can build with confidence.",
  },
  {
    title: "Our Vision",
    text: "To be recognised as a construction partner known for structures that stand the test of time, and for the integrity with which they are built.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Built on trust. <span className="text-gold">Driven by craft.</span>
          </>
        }
        intro="A construction company focused on doing things properly — from the first drawing to the final inspection."
        image="/images/site/structure.jpg"
        imageAlt="Building frame under construction"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <Stats />
      <About showCta={false} />

      <section aria-labelledby="mission-title" className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="light">What Drives Us</Eyebrow>
            <h2 id="mission-title" className="h-display mt-5 text-[2.1rem] text-ink sm:text-5xl">
              Strong foundations, in every sense.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              We believe a building is only as good as the process behind it. That is why we invest in planning,
              supervision and quality control as much as we invest in materials.
            </p>
          </Reveal>
          <div className="grid gap-5 lg:col-span-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="border-l-2 border-gold bg-paper p-8 sm:p-10">
                <h3 className="h-title text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate">{v.text}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="grid grid-cols-2 gap-5">
              {/* REPLACE: team / site photography */}
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <Image src="/images/site/team-1.jpg" alt="Craftsman cutting timber on site" fill sizes="(min-width:1024px) 28vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <Image src="/images/site/team-2.jpg" alt="Technician in hard hat working on an installation" fill sizes="(min-width:1024px) 28vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
