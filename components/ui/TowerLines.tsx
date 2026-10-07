"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Large architectural line drawing derived from the logo: stepped tower
 * outlines rising along a diagonal. Draws itself in once when visible.
 */
export function TowerLines({ className, delay = 0.4 }: { className?: string; delay?: number }) {
  const draw = (i: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.8, delay: delay + i * 0.25, ease: [0.65, 0, 0.35, 1] as const },
  });

  return (
    <svg viewBox="0 0 400 460" fill="none" aria-hidden="true" className={cn("pointer-events-none", className)}>
      <g stroke="var(--gold)" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <motion.path {...draw(0)} d="M40 420 V250 L110 214 V130 L180 94 V40 L250 4 V300" />
        <motion.path {...draw(1)} d="M110 214 V384 M180 94 V348" />
        <motion.path {...draw(2)} d="M0 448 L400 222" />
      </g>
      <g stroke="rgb(255 255 255 / 0.18)" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <motion.path {...draw(3)} d="M270 290 V20 L330 0 V256 M345 248 V70 L395 52 V220" />
        <motion.path {...draw(4)} d="M140 452 H230 M126 444 H230 M154 460 H230" />
      </g>
    </svg>
  );
}
