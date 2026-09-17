'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';
import { TrendingUp, Award, Zap, Users } from 'lucide-react';

export default function ProofMetrics() {
  const icons = [TrendingUp, Zap, Users, Award];

  return (
    <section id="proof" className="py-24 border-y border-white/[0.06] bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-7 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d0ab86]/[0.03] rounded-full blur-xl group-hover:bg-[#d0ab86]/[0.08] transition-colors" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d0ab86] tracking-wider uppercase">
                    0{idx + 1} // METRIC
                  </span>
                  <Icon className="w-4 h-4 text-white/30 group-hover:text-[#d0ab86] transition-colors" />
                </div>

                <div className="text-4xl lg:text-5xl font-semibold tracking-tight text-white font-mono mb-2 group-hover:text-[#e2c5a8] transition-colors">
                  {stat.number}
                </div>

                <div className="text-sm font-medium text-white/90 mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {stat.note}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
