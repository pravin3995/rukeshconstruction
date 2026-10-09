"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/utils";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Set after mount (not during render) so the first client render matches the server's "0".
    if (reduce) return setDisplay(value);
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function Stats({ className }: { className?: string }) {
  return (
    <section id="stats" aria-label="Company at a glance" className={cn("relative bg-charcoal", className)}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="container-x">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className={cn(
                "flex flex-col-reverse gap-3 border-white/10 py-10 sm:py-14 lg:px-10 lg:first:pl-0",
                i % 2 === 0 ? "pr-4 sm:pr-8" : "border-l pl-5 sm:pl-8",
                i < 2 && "border-b lg:border-b-0",
                i > 0 && "lg:border-l",
              )}
            >
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-mist">{stat.label}</dt>
              <dd className="h-display text-5xl text-white sm:text-6xl lg:text-7xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
