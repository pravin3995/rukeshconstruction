"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { SectionHeading } from "./ui/SectionHeading";
import { ButtonLink } from "./ui/Button";
import { EASE } from "@/lib/utils";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 3) * 0.08 }}
      className="bg-ink"
    >
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className="h-full">
        <Link
          href={`/services#${service.slug}`}
          className="group relative flex h-full min-h-[340px] cursor-pointer flex-col overflow-hidden bg-charcoal p-7 transition-colors duration-500 hover:bg-graphite sm:p-9"
        >
          {/* Image reveals faintly on hover */}
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 grayscale transition-[opacity,transform] duration-700 ease-[var(--ease-premium)] group-hover:scale-105 group-hover:opacity-[0.14]"
          />
          {/* Gold accent line */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-100"
          />

          <div className="relative flex items-start justify-between">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-mist transition-colors duration-300 group-hover:text-gold">
              {service.number}
            </span>
            <span className="flex size-14 items-center justify-center border border-white/12 text-white transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </span>
          </div>

          <div className="relative mt-auto pt-14">
            <h3 className="h-title text-[1.4rem] text-white sm:text-2xl">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">{service.summary}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-gold">
              Learn more
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export function Services({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y scroll-mt-20 bg-ink">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Our Services"
            title={
              <span id="services-title">
                Our construction <span className="text-gold">expertise</span>
              </span>
            }
            intro="From the foundations up, we bring engineering discipline and skilled craftsmanship to every type of project."
          />
          {showAllLink && (
            <ButtonLink href="/services" variant="outline-light" className="self-start lg:self-auto">
              All Services
            </ButtonLink>
          )}
        </div>

        {/* gap-px over a light background draws hairline dividers between cards */}
        <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
