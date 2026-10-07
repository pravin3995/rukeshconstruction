"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn, EASE } from "@/lib/utils";

type GalleryImage = { src: string; alt: string };

/** Editorial image grid with an accessible full-screen lightbox. */
export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
        {images.map((img, i) => (
          <li
            key={img.src}
            className={cn(
              i === 0 && "col-span-2 lg:col-span-8 lg:row-span-2",
              i > 0 && "lg:col-span-4",
              i === 3 && "col-span-2 lg:col-span-12",
            )}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${img.alt}`}
              className={cn(
                "group relative block w-full cursor-zoom-in overflow-hidden bg-graphite",
                i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : i === 3 ? "aspect-[16/9] lg:aspect-[21/8]" : "aspect-square lg:aspect-[4/3]",
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={i === 0 || i === 3 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex size-10 items-center justify-center bg-ink/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand aria-hidden="true" className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Project image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
            onClick={close}
          >
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative h-[75svh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[index].src} alt={images[index].alt} fill sizes="100vw" className="object-contain" />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.24em] text-mist">
              {index + 1} / {images.length}
            </p>
            {[
              { label: "Close", icon: X, onClick: close, cls: "right-4 top-4 sm:right-8 sm:top-8" },
              { label: "Previous image", icon: ChevronLeft, onClick: () => step(-1), cls: "left-2 top-1/2 -translate-y-1/2 sm:left-6" },
              { label: "Next image", icon: ChevronRight, onClick: () => step(1), cls: "right-2 top-1/2 -translate-y-1/2 sm:right-6" },
            ].map(({ label, icon: Icon, onClick, cls }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                autoFocus={label === "Close"}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className={cn(
                  "absolute flex size-12 cursor-pointer items-center justify-center border border-white/20 bg-ink/60 text-white transition-colors hover:border-gold hover:text-gold",
                  cls,
                )}
              >
                <Icon aria-hidden="true" className="size-5" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
