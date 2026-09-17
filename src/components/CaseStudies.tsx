'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, CaseStudy } from '@/lib/data';
import { ArrowUpRight, X, CheckCircle, Cpu, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface CaseStudiesProps {
  onOpenApplication: () => void;
}

export default function CaseStudies({ onOpenApplication }: CaseStudiesProps) {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-32 relative">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d0ab86]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#d0ab86] tracking-widest uppercase mb-3">
              <span>02 // FLAGSHIP PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Selected Engagements.
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md font-light">
            Exhaustive product and AI builds engineered for high-concurrency scale, category leadership, and venture outcomes.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="space-y-14">
          {CASE_STUDIES.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-[#d0ab86]/40 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Imagery Tile */}
                <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden bg-[#0c0e15]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#08090d]/80 hidden lg:block" />

                  {/* Badges on image */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#08090d]/80 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-white/90">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#08090d]/80 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-[#d0ab86]">
                      {study.year}
                    </span>
                  </div>
                </div>

                {/* Narrative & Metrics Column */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#0b0d13]/70">
                  <div>
                    <div className="font-mono text-xs text-[#d0ab86] tracking-wider uppercase mb-2">
                      {study.client}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                      {study.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
                      {study.tagline}
                    </p>

                    {/* Quantifiable Metrics Strip */}
                    <div className="grid grid-cols-3 gap-3 py-5 border-y border-white/[0.08] mb-8">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-[#e2c5a8] transition-colors">
                            {metric.value}
                          </span>
                          <span className="text-[11px] text-white/50 tracking-tight mt-0.5">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] text-white/60 border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setActiveStudy(study)}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#d0ab86] hover:text-white transition-colors group/btn"
                    >
                      <span>Architectural Breakdown</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <button
                      onClick={onOpenApplication}
                      className="text-xs font-mono text-white/40 hover:text-white transition-colors"
                    >
                      Inquire Similar Build
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Architectural Breakdown Drawer / Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStudy(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0d0f17] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/60 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 font-mono text-xs text-[#d0ab86] uppercase mb-2">
                <span>{activeStudy.client}</span>
                <span>•</span>
                <span>{activeStudy.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                {activeStudy.title}
              </h3>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                {activeStudy.overview}
              </p>

              {/* Detailed Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#131622] border border-white/[0.06] mb-8">
                {activeStudy.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-2xl font-bold text-[#d0ab86]">{m.value}</div>
                    <div className="text-xs font-semibold text-white/90">{m.label}</div>
                    <div className="text-[11px] text-white/50 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                  <Cpu className="w-4 h-4 text-[#d0ab86]" />
                  <span>Systems & Architecture Decisions</span>
                </div>
                <div className="space-y-2.5">
                  {activeStudy.architecture.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                      <span className="font-mono text-xs text-[#d0ab86] mt-0.5">0{i + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipped Deliverables */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                  <Layers className="w-4 h-4 text-[#d0ab86]" />
                  <span>Shipped Artifacts</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStudy.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/70 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/50 font-mono">
                  Ready to engineer similar velocity?
                </span>
                <button
                  onClick={() => {
                    setActiveStudy(null);
                    onOpenApplication();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#d0ab86] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e2c5a8] transition-colors"
                >
                  Initiate Partner Intake
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
