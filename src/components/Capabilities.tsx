'use client';

import { motion } from 'framer-motion';
import { CAPABILITIES } from '@/lib/data';
import { Bot, Code2, Palette, Rocket, Check, ArrowRight } from 'lucide-react';

interface CapabilitiesProps {
  onOpenApplication: () => void;
}

export default function Capabilities({ onOpenApplication }: CapabilitiesProps) {
  const icons = [Bot, Code2, Palette, Rocket];

  return (
    <section id="capabilities" className="py-28 relative bg-[#08090e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d0ab86] tracking-widest uppercase mb-3">
            <span>03 // CORE MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Engineered for High-Consequence Impact.
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
            We operate at the rare intersection of deep systems engineering, autonomous AI agent architecture, and world-class visual craft.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#d0ab86] group-hover:scale-110 group-hover:border-[#d0ab86]/40 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 group-hover:text-[#d0ab86] transition-colors">
                      {cap.badge}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#d0ab86] tracking-widest uppercase mb-1">
                    {cap.number} // CAPABILITY
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
                    {cap.title}
                  </h3>

                  <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                    {cap.tagline}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-8">
                    {cap.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/60">
                        <Check className="w-3.5 h-3.5 text-[#d0ab86] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">Guaranteed Principal Oversight</span>
                  <button
                    onClick={onOpenApplication}
                    className="text-[#d0ab86] hover:text-white flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Engage</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
