"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn, EASE } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

/** Filterable project listing for /projects. */
export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "min-h-11 cursor-pointer border px-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                filter === f ? "border-ink bg-ink text-white" : "border-ink/15 text-slate hover:border-ink hover:text-ink",
              )}
            >
              {f} <span className={filter === f ? "text-gold" : "text-slate/70"}>({count})</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-12 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
              className={cn(i % 3 === 0 && visible.length > 2 && "md:col-span-2")}
            >
              <ProjectCard
                project={project}
                headingLevel="h2"
                priority={i < 2}
                frameClassName={cn(
                  "aspect-[4/5] sm:aspect-[4/3]",
                  i % 3 === 0 && visible.length > 2 && "md:aspect-[21/9]",
                )}
                sizes={i % 3 === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
