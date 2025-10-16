import HeroSection from "@/components/home/hero-sections";
import CTABand from "@/components/home/cta-band";
import PricingSection from "@/components/home/pricing-section";
import { FeatureCards } from "@/components/home/feature-cards";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <PricingSection />
      <CTABand />
    </>
  );
}