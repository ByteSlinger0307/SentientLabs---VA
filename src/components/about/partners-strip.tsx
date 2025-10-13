"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const partners = ["Google Cloud", "AWS", "Microsoft Azure", "OpenAI", "Anthropic"];

const PartnersStrip = memo(() => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background-darker" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-text-primary">
            Powered By Industry Leaders
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-text-muted hover:text-primary transition-colors font-semibold"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

PartnersStrip.displayName = "PartnersStrip";
export default PartnersStrip;