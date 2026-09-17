'use client';

import { motion } from 'framer-motion';
import { ENGAGEMENT_TIERS, SOCIAL_PROOF } from '@/lib/data';
import { Check, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface EngagementModelProps {
  onOpenApplication: (preselectedTier?: string) => void;
}

export default function EngagementModel({ onOpenApplication }: EngagementModelProps) {
  return (
    <section id="engagement-model" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d0ab86] tracking-widest uppercase mb-3">
            <span>04 // PARTNERSHIP TERMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Transparent Engagement Architecture.
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
            We operate with strict capacity limits to guarantee partner velocity. No hidden billable hours, no outsourced juniors.
          </p>
        </div>

        {/* Engagement Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28">
          {ENGAGEMENT_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                tier.recommended
                  ? 'bg-[#10131d] border-2 border-[#d0ab86]/60 shadow-2xl shadow-[#d0ab86]/10 lg:-translate-y-4'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d0ab86] text-black font-mono text-[11px] font-bold uppercase tracking-widest">
                  Flagship Selection
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d0ab86] tracking-wider uppercase">
                    {tier.timeline}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {tier.availability}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>

                <div className="text-3xl sm:text-4xl font-mono font-bold text-white mb-3">
                  {tier.investment}
                </div>

                <p className="text-xs text-white/60 mb-8 font-light leading-relaxed">
                  {tier.focus}
                </p>

                <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                    Scope of Delivery:
                  </p>
                  {tier.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80 font-light">
                      <Check className="w-3.5 h-3.5 text-[#d0ab86] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenApplication(tier.name)}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.recommended
                    ? 'bg-[#d0ab86] text-black hover:bg-[#e2c5a8] shadow-lg shadow-[#d0ab86]/20 hover:scale-[1.02]'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2]'
                }`}
              >
                <span>Apply for this Tier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Social Proof & Executive Testimonials */}
        <div className="pt-20 border-t border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
              Direct Feedback from Executives.
            </h3>
            <p className="text-white/50 text-xs sm:text-sm font-mono">
              Unfiltered notes from founders who engaged Aether Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_PROOF.map((proof, i) => (
              <motion.div
                key={proof.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#d0ab86]/40 mb-4" />
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6 italic">
                    &ldquo;{proof.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/[0.1] bg-[#1a1d28]">
                    <Image
                      src={proof.avatar}
                      alt={proof.author}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{proof.author}</div>
                    <div className="text-[11px] text-white/50">{proof.title}, {proof.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
