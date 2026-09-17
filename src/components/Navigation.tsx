'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenApplication: (preselectedTier?: string) => void;
}

export default function Navigation({ onOpenApplication }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Engagement Model', href: '#engagement-model' },
    { label: 'Proof', href: '#proof' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#d0ab86] to-[#ab8749] p-[1px] shadow-lg shadow-[#d0ab86]/20">
            <div className="w-full h-full bg-[#08090d] rounded-[7px] flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-[#d0ab86] tracking-tighter group-hover:scale-110 transition-transform">
                Æ
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-[0.25em] font-semibold text-white uppercase">
              AETHER
            </span>
            <span className="text-[9px] tracking-widest text-white/40 uppercase">
              Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wider uppercase text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Availability & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono tracking-wide">Q4: 1 Slot Open</span>
          </div>

          <button
            onClick={() => onOpenApplication()}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-black bg-[#d0ab86] hover:bg-[#e2c5a8] transition-all duration-200 shadow-md shadow-[#d0ab86]/20 hover:shadow-lg hover:shadow-[#d0ab86]/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Apply for Partner</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenApplication()}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium text-black bg-[#d0ab86]"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/70 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c12]/95 border-b border-white/[0.08] px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 text-[11px] text-emerald-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              Q4 Engagement: 1 Partner Slot Available
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="mt-2 w-full py-3 rounded-xl bg-[#d0ab86] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Initiate Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
