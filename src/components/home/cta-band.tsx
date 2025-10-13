"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 opacity-90" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 text-center space-y-8">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
          Ready to Deploy Your Voice Agent?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
          Join hundreds of businesses already automating with SentientLabs.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-50 transition-all shadow-2xl hover:shadow-3xl"
          >
            Book a Demo <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}