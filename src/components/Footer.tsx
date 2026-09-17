'use client';

import Image from 'next/image';

interface FooterProps {
  onOpenApplication: () => void;
}

export default function Footer({ onOpenApplication }: FooterProps) {
  return (
    <footer className="w-full bg-white pt-24 pb-20 px-4 text-center border-t border-black/10">
      <div className="max-w-[700px] mx-auto flex flex-col items-center justify-center">
        {/* Call to action heading */}
        <h3 className="font-sans text-xl sm:text-2xl text-black font-normal mb-8">
          Want to create something fun with Dharshana?
        </h3>

        {/* Rotated Let's Play! Button */}
        <button
          onClick={onOpenApplication}
          className="inline-block bg-black text-white px-9 py-4 rounded-[22px] font-sans font-bold text-lg -rotate-2 hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/15 mb-14 cursor-pointer"
        >
          Let&apos;s Play!
        </button>

        {/* Hand-drawn Social Doodles - strictly constrained */}
        <div className="w-[260px] max-w-full h-auto mb-12 mx-auto flex items-center justify-center">
          <Image
            src="/images/social-doodles.png"
            alt="Social doodles: butterfly, linkedin sticky note, paper airplane"
            width={260}
            height={64}
            className="w-[260px] max-w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Copyright notice */}
        <div className="text-xs sm:text-sm text-black/80 font-normal leading-relaxed">
          <p>All content © Dharshana. All rights reserved.</p>
          <p className="mt-1 text-xs text-[#7f7f7f] font-mono">
            Commercial Murals • Mascots & Characters • Packaging • Creative Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
