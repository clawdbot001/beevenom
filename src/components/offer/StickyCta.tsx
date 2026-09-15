import { useTranslation } from "react-i18next";
import { OFFER } from "@/config/offer";
import { formatCOP } from "@/lib/format";
import { Button } from "@/components/ui/button";

const scrollToOrder = () =>
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });

/** Barra CTA fixa no mobile. */
const StickyCta = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/30 bg-brand-dark/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="flex flex-col leading-tight">
          <span className="font-display text-xl font-extrabold text-brand-gold">
            {formatCOP(OFFER.priceNow)}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            {t("sticky.note")}
          </span>
        </div>
        <Button variant="gold" size="default" onClick={scrollToOrder} className="uppercase">
          {t("sticky.cta")}
        </Button>
      </div>
    </div>
  );
};

export default StickyCta;
