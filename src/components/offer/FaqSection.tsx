import { useTranslation } from "react-i18next";
import { OFFER } from "@/config/offer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

/** Preguntas frecuentes. */
const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading kicker={t("faq.kicker")} title={t("faq.title")} />
        <Accordion type="single" collapsible className="mt-8 w-full">
          {OFFER.faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger className="font-display text-lg font-bold text-brand-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
