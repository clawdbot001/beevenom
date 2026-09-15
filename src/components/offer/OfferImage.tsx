import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Hexagon } from "lucide-react";

interface OfferImageProps {
  src?: string;
  alt?: string;
  className?: string;
  icon?: LucideIcon;
  label?: string;
}

/** Renderiza a imagem se houver URL; caso contrário um placeholder temático. */
const OfferImage = ({ src, alt = "", className, icon: Icon = Hexagon, label }: OfferImageProps) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        crossOrigin="anonymous"
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-cream via-accent to-secondary",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
        <Icon className="h-8 w-8" />
      </div>
      {label && (
        <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-dark/60">
          {label}
        </span>
      )}
    </div>
  );
};

export default OfferImage;
