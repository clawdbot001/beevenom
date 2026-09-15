import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Hexagon } from "lucide-react";
import { LEGAL_PAGES, type LegalPageKey } from "@/config/legal";
import { OFFER } from "@/config/offer";
import Footer from "@/components/offer/Footer";

interface LegalPageProps {
  page: LegalPageKey;
}

/** Página legal simples (privacidad, términos, devoluciones). */
const LegalPage = ({ page }: LegalPageProps) => {
  const { t } = useTranslation();
  const content = LEGAL_PAGES[page];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
              <Hexagon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-wide text-brand-dark">
              {OFFER.brandName}
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-gold hover:text-brand-honey"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("legal.back")}
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
          {OFFER.brandName}
        </span>
        <h1 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-brand-dark text-balance sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t("legal.updated")}: {content.updatedAt}
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">{content.intro}</p>

        <div className="mt-8 flex flex-col gap-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-extrabold text-brand-dark">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2 pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="list-disc text-[15px] leading-relaxed text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
