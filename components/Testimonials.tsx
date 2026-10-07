import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-y border-t border-ink/8 bg-paper">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title={<span id="testimonials-title">What our clients say</span>}
        />

        <ul className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.1} className="flex">
              <figure className="relative flex w-full flex-col border border-ink/10 bg-white p-8 transition-[border-color,box-shadow] duration-500 hover:border-gold/60 hover:shadow-[0_24px_60px_-30px_rgb(5_5_5/0.35)] sm:p-10">
                <Quote aria-hidden="true" className="size-9 text-gold" strokeWidth={1.2} />
                <div className="mt-6 flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className={s < t.rating ? "size-4 fill-gold text-gold" : "size-4 text-ink/20"}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal sm:text-[1.05rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-6">
                  <p className="h-title text-base text-ink">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate">
                    {t.role} · {t.project}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
