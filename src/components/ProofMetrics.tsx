'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';
import { PackageCheck, UserCheck, HeartHandshake, Trophy } from 'lucide-react';

export default function ProofMetrics() {
  const icons = [PackageCheck, UserCheck, HeartHandshake, Trophy];

  return (
    <section id="proof" className="py-20 border-b-2 border-black bg-[#fafafa]">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold uppercase mb-3 bg-white shadow-[2px_2px_0px_0px_#000000]">
              VERIFIABLE TRACK RECORD
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-black">
              Proven Craft & Cultural Impact.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#424242] max-w-md font-light">
            Measured in thousands of collector unboxings, iconic public murals, and zero outsourced middlemen.
          </p>
        </div>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#7f7f7f]">
                      // RECORD_0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-[8px] border-2 border-black bg-[#f0f0f0] flex items-center justify-center text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="font-display text-4xl sm:text-5xl text-black mb-2">
                    {stat.number}
                  </div>

                  <div className="text-base font-bold text-black mb-1">
                    {stat.label}
                  </div>
                </div>

                <div className="text-xs text-[#7f7f7f] pt-4 border-t-2 border-black/10 mt-4">
                  {stat.note}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
