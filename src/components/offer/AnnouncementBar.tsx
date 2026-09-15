import { useTranslation } from "react-i18next";
import { Hexagon } from "lucide-react";

/** Barra superior com mensagens em marquee. */
const AnnouncementBar = () => {
  const { t } = useTranslation();
  const items = [
    t("announcement.cod"),
    t("announcement.freeShipping"),
    t("announcement.installments"),
    t("announcement.guarantee"),
  ];

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-xs">
            {item}
          </span>
          <Hexagon className="h-2.5 w-2.5 shrink-0 fill-brand-gold/40 text-brand-gold/40" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="noise relative overflow-hidden bg-brand-dark py-2.5 text-white">
      <div className="flex w-max animate-marquee md:hidden">{row("mobile")}</div>
      <div className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-2 md:flex">
        {row("desktop")}
      </div>
    </div>
  );
};

export default AnnouncementBar;
