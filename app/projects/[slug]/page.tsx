import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Check, ChevronRight, MapPin, Tag } from "lucide-react";
import { getAdjacentProject, getProject, projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { QUOTE_HREF } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

// Prerender every project page at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: `${project.name} — ${project.tagline} by Rukesh Construction. ${project.overview[0]}`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Rukesh Construction`,
      description: project.tagline,
      images: [{ url: project.cover, alt: project.name }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getAdjacentProject(project.slug);

  const meta = [
    { icon: Tag, label: "Category", value: project.category },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Check, label: "Status", value: project.status },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-ink pb-12 pt-36 sm:pb-16">
        <Image src={project.cover} alt={`${project.name} — ${project.tagline}`} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/55 to-ink/30" />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-mist">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3 text-gold" /></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3 text-gold" /></li>
              <li aria-current="page" className="text-white">{project.name}</li>
            </ol>
          </nav>
          <Eyebrow>{project.category} Project</Eyebrow>
          <h1 className="h-display mt-5 max-w-5xl text-[2.2rem] text-white sm:text-5xl lg:text-[4.2rem]">{project.name}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">{project.tagline}</p>

          <dl className="mt-12 grid grid-cols-2 border-t border-white/15 md:grid-cols-4">
            {meta.map(({ icon: Icon, label, value }, i) => (
              <div key={label} className={`py-5 pr-4 ${i > 0 ? "md:border-l md:border-white/15 md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-white/15 pl-5 md:pl-6" : ""}`}>
                <dt className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-mist">
                  <Icon aria-hidden="true" className="size-3.5 text-gold" />
                  {label}
                </dt>
                <dd className="mt-2 font-display text-base font-semibold text-white sm:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview + scope */}
      <section aria-labelledby="overview-title" className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="light">Project Overview</Eyebrow>
            <h2 id="overview-title" className="h-display mt-5 text-3xl text-ink sm:text-5xl">
              The brief &amp; the build
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
              {project.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="self-start bg-ink p-8 text-white sm:p-10 lg:col-span-5">
            <h2 className="eyebrow text-gold">Scope of Work</h2>
            <ol className="mt-6">
              {project.scope.map((item, i) => (
                <li key={item} className="flex gap-5 border-b border-white/10 py-4 last:border-0">
                  <span className="font-display text-sm font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.95rem] text-white/85">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Statistics */}
      <section aria-label="Project statistics" className="bg-charcoal">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {project.stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col-reverse gap-2 border-white/10 py-10 sm:py-12 ${i % 2 === 1 ? "border-l pl-5 sm:pl-8" : "pr-4"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}>
              <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-mist">{s.label}</dt>
              <dd className="h-display text-2xl text-white sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-title" className="section-y bg-paper">
        <div className="container-x">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow tone="light">Gallery</Eyebrow>
              <h2 id="gallery-title" className="h-display mt-5 text-3xl text-ink sm:text-5xl">Project in pictures</h2>
            </div>
            <p className="text-sm text-slate">Select an image to view it full screen.</p>
          </div>
          <ProjectGallery images={project.gallery} />
        </div>
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights-title" className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="light">Key Highlights</Eyebrow>
            <h2 id="highlights-title" className="h-display mt-5 text-3xl text-ink sm:text-5xl">What sets it apart</h2>
            <ButtonLink href={QUOTE_HREF} variant="dark" className="mt-10">
              Plan a Similar Project
            </ButtonLink>
          </Reveal>
          <ul className="grid gap-px self-start border border-ink/10 bg-ink/10 lg:col-span-7">
            {project.highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={i * 0.08} className="flex items-center gap-6 bg-white p-6 sm:p-8">
                <span className="h-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-title text-lg text-ink sm:text-xl">{h}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project */}
      <section aria-label="Next project" className="border-t border-ink/10 bg-white">
        <Link href={`/projects/${next.slug}`} className="group container-x flex items-center justify-between gap-6 py-10 sm:py-14">
          <div>
            <p className="eyebrow text-gold-deep">Next Project</p>
            <p className="h-display mt-3 text-3xl text-ink transition-colors group-hover:text-gold-deep sm:text-5xl">{next.name}</p>
          </div>
          <span className="flex size-14 shrink-0 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-gold sm:size-16">
            <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </section>

      <CTA />
    </>
  );
}
