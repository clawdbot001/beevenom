import { useTranslation } from "react-i18next";
import { Banknote, RotateCcw, Timer, Truck } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Banknote, label: "trust.cod" },
  { icon: Truck, label: "trust.shipping" },
  { icon: RotateCcw, label: "trust.return" },
  { icon: Timer, label: "trust.fast" },
] as const;

/** Faixa de garantias (pagamento, envio, devolução). */
const TrustBar = () => {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border/60 bg-brand-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5 px-3 py-4">
            <Icon className="h-5 w-5 shrink-0 text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-wide text-brand-dark sm:text-[13px]">
              {t(label)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
