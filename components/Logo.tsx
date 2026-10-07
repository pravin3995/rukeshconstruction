import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Rukesh Construction logo.
 *
 * The mark is a vector redraw of the supplied logo (gold outlined towers rising
 * on a diagonal, charcoal solid towers behind, three base lines) so it stays
 * crisp at every size and works on dark and light backgrounds.
 *
 * REPLACE: to use an official vector file instead, drop it in
 * /public/images/brand/ and render it with next/image inside <LogoMark />.
 * The original raster logo is kept at /public/images/brand/logo-original.jpg.
 */
export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  /** "dark" for dark backgrounds, "light" for light backgrounds. */
  tone?: "dark" | "light";
}) {
  const solid = tone === "dark" ? "#3a3a3a" : "#1f1f1f";
  return (
    <svg viewBox="0 0 100 92" className={className} aria-hidden="true" focusable="false">
      {/* Charcoal solid towers (built mass) */}
      <g fill={solid}>
        <polygon points="50,3 60,0 60,46 50,51.5" />
        <polygon points="63,10 72,7 72,39.4 63,44.4" />
        <polygon points="75,22 84,19 84,32.8 75,37.8" />
        {/* lower towers beneath the diagonal */}
        <polygon points="52,63 62,57.5 62,80 52,80" />
        <polygon points="65,55.8 74,50.9 74,72 65,75" />
        <polygon points="77,49.3 86,44.4 86,64 77,68" />
      </g>
      {/* Gold outlined towers (the blueprint) */}
      <g fill="none" stroke="var(--gold)" strokeWidth="2.6" strokeLinejoin="miter">
        <path d="M10 74.5 V50 L22 44 V28 L34 22 V12 L46 6 V54.7" />
        <path d="M22 44 V67.9 M34 22 V61.3" />
      </g>
      {/* Rising diagonal */}
      <polygon points="0,81.5 98,26 1.5,84.5" fill="var(--gold)" />
      {/* Three base lines */}
      <g fill={solid}>
        <rect x="38" y="80" width="14" height="1.6" />
        <rect x="36" y="83.4" width="16" height="1.6" />
        <rect x="34" y="86.8" width="18" height="1.6" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  href = "/",
}: {
  className?: string;
  tone?: "dark" | "light";
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Rukesh Construction — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark tone={tone} className="h-10 w-auto shrink-0 sm:h-11" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.15rem] font-extrabold tracking-[0.06em] text-gold sm:text-[1.3rem]"
          style={{ fontStretch: "110%" }}
        >
          RUKESH
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-medium tracking-[0.42em] sm:text-[0.6rem]",
            tone === "dark" ? "text-mist" : "text-slate",
          )}
        >
          CONSTRUCTION
        </span>
      </span>
    </Link>
  );
}
