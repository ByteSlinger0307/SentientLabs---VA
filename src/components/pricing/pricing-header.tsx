"use client";

import { memo } from "react";
import { motion } from "framer-motion";

export const PricingHeader = memo(() => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            Flexible Plans That <span className="gradient-text">Grow With You</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Choose the perfect plan for your business. All plans include core features, with no hidden fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

PricingHeader.displayName = "PricingHeader";