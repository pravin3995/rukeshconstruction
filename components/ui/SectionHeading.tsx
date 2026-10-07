import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Three stepped lines — echoes the base lines under the logo mark. */
export function BaseLines({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("inline-flex flex-col items-end gap-[3px]", className)}>
      <span className="h-px w-3 bg-current" />
      <span className="h-px w-4 bg-current" />
      <span className="h-px w-5 bg-current" />
    </span>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", tone === "dark" ? "text-gold" : "text-gold-deep", className)}>
      <BaseLines />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  /** "dark" = on a dark background, "light" = on a light background. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  /** Overrides the default heading size classes. */
  titleClassName?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
  titleClassName = "text-[2.1rem] sm:text-5xl lg:text-[3.6rem]",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>
        {eyebrow}
      </Eyebrow>
      <Tag
        className={cn(
          "h-display mt-5",
          titleClassName,
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-mist" : "text-slate",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
