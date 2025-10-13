"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingCTA() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5] via-[#7861fc] to-[#9b87f5]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Our sales team is here to help you find the perfect plan.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white hover:bg-gray-100 rounded-xl text-[#7861fc] font-bold text-lg shadow-2xl transition-all"
            >
              Talk to Sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}