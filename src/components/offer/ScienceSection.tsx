import { useTranslation } from "react-i18next";
import { CheckCircle2, FlaskConical } from "lucide-react";
import { OFFER } from "@/config/offer";
import { Button } from "@/components/ui/button";
import OfferImage from "./OfferImage";

const scrollToOrder = () =>
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });

/** Seção de ciência: tecnologia Bee Collagen-P. */
const ScienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border/60 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <OfferImage
          src={OFFER.images.science}
          icon={FlaskConical}
          label={OFFER.science.kicker}
          className="mx-auto aspect-square w-full max-w-md rounded-full border border-brand-gold/30 shadow-[var(--shadow-card)]"
        />
        <div className="flex flex-col gap-5">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
            {OFFER.science.kicker}
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-brand-dark text-balance sm:text-4xl">
            {OFFER.science.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {OFFER.science.text}
          </p>
          <p className="flex items-start gap-2.5 rounded-2xl border border-brand-gold/25 bg-brand-cream p-4 text-sm font-medium leading-relaxed text-brand-dark">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
            {OFFER.science.bullet}
          </p>
          <div>
            <Button variant="gold" size="lg" onClick={scrollToOrder} className="uppercase">
              {t("science.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
