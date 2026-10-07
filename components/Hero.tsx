"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { BaseLines } from "./ui/SectionHeading";
import { TowerLines } from "./ui/TowerLines";
import { QUOTE_HREF } from "@/data/site";
import { EASE } from "@/lib/utils";

const lines = [
  { text: "We build", accent: false },
  { text: "what lasts.", accent: true },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Subtle parallax: image drifts slower than the page, content fades as you leave.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* REPLACE: hero photograph — /public/images/site/hero.jpg */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-20">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="relative size-full"
        >
          <Image
            src="/images/site/hero.jpg"
            alt="High-rise building under construction with tower cranes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/70 to-ink/10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-ink to-transparent" />

      <TowerLines className="absolute bottom-[8%] right-[4%] -z-10 hidden h-[62%] w-auto opacity-70 lg:block" delay={0.9} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x pb-16 pt-32 sm:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="eyebrow text-gold"
        >
          <BaseLines />
          Building the Future
        </motion.p>

        <h1 id="hero-title" className="h-display mt-6 text-[2.2rem] leading-[0.95] text-white sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.6rem]">
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.35 + i * 0.14 }}
                className={line.accent ? "block text-gold" : "block"}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.8 }}
          aria-hidden="true"
          className="mt-8 h-px w-40 origin-left bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Rukesh Construction delivers reliable, high-quality construction solutions with a commitment to excellence,
          precision and long-term value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <ButtonLink href="/projects">Explore Our Projects</ButtonLink>
          <ButtonLink href={QUOTE_HREF} variant="outline-light">
            Get a Quote
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.a
        href="#stats"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-5 hidden cursor-pointer items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-gold sm:right-8 sm:flex lg:right-12"
      >
        Scroll
        <span className="flex size-10 items-center justify-center border border-white/20">
          <ArrowDown aria-hidden="true" className="size-4" />
        </span>
      </motion.a>
    </section>
  );
}
