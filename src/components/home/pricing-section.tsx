"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { pricingPlans } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: plan.highlighted ? 0 : -8 }}
              className={`relative group ${
                plan.highlighted ? "md:scale-105 md:z-10" : ""
              }`}
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

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      {plan.name === "Enterprise" ? (
                        <h4 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7861fc] bg-clip-text text-transparent">
                          {plan.price}
                        </h4>
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
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <Check className="w-5 h-5 text-[#7861fc] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#7861fc] to-[#9b87f5] text-white hover:from-[#9b87f5] hover:to-[#7861fc] shadow-lg shadow-[#7861fc]/25 hover:shadow-[#7861fc]/40"
                        : "border border-gray-700 text-white hover:border-[#7861fc] hover:bg-gray-900/50"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Decorative glow for highlighted card */}
                {plan.highlighted && (
                  <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-[#7861fc]/10 rounded-full blur-3xl group-hover:bg-[#7861fc]/20 transition-all duration-300" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: All plans include section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-gray-700/50"
        >
          <p className="text-center text-gray-400 mb-8">
            All plans include core features
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              "24/7 customer support",
              "Advanced security",
              "API access"
            ].map((feature, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <Check className="w-5 h-5 text-[#7861fc] flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}