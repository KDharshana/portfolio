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
    <section className="relative w-full min-h-[calc(100vh-90px)] flex flex-col justify-between items-center bg-white px-4 pt-6 pb-8 overflow-hidden select-none">
      {/* Top spacing spacer */}
      <div className="w-full h-2" />

      {/* Main Hero Custom Hand-Drawn Artwork: DHARSHANA */}
      <div className="w-full max-w-[1020px] mx-auto flex items-center justify-center my-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src="/images/dharshana-hero-art.jpg"
            alt="DHARSHANA - Bold Hand-Drawn Creative & AI Engineering Studio"
            width={1020}
            height={574}
            className="w-full max-w-[960px] h-auto max-h-[68vh] object-contain hover:scale-[1.01] transition-transform duration-300"
            priority
          />
        </motion.div>
      </div>

      {/* Pointing Hand at the Bottom */}
      <div
        className="flex flex-col items-center justify-center pt-4 pb-2 cursor-pointer group"
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
