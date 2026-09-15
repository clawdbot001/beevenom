import { useTranslation } from "react-i18next";
import { Atom, Droplets, Sparkles } from "lucide-react";
import { OFFER, type Benefit } from "@/config/offer";
import { CheckCircle2 } from "lucide-react";
import OfferImage from "./OfferImage";
import SectionHeading from "./SectionHeading";

const ICONS: Record<Benefit["icon"], typeof Sparkles> = {
  sparkles: Sparkles,
  droplets: Droplets,
  atom: Atom,
};

/** Três blocos de benefícios com bullets, depoimento e imagem. */
const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading kicker={t("benefits.kicker")} title={t("benefits.title")} />

      <div className="mt-10 flex flex-col gap-8 lg:gap-12">
        {OFFER.benefits.map((benefit, i) => {
          const Icon = ICONS[benefit.icon];
          const imageKey = `benefit${i + 1}` as "benefit1" | "benefit2" | "benefit3";
          const image = OFFER.images[imageKey];
          const reversed = i % 2 === 1;

          return (
            <article
              key={benefit.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <OfferImage
                src={image}
                alt={benefit.title}
                icon={Icon}
                className="aspect-[4/3] rounded-3xl border border-border shadow-[var(--shadow-card)]"
              />
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl">
                    {benefit.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <blockquote className="rounded-2xl border border-brand-gold/25 bg-brand-cream p-5">
                  <p className="text-sm italic leading-relaxed text-brand-dark">“{benefit.quote}”</p>
                  <footer className="mt-3 text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                    — {benefit.author}
                  </footer>
                </blockquote>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
