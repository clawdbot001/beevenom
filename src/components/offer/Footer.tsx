import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { OFFER } from "@/config/offer";

const FOOTER_LINKS = [
  { labelKey: "footer.privacy", to: "/politicas" },
  { labelKey: "footer.terms", to: "/terminos" },
  { labelKey: "footer.refunds", to: "/devoluciones" },
] as const;

/** Rodapé com avisos e links para as páginas legais. */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="noise relative overflow-hidden bg-brand-dark pb-24 pt-14 text-white md:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
              <Hexagon className="h-6 w-6" />
            </span>
            <span className="font-display text-2xl font-extrabold tracking-wide">
              {OFFER.brandName}
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.labelKey} to={link.to} className="hover:text-brand-gold">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center">
          <p className="max-w-3xl text-xs leading-relaxed text-white/45">
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            {t("footer.payments")}
          </p>
          <p className="text-xs text-white/40">
            {t("footer.rights", { year: new Date().getFullYear(), brand: OFFER.brandName })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
