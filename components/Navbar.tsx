"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink, buttonClasses } from "./ui/Button";
import { navLinks, QUOTE_HREF, site } from "@/data/site";
import { cn, EASE } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and enable Escape while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          solid
            ? "border-b border-white/10 bg-ink/92 backdrop-blur-md"
            : "border-b border-transparent bg-linear-to-b from-ink/60 to-transparent",
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between transition-[height] duration-500",
            solid ? "h-[72px]" : "h-[84px] lg:h-[96px]",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                      "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive(link.href) ? "text-white after:scale-x-100" : "text-white/70 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink href={QUOTE_HREF} className="min-h-11">
                Get a Quote
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 cursor-pointer items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer lives outside <header>: the header's backdrop-filter would otherwise trap position:fixed. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink pt-[72px] lg:hidden"
          >
            <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
            <nav aria-label="Mobile" className="container-x relative flex min-h-full flex-col py-8">
              <ul className="border-t border-white/10">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-5 font-display text-2xl font-bold uppercase tracking-tight",
                        isActive(link.href) ? "text-gold" : "text-white",
                      )}
                      style={{ fontStretch: "110%" }}
                    >
                      {link.label}
                      <span className="text-xs font-medium tracking-[0.2em] text-mist">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
                className="mt-auto space-y-5 pt-10"
              >
                <Link href={QUOTE_HREF} onClick={() => setOpen(false)} className={buttonClasses("gold", "w-full")}>
                  Get a Quote
                </Link>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center justify-center gap-3 text-sm tracking-wide text-mist"
                >
                  <Phone aria-hidden="true" className="size-4 text-gold" />
                  {site.contact.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
