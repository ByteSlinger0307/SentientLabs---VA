"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Sparkles,
      title: "Intelligent Voice Agents",
      description: "AI-powered voice agents that understand context and evolve with every conversation.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Automation",
      description: "Deploy automations in minutes, not months. Scale effortlessly as you grow.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance standards built into every interaction.",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0B14] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B14] via-[#1a1b3a]/20 to-[#0A0B14]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Intelligent Future
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Powerful AI capabilities that adapt to your unique workflows and scale with your ambitions.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-transparent transition-all duration-300" />
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}