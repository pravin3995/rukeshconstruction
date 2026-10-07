import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline-light" | "outline-dark" | "dark";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  dark: "bg-ink text-white hover:bg-charcoal",
  "outline-light": "border border-white/35 text-white hover:border-gold hover:text-gold-light",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
};

const base =
  "group/btn inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 px-6 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ease-[var(--ease-premium)] sm:px-7";

/** Link styled as a button. Arrow nudges diagonally on hover. */
export function ButtonLink({ href, children, variant = "gold", className, icon = true }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      )}
    </Link>
  );
}

export const buttonClasses = (variant: Variant = "gold", className?: string) =>
  cn(base, variants[variant], className);
