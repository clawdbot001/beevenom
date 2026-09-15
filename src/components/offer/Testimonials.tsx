import { useTranslation } from "react-i18next";
import { BadgeCheck, Star } from "lucide-react";
import { OFFER } from "@/config/offer";
import SectionHeading from "./SectionHeading";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Depoimentos + resumo de avaliações. */
const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="bg-brand-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading kicker={t("testimonials.kicker")} title={t("testimonials.title")} />

        <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-1 rounded-3xl border border-brand-gold/25 bg-white px-8 py-4 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-star text-brand-star" />
            ))}
          </div>
          <p className="font-display text-3xl font-extrabold text-brand-dark">
            {OFFER.ratings.average.toLocaleString("es-CO")}
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t("reviews.summary", { rating: OFFER.ratings.average, count: OFFER.ratings.count.toLocaleString("es-CO") })}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {OFFER.testimonials.map((tm) => (
            <figure
              key={tm.name}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-star text-brand-star" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-brand-dark">
                “{tm.text}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
                {tm.avatar ? (
                  <img
                    src={tm.avatar}
                    alt={tm.name}
                    crossOrigin="anonymous"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-gold/40"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-honey to-brand-gold font-display text-sm font-extrabold text-white">
                    {initials(tm.name)}
                  </span>
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-dark">{tm.name}</span>
                  <span className="text-xs text-muted-foreground">{tm.city}</span>
                </div>
                <span className="ml-auto flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-green-600">
                  <BadgeCheck className="h-4 w-4" />
                  {t("reviews.verified")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
