import { useTranslation } from "react-i18next";
import { OFFER } from "@/config/offer";
import SectionHeading from "./SectionHeading";

/** Faixa escura com as estatísticas de percepção. */
const StatsBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="noise relative overflow-hidden bg-brand-dark py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={t("stats.kicker")}
          title={t("stats.title")}
          subtitle={t("stats.subtitle")}
          dark
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {OFFER.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-3 rounded-3xl border border-brand-gold/25 bg-brand-dark2/80 px-6 py-8 text-center"
            >
              <span className="font-display text-5xl font-extrabold text-brand-gold">
                {stat.value}
              </span>
              <span className="text-sm leading-relaxed text-white/75">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
