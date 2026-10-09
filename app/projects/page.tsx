import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore residential and commercial construction projects by Rukesh Construction.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Projects that <span className="text-gold">speak</span> for themselves
          </>
        }
        intro="A selection of residential and commercial work — each delivered with the same commitment to quality."
        image="/images/site/page-projects.jpg"
        imageAlt="City skyline with high-rise buildings at dusk"
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section aria-label="Project list" className="section-y bg-white">
        <div className="container-x">
          <ProjectsGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
