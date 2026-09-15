import { useTranslation } from "react-i18next";
import { OFFER } from "@/config/offer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

/** Acordeão: descrição, ingredientes e envíos. */
const IngredientsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading kicker={t("ingredients.kicker")} title={t("ingredients.title")} />
        <Accordion type="single" collapsible className="mt-8 w-full">
          {OFFER.ingredients.map((item, i) => (
            <AccordionItem key={item.title} value={`item-${i}`}>
              <AccordionTrigger className="font-display text-lg font-bold text-brand-dark">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default IngredientsSection;
