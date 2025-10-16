// components/home/hero-section.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useMemo } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Memoized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
};

const underlineAnimation = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 }
};

// Memoized Badge Component
const Badge = memo(() => (
  <motion.div
    initial={fadeInUp.initial}
    animate={fadeInUp.animate}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7861fc]/10 border border-[#7861fc]/20 backdrop-blur-sm"
  >
    <Sparkles className="w-4 h-4 text-[#9b87f5]" />
    <span className="text-sm font-medium text-gray-300">Next-Gen AI Technology</span>
  </motion.div>
));
Badge.displayName = "Badge";

// Memoized Headline Component
const HeadlineWord = memo(({ word, delay }: { word: string; delay: number }) => (
  <span className="relative inline-block">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
      {word}
    </span>
    <motion.span
      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#7861fc] rounded-full"
      initial={underlineAnimation.initial}
      animate={underlineAnimation.animate}
      transition={{ duration: 0.8, delay }}
      style={{ originX: 0 }}
    />
  </span>
));
HeadlineWord.displayName = "HeadlineWord";

// Memoized CTA Buttons
const CTAButtons = memo(() => (
  <motion.div
    initial={fadeInUp.initial}
    animate={fadeInUp.animate}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="flex flex-col sm:flex-row gap-4"
  >
    <Link
      href="/contact"
      className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7861fc] to-[#9b87f5] px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-[#7861fc]/40 hover:scale-105 active:scale-95"
    >
      <span>Get Your AI Agent</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </Link>
    
    <Link
      href="/contact"
      className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 bg-gray-900/50 px-8 py-4 text-base font-semibold text-white hover:border-[#7861fc] hover:bg-gray-800/70 transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
    >
      <span>Talk to Expert</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </Link>
  </motion.div>
));
CTAButtons.displayName = "CTAButtons";

// Memoized Floating Particle
const FloatingParticle = memo(({ index }: { index: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-[#7861fc] rounded-full shadow-lg shadow-[#7861fc]/50"
    style={{
      left: `${15 + (index % 4) * 25}%`,
      top: `${15 + Math.floor(index / 4) * 25}%`,
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, index % 2 === 0 ? 15 : -15, 0],
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.5, 0.8],
    }}
    transition={{
      duration: 3 + index * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
));
FloatingParticle.displayName = "FloatingParticle";

// Memoized Brain Visual Component
const BrainVisual = memo(() => {
  const particles = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);
  
  return (
    <motion.div
      initial={fadeInRight.initial}
      animate={fadeInRight.animate}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      <div className="relative w-full max-w-2xl aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7861fc]/20 via-[#7861fc]/10 to-transparent rounded-3xl blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#9b87f5]/20 via-transparent to-transparent rounded-3xl blur-3xl" />

        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/sentientbrain.png"
              alt="AI Brain with Neural Network"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {particles.map((i) => (
            <FloatingParticle key={i} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
});
BrainVisual.displayName = "BrainVisual";

// Main Component
const HeroSection = memo(() => (
  <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    {/* Enhanced Background Effects */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7861fc]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>

    <div className="container mx-auto max-w-7xl h-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
        {/* Left Content */}
        <motion.div
          initial={fadeInLeft.initial}
          animate={fadeInLeft.animate}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 lg:space-y-10"
        >
          <Badge />

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Voice Agents
              <br />
              That <HeadlineWord word="Think" delay={0.8} />.
            </motion.h1>
            
            <motion.h1
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Automations
              <br />
              That <HeadlineWord word="Scale" delay={0.9} />.
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Deploy intelligent chat and voice AI to streamline your business — no matter the industry.
          </motion.p>

          <CTAButtons />
        </motion.div>

        {/* Right Visual - Brain */}
        <BrainVisual />
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

export default HeroSection;