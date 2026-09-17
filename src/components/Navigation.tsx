'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenApplication?: () => void;
}

export default function Navigation({ onOpenApplication }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Project', href: '/project' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white pt-6 pb-4 px-6 sm:px-12 relative z-30 border-b border-black/10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Crayon Logo + Nav Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/crayon-logo.png"
              alt="Dharshana Crayon"
              width={70}
              height={45}
              className="w-auto h-9 sm:h-10 object-contain transition-transform group-hover:scale-110 group-hover:-rotate-3"
              priority
            />
            <span className="font-display text-xl sm:text-2xl text-black tracking-tight hidden md:inline-block">
              Dharshana
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-2 md:gap-3 font-sans text-[15px] sm:text-[15px] text-black">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-[6px] transition-all text-sm font-medium ${
                    isActive
                      ? 'bg-[#f5f5f5] text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000000]'
                      : 'text-[#424242] hover:text-black hover:bg-[#fafafa]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center: Rock-on Hand with Lightning Bolts */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 hidden md:block">
          <Link href="/" className="block transition-transform hover:-translate-y-1 hover:rotate-3">
            <Image
              src="/images/rock-hand.png"
              alt="Rock on Hand"
              width={36}
              height={56}
              className="w-auto h-12 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: "Let's Play!" Pill Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            onClick={(e) => {
              if (onOpenApplication && pathname === '/') {
                // optionally trigger modal on home or navigate
              }
            }}
            className="inline-block bg-black text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-[18px] sm:rounded-[20px] font-sans font-bold text-[14px] sm:text-[15px] -rotate-2 hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-black/10 cursor-pointer"
          >
            Let&apos;s Play!
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-black hover:opacity-70 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-4 py-4 border-t border-black/10 flex flex-col gap-2 font-sans text-base">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-[8px] text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-[#f5f5f5]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
