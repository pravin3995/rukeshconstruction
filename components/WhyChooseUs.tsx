import Image from "next/image";
import { whyChooseUs } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TowerLines } from "./ui/TowerLines";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-title"
      className="section-y relative isolate scroll-mt-20 overflow-hidden bg-ink"
    >
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10" />
      <TowerLines className="absolute -right-24 -top-10 -z-10 h-[520px] w-auto opacity-25 sm:right-0" delay={0.2} />

      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tone="dark"
              eyebrow="Why Choose Us"
              titleClassName="text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-[3.1rem]"
              title={
                <span id="why-title">
                  Why Rukesh <span className="block text-gold">Construction?</span>
                </span>
              }
              intro="Construction is built on trust. We earn it through the way we plan, communicate and build — on every project, at every scale."
            />
            <Reveal delay={0.15} className="relative mt-12 hidden aspect-[4/3] overflow-hidden lg:block">
              {/* REPLACE: /public/images/site/structure.jpg */}
              <Image
                src="/images/site/structure.jpg"
                alt="Building frame under construction against a clear sky"
                fill
                sizes="40vw"
                className="object-cover grayscale-[35%]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
              {/* Blueprint corner marks */}
              <span aria-hidden="true" className="absolute left-4 top-4 size-6 border-l border-t border-gold" />
              <span aria-hidden="true" className="absolute bottom-4 right-4 size-6 border-b border-r border-gold" />
            </Reveal>
          </div>
        </div>

        <ol className="grid gap-px self-start border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 2) * 0.08}
                className="group relative bg-ink p-7 transition-colors duration-500 hover:bg-charcoal sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-7 text-gold" strokeWidth={1.4} />
                  <span className="font-display text-4xl font-extrabold text-white/[0.07] transition-colors duration-500 group-hover:text-gold/25">
                    {item.number}
                  </span>
                </div>
                <h3 className="h-title mt-10 text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-[width] duration-700 ease-[var(--ease-premium)] group-hover:w-full"
                />
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
