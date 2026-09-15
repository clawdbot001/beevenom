import { useTranslation } from "react-i18next";
import { OFFER } from "@/config/offer";
import SectionHeading from "./SectionHeading";

/** Antes/después (imagem dividida gerada). */
const ResultsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        kicker={t("results.kicker")}
        title={t("results.title")}
        subtitle={t("results.text")}
      />
      <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-card)]">
        <img
          src={OFFER.images.results}
          alt={`${t("results.before")} / ${t("results.after")}`}
          crossOrigin="anonymous"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ResultsSection;
