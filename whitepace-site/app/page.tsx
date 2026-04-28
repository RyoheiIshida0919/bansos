import Hero from "./components/Hero";
import MissionBand from "./components/MissionBand";
import PainSection from "./components/PainSection";
import ServicesSection from "./components/ServicesSection";
import HighlightBand from "./components/HighlightBand";
import CasesSection from "./components/CasesSection";
import ReasonsSection from "./components/ReasonsSection";
import CompanySummary from "./components/CompanySummary";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionBand />
      <PainSection />
      <ServicesSection />
      <HighlightBand />
      <CasesSection />
      <ReasonsSection />
      <CompanySummary />
      <ContactCTA />
      <Footer />
    </main>
  );
}
