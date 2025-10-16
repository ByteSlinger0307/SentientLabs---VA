"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, MotionProps, LazyMotion, domAnimation, m } from "framer-motion";
import { pricingPlans } from "@/lib/constants";

// Optimized motion wrapper with proper types and lazy loading
const MotionDiv = memo<MotionProps & { children: React.ReactNode }>(
  ({ children, ...props }) => (
    <LazyMotion features={domAnimation} strict>
      <m.div {...props}>{children}</m.div>
    </LazyMotion>
  )
);
MotionDiv.displayName = "MotionDiv";

// Memoized animation variants for reuse
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

// Optimized floating particles component
const FloatingParticles = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        key: i,
        left: `${20 + (i % 3) * 30}%`,
        top: `${20 + Math.floor(i / 3) * 30}%`,
        duration: 3 + i * 0.3,
        xOffset: i % 2 === 0 ? 12 : -12,
      })),
    []
  );

  return (
    <>
      {particles.map((particle) => (
        <m.div
          key={particle.key}
          className="absolute w-1.5 h-1.5 bg-[#7861fc] rounded-full will-change-transform"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
});
FloatingParticles.displayName = "FloatingParticles";

// Background gradient component
const BackgroundGradients = memo(() => (
  <div className="absolute inset-0 -z-10" aria-hidden="true">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
  </div>
));
BackgroundGradients.displayName = "BackgroundGradients";

const HeroSection = memo(() => (
  <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    <BackgroundGradients />

    <div className="container mx-auto max-w-7xl h-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
        {/* Left Content */}
        <motion.div {...fadeInLeft} className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Voice Agents
              <br />
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
                Think
              </span>
              .
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Automations
              <br />
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
                Scale
              </span>
              .
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Deploy intelligent chat and voice AI to streamline your business — no matter the industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7861fc] to-[#9b87f5] px-8 py-4 text-base font-semibold text-white hover:from-[#9b87f5] hover:to-[#7861fc] transition-all shadow-lg shadow-[#7861fc]/25 hover:shadow-[#7861fc]/40"
              aria-label="Get your AI agent - contact us"
            >
              Get Your AI Agent
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 bg-gray-900/50 px-8 py-4 text-base font-semibold text-white hover:border-[#7861fc] hover:bg-gray-800/50 transition-all backdrop-blur-sm"
              aria-label="Talk to an expert"
            >
              Talk to Expert
            </Link>
          </div>
        </motion.div>

        {/* Right Visual - Brain Image */}
        <motion.div {...fadeInRight} className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl aspect-[4/3]">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7861fc]/20 via-[#7861fc]/10 to-transparent rounded-3xl blur-3xl" aria-hidden="true" />

            {/* Main container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <m.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/sentientbrain.webp"
                  alt="AI Brain with Neural Network - Intelligent voice automation technology"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                  className="object-contain"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
                />
              </m.div>

              {/* Floating particles around the brain */}
              <FloatingParticles />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
));
HeroSection.displayName = "HeroSection";

// Memoized pricing card component
const PricingCard = memo(({ plan, index }: { plan: any; index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: plan.highlighted ? 0 : -8 }}
    className={`relative group ${plan.highlighted ? "md:scale-105 md:z-10" : ""}`}
  >
    {/* Card Container */}
    <div
      className={`relative h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col ${
        plan.highlighted
          ? "border-2 border-[#7861fc] bg-gradient-to-br from-slate-900/80 to-slate-900/40"
          : "border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#7861fc]/50"
      }`}
    >
      {/* Badge for Most Popular */}
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
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-4">
            {plan.name === "Enterprise" ? (
              <span className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7861fc] bg-clip-text text-transparent">
                {plan.price}
              </span>
            ) : (
              <>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7861fc] bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </>
            )}
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-8">
          <ul className="space-y-4">
            {plan.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#7861fc] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
            plan.highlighted
              ? "bg-gradient-to-r from-[#7861fc] to-[#9b87f5] text-white hover:from-[#9b87f5] hover:to-[#7861fc] shadow-lg shadow-[#7861fc]/25 hover:shadow-[#7861fc]/40"
              : "border border-gray-700 text-white hover:border-[#7861fc] hover:bg-gray-900/50"
          }`}
          aria-label={`${plan.cta} - ${plan.name} plan`}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Decorative glow for highlighted card */}
      {plan.highlighted && (
        <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-[#7861fc]/10 rounded-full blur-3xl group-hover:bg-[#7861fc]/20 transition-all duration-300" aria-hidden="true" />
      )}
    </div>
  </m.div>
));
PricingCard.displayName = "PricingCard";

const PricingSection = memo(() => (
  <section 
    className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    aria-labelledby="pricing-heading"
  >
    <BackgroundGradients />

    <div className="container mx-auto max-w-7xl">
      {/* Section Header */}
      <m.div
        {...fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 id="pricing-heading" className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Flexible Plans That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
            Grow With You
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Choose the perfect plan for your business. Scale up as you grow with no hidden fees.
        </p>
      </m.div>

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

const CTABandSection = memo(() => (
  <section 
    className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600"
    aria-labelledby="cta-heading"
  >
    {/* Background effects */}
    <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-400 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-400 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto max-w-4xl">
      <m.div
        {...fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Ready to Deploy Your Voice Agent?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
            Join hundreds of businesses already automating with SentientLabs.
          </p>
        </div>

        <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/30 transition-all"
            aria-label="Book a demo with SentientLabs"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </m.div>
      </m.div>
    </div>
  </section>
));
CTABandSection.displayName = "CTABandSection";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation} strict>
      <HeroSection />
      <PricingSection />
      <CTABandSection />
    </LazyMotion>
  );
}