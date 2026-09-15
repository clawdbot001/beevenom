import AnnouncementBar from "@/components/offer/AnnouncementBar";
import Benefits from "@/components/offer/Benefits";
import FaqSection from "@/components/offer/FaqSection";
import Footer from "@/components/offer/Footer";
import FormulaSection from "@/components/offer/FormulaSection";
import Header from "@/components/offer/Header";
import Hero from "@/components/offer/Hero";
import IngredientsSection from "@/components/offer/IngredientsSection";
import OrderForm from "@/components/offer/OrderForm";
import ResultsSection from "@/components/offer/ResultsSection";
import ScienceSection from "@/components/offer/ScienceSection";
import SkinConcerns from "@/components/offer/SkinConcerns";
import StatsBanner from "@/components/offer/StatsBanner";
import StickyCta from "@/components/offer/StickyCta";
import Testimonials from "@/components/offer/Testimonials";
import TrustBar from "@/components/offer/TrustBar";

/** Página de oferta (Colômbia — pago contra entrega). */
const Offer = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <StatsBanner />
        <ScienceSection />
        <SkinConcerns />
        <ResultsSection />
        <FormulaSection />
        <IngredientsSection />
        <Testimonials />
        <OrderForm />
        <FaqSection />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
};

export default Offer;
