'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenApplication: () => void;
}

export default function Hero({ onOpenApplication }: HeroProps) {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-90px)] flex flex-col justify-between items-center bg-white px-4 pt-6 pb-8 overflow-hidden select-none">
      {/* Top Status Pill */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#424242]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Independent Illustrator & Creative Technologist</span>
        </div>

        <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-[#f5f5f5] text-black text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#000000]">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
          <span>1 Commission Slot Open for Q4</span>
        </div>
      </div>

      {/* Main Hero Custom Hand-Drawn Artwork: DHARSHANA */}
      <div className="w-full max-w-[1020px] mx-auto flex flex-col items-center justify-center my-auto px-4 py-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src="/images/dharshana-hero-art.jpg"
            alt="DHARSHANA - Commercial Illustrator, Muralist & Creative Technologist"
            width={1020}
            height={574}
            className="w-full max-w-[960px] h-auto max-h-[66vh] object-contain hover:scale-[1.01] transition-transform duration-300"
            priority
          />
        </motion.div>

        {/* Short Personal Hook */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-center text-sm sm:text-base md:text-lg text-[#424242] font-light max-w-2xl leading-relaxed"
        >
          Playful pictures that are bold on your behalf! Commercial murals, brand mascots, limited vinyl packaging, and kinetic web flagships created by Dharshana.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <button
            onClick={scrollToWork}
            className="px-6 py-3 rounded-[8px] bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-[#424242] transition-all shadow-[3px_3px_0px_0px_#424242] flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenApplication}
            className="px-6 py-3 rounded-[8px] bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-[#f5f5f5] transition-all shadow-[3px_3px_0px_0px_#000000] cursor-pointer"
          >
            Commission Dharshana
          </button>
        </motion.div>
      </div>

      {/* Pointing Hand at the Bottom */}
      <div
        className="flex flex-col items-center justify-center pt-2 pb-1 cursor-pointer group"
        onClick={scrollToWork}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="transition-transform group-hover:scale-115"
        >
          <Image
            src="/images/pointing-hand.png"
            alt="Scroll down to work"
            width={40}
            height={60}
            className="w-9 h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
