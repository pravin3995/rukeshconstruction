import { PageHero } from "./ui/PageHero";

/** Simple long-form layout for policy pages. */
export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        image="/images/site/page-contact.jpg"
        imageAlt=""
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          {/* REPLACE: this is template text, not legal advice. Have it reviewed before launch. */}
          <p className="border-l-2 border-gold bg-paper p-5 text-sm leading-relaxed text-slate">
            This page contains placeholder content and should be reviewed and replaced with your own legal text before
            the website goes live.
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="h-title text-2xl text-ink">{s.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
