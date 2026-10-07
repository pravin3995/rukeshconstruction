import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** Tailwind aspect / height classes for the image frame. */
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
  /** Smaller title for tighter card slots. */
  compact?: boolean;
};

/** Large editorial project card — image zooms on hover, details sit over a dark fade. */
export function ProjectCard({
  project,
  frameClassName = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  headingLevel: Heading = "h3",
  compact = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group relative block cursor-pointer overflow-hidden bg-graphite", frameClassName)}
    >
      <Image
        src={project.cover}
        alt={`${project.name} — ${project.tagline}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <span className="bg-ink/70 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold-light backdrop-blur-sm">
            {project.category}
          </span>
          <span className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-white/70">{project.year}</span>
        </div>

        <div>
          <Heading
            className={cn(
              "h-display text-[1.75rem] text-white sm:text-4xl",
              compact ? "lg:text-[1.9rem]" : "lg:text-[2.6rem]",
            )}
          >
            {project.name}
          </Heading>
          <p className="mt-2 text-sm text-white/75 sm:text-base">{project.tagline}</p>
          <div className={cn("flex flex-wrap items-center justify-between gap-4 border-t border-white/15", compact ? "mt-4 pt-4" : "mt-6 pt-5")}>
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
              <MapPin aria-hidden="true" className="size-3.5 text-gold" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-gold">
              View Project
              <span className="flex size-9 items-center justify-center border border-white/30 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
