// components/home/pricing-section.tsx
"use client";

import { memo, useCallback } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/constants";

// Memoized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

// Memoized Feature Item Component
const FeatureItem = memo(({ feature }: { feature: string }) => (
  <li className="flex items-start gap-3 text-gray-300">
    <Check className="w-5 h-5 text-[#7861fc] flex-shrink-0 mt-0.5" />
    <span className="text-sm">{feature}</span>
  </li>
));
FeatureItem.displayName = "FeatureItem";

// Memoized Price Display Component
const PriceDisplay = memo(({ name, price, period }: { name: string; price: string; period?: string }) => (
  <div className="flex items-baseline gap-1 mb-4">
    {name === "Enterprise" ? (
      <h4 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7861fc] bg-clip-text text-transparent">
        {price}
      </h4>
    ) : (
      <>
        <span className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7861fc] bg-clip-text text-transparent">
          {price}
        </span>
        <span className="text-gray-400">{period}</span>
      </>
    )}
  </div>
));
PriceDisplay.displayName = "PriceDisplay";

// Memoized CTA Button Component
const CTAButton = memo(({ highlighted, cta }: { highlighted: boolean; cta: string }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
      highlighted
        ? "bg-gradient-to-r from-[#7861fc] to-[#9b87f5] text-white hover:from-[#9b87f5] hover:to-[#7861fc] shadow-lg shadow-[#7861fc]/25 hover:shadow-[#7861fc]/40"
        : "border border-gray-700 text-white hover:border-[#7861fc] hover:bg-gray-900/50"
    }`}
  >
    {cta}
    <ArrowRight className="w-4 h-4" />
  </motion.button>
));
CTAButton.displayName = "CTAButton";

// Memoized Pricing Card Component
const PricingCard = memo(({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) => {
  const getHoverAnimation = useCallback((highlighted: boolean) => ({
    y: highlighted ? 0 : -8
  }), []);

  return (
    <motion.div
      initial={fadeInUpDelayed.initial}
      whileInView={fadeInUpDelayed.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={getHoverAnimation(plan.highlighted)}
      className={`relative group ${plan.highlighted ? "md:scale-105 md:z-10" : ""}`}
    >
      <div
        className={`relative h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col ${
          plan.highlighted
            ? "border-2 border-[#7861fc] bg-gradient-to-br from-slate-900/80 to-slate-900/40"
            : "border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#7861fc]/50"
        }`}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-[#7861fc] to-[#9b87f5] px-4 py-1 rounded-full text-xs font-bold text-white tracking-wider">
              {plan.badge}
            </div>
          </div>
        )}

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
            plan.highlighted
              ? "bg-gradient-to-br from-[#7861fc]/20 to-transparent"
              : "bg-gradient-to-br from-[#7861fc]/0 group-hover:from-[#7861fc]/10 to-transparent"
          }`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {plan.description}
            </p>

            <PriceDisplay name={plan.name} price={plan.price} period={plan.period} />
          </div>

          {/* Features List */}
          <div className="flex-1 mb-8">
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <FeatureItem key={i} feature={feature} />
              ))}
            </ul>
          </div>

          <CTAButton highlighted={plan.highlighted} cta={plan.cta} />
        </div>

        {/* Decorative glow */}
        {plan.highlighted && (
          <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-[#7861fc]/10 rounded-full blur-3xl group-hover:bg-[#7861fc]/20 transition-all duration-300" />
        )}
      </div>
    </motion.div>
  );
});
PricingCard.displayName = "PricingCard";

// Memoized Section Header
const SectionHeader = memo(() => (
  <motion.div
    initial={fadeInUp.initial}
    whileInView={fadeInUp.animate}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-20"
  >
    <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
      Flexible Plans That{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
        Grow With You
      </span>
    </h2>
    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
      Choose the perfect plan for your business. Scale up as you grow with no hidden fees.
    </p>
  </motion.div>
));
SectionHeader.displayName = "SectionHeader";

// Main Component
const PricingSection = memo(() => (
  <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    {/* Background gradient effects */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto max-w-7xl">
      <SectionHeader />

      {/* Pricing Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
    </div>
  </section>
));

PricingSection.displayName = "PricingSection";

export default PricingSection;