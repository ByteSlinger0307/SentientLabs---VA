import PricingComparison from "@/components/pricing/pricing-comparison";
import FAQSection from "@/components/pricing/faq-section";
import PricingCTA from "@/components/pricing/pricing-cta";
// import PricingSection from "@/components/pricing/pricing-section";

export default function PricingPage() {
  return (
    <>
      <PricingComparison />
      <FAQSection />
      <PricingCTA />
      {/* <PricingSection /> */}
    </>
  );
}