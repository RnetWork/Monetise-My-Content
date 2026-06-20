import Hero from '@/components/Hero';
import NicheStrip from '@/components/NicheStrip';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import FitSection from '@/components/FitSection';
import Pricing from '@/components/Pricing';
import FounderNote from '@/components/FounderNote';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NicheStrip />
      <ProblemSection />
      <HowItWorks />
      <FitSection />
      <Pricing />
      <FounderNote />
      <FAQ />
      <CTASection />
    </main>
  );
}
