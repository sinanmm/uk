import AudienceSection from "@/components/AudienceSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import CurriculumSection from "@/components/CurriculumSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IncludedSection from "@/components/IncludedSection";
import InvestmentSection from "@/components/InvestmentSection";
import JourneySection from "@/components/JourneySection";
import LearningFormatSection from "@/components/LearningFormatSection";
import Navbar from "@/components/Navbar";
import ProblemResultSection from "@/components/ProblemResultSection";
import WhyPSASection from "@/components/WhyPSASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AudienceSection />
        <ProblemResultSection />
        <JourneySection />
        <section className="section-shell grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <CurriculumSection />
          <IncludedSection />
        </section>
        <section className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.25fr_0.95fr]">
          <LearningFormatSection />
          <InvestmentSection />
          <WhyPSASection />
        </section>
        <section className="section-shell">
          <ComparisonSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
