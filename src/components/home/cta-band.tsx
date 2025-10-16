// components/home/cta-band.tsx
"use client";

import Link from "next/link";
import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Memoized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Memoized Background Effects Component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 -z-10 opacity-30">
    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-400 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-400 rounded-full blur-3xl" />
  </div>
));
BackgroundEffects.displayName = "BackgroundEffects";

// Memoized Heading Component
const Heading = memo(() => (
  <div className="space-y-4">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
      Ready to Deploy Your Voice Agent?
    </h2>
    <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
      Join hundreds of businesses already automating with SentientLabs.
    </p>
  </div>
));
Heading.displayName = "Heading";

// Memoized CTA Button Component
const CTAButton = memo(() => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/30 transition-all"
    >
      Book a Demo
      <ArrowRight className="w-5 h-5" />
    </Link>
  </motion.div>
));
CTAButton.displayName = "CTAButton";

// Main Component
const CTABand = memo(() => (
  <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600">
    <BackgroundEffects />

    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <Heading />
        <CTAButton />
      </motion.div>
    </div>
  </section>
));

CTABand.displayName = "CTABand";

export default CTABand;