import { useTranslation } from "react-i18next";
import { Hexagon, ShieldCheck } from "lucide-react";
import { OFFER } from "@/config/offer";
import { Button } from "@/components/ui/button";

const scrollToOrder = () =>
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });

/** Cabeçalho fixo com a marca e CTA. */
const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
            <Hexagon className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-wide text-brand-dark">
            {OFFER.brandName}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-xs font-semibold text-muted-foreground sm:flex">
            <ShieldCheck className="h-4 w-4 text-brand-gold" />
            {t("hero.guarantee")}
          </span>
          <Button variant="gold" size="sm" onClick={scrollToOrder} className="uppercase">
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
