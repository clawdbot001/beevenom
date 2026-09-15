import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

const SectionHeading = ({
  kicker,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-3",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className,
    )}
  >
    {kicker && (
      <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
        {kicker}
      </span>
    )}
    {title && (
      <h2
        className={cn(
          "font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-brand-dark",
        )}
      >
        {title}
      </h2>
    )}
    {subtitle && (
      <p
        className={cn(
          "max-w-2xl text-sm leading-relaxed sm:text-base",
          dark ? "text-white/70" : "text-muted-foreground",
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
