import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
  crumbs: { label: string; href?: string }[];
};

/** Hero banner for inner pages (About, Services, Projects, Contact…). */
export function PageHero({ eyebrow, title, intro, image, imageAlt, crumbs }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-ink pb-14 pt-36 sm:min-h-[70svh] sm:pb-20">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/75 to-ink/45" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-mist">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight aria-hidden="true" className="size-3 text-gold" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h-display mt-5 max-w-4xl text-[2.1rem] text-white sm:text-5xl lg:text-[3.8rem]">{title}</h1>
        {intro && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p>}
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-gold/70 via-gold/20 to-transparent" />
    </section>
  );
}
