'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between items-center bg-white px-4 pt-4 pb-8 overflow-hidden select-none">
      {/* Top spacing spacer */}
      <div className="w-full h-2" />

      {/* Main Hero Illustration: STAY STRANGE */}
      <div className="w-full max-w-[1020px] mx-auto flex items-center justify-center my-auto py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/10] max-h-[68vh] flex items-center justify-center"
        >
          <Image
            src="/images/stay-strange-art.png"
            alt="STAY STRANGE - Alternative Aesthetics Illustration"
            fill
            sizes="(max-width: 1200px) 95vw, 1020px"
            className="object-contain hover:scale-[1.01] transition-transform duration-300"
            priority
          />
        </motion.div>
      </div>

      {/* Pointing Hand at the Bottom */}
      <div className="flex flex-col items-center justify-center pb-2 cursor-pointer group" onClick={scrollToWork}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative w-9 h-14 transition-transform group-hover:scale-115"
        >
          <Image
            src="/images/pointing-hand.png"
            alt="Scroll down"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
