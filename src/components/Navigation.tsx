'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Project', id: 'project' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md pt-5 pb-4 px-6 sm:px-12 border-b border-black/10 transition-all">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Crayon Logo + Nav Links */}
        <div className="flex items-center gap-6 sm:gap-10">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group cursor-pointer border-none bg-transparent p-0 text-left"
          >
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
          </button>

          <nav className="hidden sm:flex items-center gap-1.5 md:gap-2 font-sans text-black">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-[6px] transition-all text-xs sm:text-sm cursor-pointer ${
                    isActive
                      ? 'bg-[#f5f5f5] text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000000]'
                      : 'text-[#424242] hover:text-black hover:bg-[#fafafa] font-medium border-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Center: Rock-on Hand with Lightning Bolts */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3.5 hidden md:block">
          <button
            onClick={() => scrollTo('home')}
            className="block transition-transform hover:-translate-y-1 hover:rotate-3 cursor-pointer bg-transparent border-none p-0"
            aria-label="Scroll to top"
          >
            <Image
              src="/images/rock-hand.png"
              alt="Rock on Hand"
              width={36}
              height={56}
              className="w-auto h-11 object-contain"
              priority
            />
          </button>
        </div>

        {/* Right: "Hire Me!" Pill Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-block bg-black text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-[18px] sm:rounded-[20px] font-sans font-bold text-[13px] sm:text-[14px] -rotate-2 hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-black/10 cursor-pointer"
          >
            Hire Me!
          </button>

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
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2 rounded-[8px] text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-[#f5f5f5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
