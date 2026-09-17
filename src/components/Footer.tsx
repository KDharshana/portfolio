'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenApplication: () => void;
}

export default function Footer({ onOpenApplication }: FooterProps) {
  const [times, setTimes] = useState({
    sf: '--:--',
    nyc: '--:--',
    london: '--:--',
    tokyo: '--:--'
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false }),
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        tokyo: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Call to Action Banner */}
        <div className="glass-panel rounded-3xl p-10 sm:p-16 mb-20 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-white/[0.1]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d0ab86]/[0.05] rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl">
            <span className="font-mono text-xs text-[#d0ab86] tracking-widest uppercase">
              NEXT ENGAGEMENT CYCLE
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2 mb-4">
              Ready to build something category-defining?
            </h3>
            <p className="text-white/60 text-sm font-light">
              We are currently accepting 1 additional enterprise partner for our Q4 engineering sprint.
            </p>
          </div>

          <button
            onClick={onOpenApplication}
            className="px-8 py-4 rounded-full bg-[#d0ab86] hover:bg-[#e2c5a8] text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#d0ab86]/25 hover:scale-[1.03] active:scale-[0.98] shrink-0 flex items-center gap-2"
          >
            <span>Apply for Q4 Slot</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Global Timezones Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-white/[0.06] mb-16 font-mono text-xs">
          <div className="flex flex-col">
            <span className="text-white/40 uppercase tracking-widest text-[10px]">SAN FRANCISCO (PT)</span>
            <span className="text-white/90 text-sm mt-1">{times.sf}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 uppercase tracking-widest text-[10px]">NEW YORK (ET)</span>
            <span className="text-white/90 text-sm mt-1">{times.nyc}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 uppercase tracking-widest text-[10px]">LONDON (GMT)</span>
            <span className="text-white/90 text-sm mt-1">{times.london}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white/40 uppercase tracking-widest text-[10px]">TOKYO (JST)</span>
            <span className="text-white/90 text-sm mt-1">{times.tokyo}</span>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#d0ab86] flex items-center justify-center text-black font-mono text-xs font-bold">
                  Æ
                </div>
                <span className="font-mono text-sm tracking-[0.25em] font-semibold text-white uppercase">
                  AETHER STUDIO
                </span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                Aether is a selective digital product & AI engineering studio. We build venture-scale web applications, autonomous agent architectures, and category-defining visual flagships.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational • SOC-2 Aligned</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#work" className="hover:text-white transition-colors">Flagship Work</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Core Capabilities</a></li>
              <li><a href="#engagement-model" className="hover:text-white transition-colors">Partnership Model</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">Verified Metrics</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Security & Legal</h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><span className="text-white/40">SOC-2 Type II Compliant</span></li>
              <li><span className="text-white/40">Enterprise NDA Standard</span></li>
              <li><span className="text-white/40">Complete IP Assignment</span></li>
              <li><span className="text-white/40">GDPR & CCPA Verified</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/30">
          <div>
            © {new Date().getFullYear()} Aether Studio Inc. All rights reserved.
          </div>
          <div>
            Built with Next.js 15 • Tailwind CSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
