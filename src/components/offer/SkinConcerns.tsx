import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  Eye,
  Feather,
  Scan,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { OFFER, type Concern } from "@/config/offer";
import OfferImage from "./OfferImage";
import SectionHeading from "./SectionHeading";

const ICONS: Record<Concern["key"], LucideIcon> = {
  eye: Eye,
  sparkles: Sparkles,
  chevronDown: ChevronDown,
  scan: Scan,
  feather: Feather,
};

/** Grade de preocupações da pele tratadas pelo produto. */
const SkinConcerns = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading kicker={t("concerns.kicker")} title={t("concerns.title")} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {OFFER.concerns.map((concern) => {
            const Icon = ICONS[concern.key];
            return (
              <div
                key={concern.key}
                className="group flex flex-col gap-3 overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <OfferImage
                  src={concern.image}
                  alt={concern.label}
                  icon={Icon}
                  className="aspect-square rounded-2xl"
                />
                <span className="pb-1 text-center text-sm font-bold leading-snug text-brand-dark">
                  {concern.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkinConcerns;
