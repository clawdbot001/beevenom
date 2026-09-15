import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Star } from "lucide-react";
import { OFFER } from "@/config/offer";
import { formatCOP, formatInstallment } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const scrollToOrder = () =>
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const priceNow = formatCOP(OFFER.priceNow);
  const priceFrom = formatCOP(OFFER.priceFrom);
  const installment = formatInstallment(OFFER.priceNow, OFFER.installments);
  const stockPct = Math.round((OFFER.urgency.stockLeft / OFFER.urgency.stockTotal) * 100);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* brilho de fundo */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-honey/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:py-16">
        {/* Galeria */}
        <div className="animate-slide-up">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-card)]">
            <img
              src={OFFER.images.gallery[active]}
              alt={OFFER.productName}
              crossOrigin="anonymous"
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-brand-honey to-brand-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-[var(--shadow-gold)]">
              {t("hero.badge")}
            </span>
          </div>
          {OFFER.images.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {OFFER.images.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "overflow-hidden rounded-xl border-2 bg-white transition-all",
                    active === i
                      ? "border-brand-gold shadow-[var(--shadow-gold)]"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <img
                    src={img}
                    alt={`${OFFER.productName} ${i + 1}`}
                    crossOrigin="anonymous"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informações */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
              {t("hero.badgeSub")}
            </span>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-brand-dark text-balance sm:text-5xl">
              {OFFER.productName}
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-star text-brand-star" />
                ))}
              </span>
              <span className="font-bold text-brand-dark">{OFFER.ratings.average.toLocaleString("es-CO")}</span>
              <a href="#testimonials" className="font-medium text-muted-foreground underline-offset-4 hover:underline">
                · {OFFER.ratings.count.toLocaleString("es-CO")} {t("hero.reviews")}
              </a>
            </div>
          </div>

          {/* Preço */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-end gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("hero.priceNormal")}
                </span>
                <p className="text-lg font-semibold text-muted-foreground line-through">
                  {priceFrom}
                </p>
              </div>
              <div className="pb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {t("hero.pricePromo")}
                </span>
                <p className="font-display text-5xl font-extrabold leading-none text-brand-gold">
                  {priceNow}
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold text-brand-dark">
              {t("hero.installments", { price: installment })}
            </p>
          </div>

          <CountdownTimer />

          <div className="flex flex-col gap-2">
            <Button variant="gold" size="xl" onClick={scrollToOrder} className="w-full uppercase">
              {t("hero.cta")}
            </Button>
            <p className="text-center text-xs font-medium text-muted-foreground">
              {t("hero.ctaNote")}
            </p>
          </div>

          {/* Urgência */}
          <div className="rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              {t("hero.urgencyViewers", { count: OFFER.urgency.viewers })}
            </div>
            <div className="mt-3">
              <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                <span className="text-muted-foreground">
                  {t("hero.urgencyStock", { count: OFFER.urgency.stockLeft })}
                </span>
                <span className="text-brand-gold">{stockPct}%</span>
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-honey to-brand-gold"
                  style={{ width: `${stockPct}%` }}
                />
              </div>
            </div>
          </div>

          <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-brand-gold" />
            {t("hero.guarantee")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
