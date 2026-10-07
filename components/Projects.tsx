import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/**
 * Featured projects in an editorial layout:
 *   [ tall feature ][ landscape ]
 *   [ tall feature ][ landscape ]
 *   [       full-width panorama ]
 */
export function Projects() {
  const [a, b, c, d] = projects.filter((p) => p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y scroll-mt-20 bg-white">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title={<span id="projects-title">Projects that speak for themselves</span>}
          />
          <ButtonLink href="/projects" variant="outline-dark" className="self-start lg:self-auto">
            View All Projects
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-12">
          {a && (
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <ProjectCard project={a} frameClassName="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[720px]" sizes="(min-width: 1024px) 58vw, 100vw" />
            </Reveal>
          )}
          {b && (
            <Reveal className="lg:col-span-5" delay={0.1}>
              <ProjectCard compact project={b} frameClassName="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[350px]" sizes="(min-width: 1024px) 42vw, 100vw" />
            </Reveal>
          )}
          {c && (
            <Reveal className="lg:col-span-5" delay={0.2}>
              <ProjectCard compact project={c} frameClassName="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[350px]" sizes="(min-width: 1024px) 42vw, 100vw" />
            </Reveal>
          )}
          {d && (
            <Reveal className="lg:col-span-12">
              <ProjectCard project={d} frameClassName="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/8]" sizes="100vw" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
