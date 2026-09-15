import { useTranslation } from "react-i18next";
import { Atom, Hexagon } from "lucide-react";
import { OFFER } from "@/config/offer";
import OfferImage from "./OfferImage";

/** Fórmula superior: composição e ingrediente principal. */
const FormulaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="noise relative overflow-hidden bg-brand-dark py-14 lg:py-20">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
            {OFFER.formula.kicker}
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white text-balance sm:text-4xl">
            {OFFER.formula.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-white/70">{OFFER.formula.text}</p>
          <div className="overflow-hidden rounded-2xl border border-brand-gold/25">
            <div className="flex items-center gap-2 bg-gradient-to-r from-brand-honey to-brand-gold px-5 py-3">
              <Hexagon className="h-5 w-5 fill-white/20 text-white" />
              <span className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
                {OFFER.formula.ingredient}
              </span>
            </div>
            <p className="bg-brand-dark2 px-5 py-4 text-sm leading-relaxed text-white/70">
              {OFFER.formula.ingredientText}
            </p>
          </div>
        </div>
        <OfferImage
          src={OFFER.images.formula}
          icon={Atom}
          label={OFFER.formula.kicker}
          className="mx-auto aspect-square w-full max-w-md rounded-full border border-brand-gold/30 shadow-[var(--shadow-glow)]"
        />
      </div>
    </section>
  );
};

export default FormulaSection;
