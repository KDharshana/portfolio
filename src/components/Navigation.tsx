'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenApplication: () => void;
}

export default function Navigation({ onOpenApplication }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white pt-6 pb-2 px-6 sm:px-12 relative z-30">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left Side: Crayon Logo + Nav Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          <a href="#" className="flex items-center group">
            <div className="relative w-14 h-9 sm:w-16 sm:h-10 transition-transform group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="/images/crayon-logo.png"
                alt="Alternative Aesthetics Crayon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          <nav className="hidden sm:flex items-center gap-6 sm:gap-8 font-sans text-[15px] sm:text-[16px] text-black font-normal">
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#work" className="hover:opacity-70 transition-opacity">
              Shop
            </a>
            <a href="#capabilities" className="hover:opacity-70 transition-opacity">
              Services
            </a>
          </nav>
        </div>

        {/* Center: Severed Rock-on Hand Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:block">
          <a href="#" className="block transition-transform hover:-translate-y-1 hover:rotate-3">
            <div className="relative w-9 h-14">
              <Image
                src="/images/rock-hand.png"
                alt="Rock on Hand"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>
        </div>

        {/* Right Side: Rotated "Let's Play!" Pill Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenApplication}
            className="inline-block bg-black text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-[18px] sm:rounded-[20px] font-sans font-bold text-[14px] sm:text-[15px] -rotate-2 hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-black/10 cursor-pointer"
          >
            Let&apos;s Play!
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-black hover:opacity-70"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-4 py-4 border-t border-black/10 flex flex-col gap-3 font-sans text-base">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black font-medium py-1"
          >
            About
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black font-medium py-1"
          >
            Shop & Portfolio
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black font-medium py-1"
          >
            Services & Commissions
          </a>
        </div>
      )}
    </header>
  );
}
