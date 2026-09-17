'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenApplication: () => void;
}

export default function Hero({ onOpenApplication }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Ambient background glow layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial-gradient-glow pointer-events-none blur-3xl opacity-80" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#d0ab86]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[250px] bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Status Telemetry Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel mb-8 text-[12px] text-white/80"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d0ab86] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d0ab86]"></span>
          </span>
          <span className="font-mono text-[#d0ab86] font-medium tracking-wider uppercase text-[11px]">
            Limited Capacity
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/70 font-mono tracking-tight text-[11px]">
            1 of 3 Partner Slots Open for Q4
          </span>
        </motion.div>

        {/* Main Masthead Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.06] text-white max-w-5xl"
        >
          We engineer <span className="gold-gradient-text">venture-scale</span> software and autonomous AI systems.
        </motion.h1>

        {/* Supporting Hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
        >
          For venture-backed founders and enterprise leaders who refuse mediocrity. 
          Bespoke AI agent architectures, high-concurrency web platforms, and category-defining craft.
        </motion.p>

        {/* Primary and Secondary CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenApplication}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d0ab86] text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#e2c5a8] hover:shadow-xl hover:shadow-[#d0ab86]/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
          >
            <span>Apply for Q4 Partnership</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/[0.1] text-sm font-medium transition-all duration-200 backdrop-blur-sm"
          >
            Review Selected Works
          </a>
        </motion.div>

        {/* Reassurance points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[12px] text-white/40 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d0ab86]" />
            $35k minimum engagement
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d0ab86]" />
            Direct Principal access
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d0ab86]" />
            100% Senior Staff
          </span>
        </motion.div>

        {/* Client & Partner Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 w-full pt-12 border-t border-white/[0.06]"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-6">
            Trusted by founders backed by tier-one capital
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-mono text-sm tracking-widest uppercase font-semibold text-white/80 hover:text-[#d0ab86] transition-colors">
              ✦ AURA INTEL
            </div>
            <div className="font-mono text-sm tracking-widest uppercase font-semibold text-white/80 hover:text-[#d0ab86] transition-colors">
              ▲ HYPERION LABS
            </div>
            <div className="font-mono text-sm tracking-widest uppercase font-semibold text-white/80 hover:text-[#d0ab86] transition-colors">
              ◈ MONOLITH ATELIER
            </div>
            <div className="font-mono text-sm tracking-widest uppercase font-semibold text-white/80 hover:text-[#d0ab86] transition-colors">
              ❖ SYNAPSE VENTURES
            </div>
            <div className="font-mono text-sm tracking-widest uppercase font-semibold text-white/80 hover:text-[#d0ab86] transition-colors">
              ◬ VECTOR DYNAMICS
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-[10px] uppercase font-mono tracking-widest">
        <span>Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
