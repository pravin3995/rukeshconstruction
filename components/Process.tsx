"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { EASE } from "@/lib/utils";

/**
 * Timeline: vertical on mobile/tablet, horizontal on desktop.
 * A gold progress line fills as the section scrolls through the viewport.
 */
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" aria-labelledby="process-title" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title={<span id="process-title">How we work</span>}
          intro="A clear, structured approach keeps every project predictable — from the first conversation to the day we hand over the keys."
        />

        <div ref={ref} className="relative mt-16 lg:mt-24">
          {/* Track + progress (desktop: horizontal) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-ink/12 lg:block">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-gold" />
          </div>
          {/* Track + progress (mobile: vertical) */}
          <div aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/12 lg:hidden">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-gold" />
          </div>

          <ol className="grid gap-12 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                  className="group relative flex gap-6 lg:flex-col lg:gap-0"
                >
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center border border-ink/15 bg-white text-ink transition-colors duration-500 group-hover:border-gold group-hover:bg-ink group-hover:text-gold">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="pt-1 lg:pt-8">
                    <span className="font-display text-xs font-semibold tracking-[0.24em] text-gold-deep">
                      {step.number}
                    </span>
                    <h3 className="h-title mt-2 text-lg text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
