'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface EngagementModelProps {
  onOpenApplication: (preselectedTier?: string) => void;
}

export default function EngagementModel({ onOpenApplication }: EngagementModelProps) {
  const tiers = [
    {
      name: 'Brand Key Visual & Mascot Sprint',
      timeline: '2 to 3 Weeks',
      investment: '£15,000 – £25,000',
      focus: 'New product launch, mascot development, or campaign hero artwork',
      availability: '1 Slot Available',
      includes: [
        'Complete Character & Mascot Model Sheets',
        '2D Turnarounds and Expression Sheets',
        'Bespoke Hand-Lettered Headline System',
        'Social Media & Outdoor Vector Assets',
        'Commercial Buyout & Global Licensing'
      ],
      recommended: false
    },
    {
      name: 'Full Scale Mural & Experiential',
      timeline: '3 to 5 Weeks',
      investment: '£25,000 – £45,000',
      focus: 'Flagship office, venue, retail space, or public installation',
      availability: 'Booking Q4 / Q1',
      includes: [
        'Freehand On-Site Exterior or Interior Painting',
        'High-Durability Weather-Resistant Material Sourcing',
        'Ultraviolet / Glow Experimental Treatments',
        'Behind-The-Scenes Video & Social Promotion',
        'Companion Print & Merchandise Edition'
      ],
      recommended: true
    },
    {
      name: 'Global Campaign & 3D Universe',
      timeline: '6 to 10 Weeks',
      investment: '£45,000 – £85,000',
      focus: 'Full multimedia advertising campaign, 3D assets, and packaging line',
      availability: 'Selective: 1 Brand per Quarter',
      includes: [
        'Multi-Format Packaging & Box Set Engineering',
        'Rigged 2D / 3D Animated Commercial Characters',
        'Full Outdoor Billboard & Digital Screen Renders',
        'Direct Creative Direction with Colin Kersley',
        'Exclusive Category Lockout Agreement'
      ],
      recommended: false
    }
  ];

  return (
    <section id="engagement-model" className="w-full bg-white py-24 border-b border-black/10">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-3 shadow-[2px_2px_0px_0px_#000000]">
            PARTNERSHIP TIERS & COMMISSIONS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-black mb-4">
            Clear Scopes. Zero Fluff.
          </h2>
          <p className="text-sm sm:text-base text-[#424242] font-light leading-relaxed">
            We work directly with founders, brand directors, and creative heads. Fixed delivery windows and complete transparent licensing.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border-2 border-black rounded-[8px] p-8 flex flex-col justify-between relative transition-all ${
                tier.recommended
                  ? 'bg-[#f5f5f5] shadow-[6px_6px_0px_0px_#000000] lg:-translate-y-2'
                  : 'bg-white shadow-[4px_4px_0px_0px_#000000]'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-[8px] bg-black text-white font-display text-xs uppercase tracking-wider border-2 border-black">
                  Most Popular Engagement
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#7f7f7f]">
                    {tier.timeline}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-[6px] border border-black bg-white text-black">
                    {tier.availability}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-black mb-2 leading-snug">
                  {tier.name}
                </h3>

                <div className="font-display text-3xl sm:text-4xl text-black mb-3">
                  {tier.investment}
                </div>

                <p className="text-xs text-[#424242] mb-6 font-light leading-relaxed">
                  {tier.focus}
                </p>

                <div className="space-y-2.5 pt-6 border-t-2 border-black/10 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-black">
                    Included in delivery:
                  </p>
                  {tier.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-black font-medium">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenApplication(tier.name)}
                className={`w-full py-3.5 rounded-[8px] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black transition-all ${
                  tier.recommended
                    ? 'bg-black text-white hover:bg-[#424242] shadow-[3px_3px_0px_0px_#424242]'
                    : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[3px_3px_0px_0px_#000000]'
                }`}
              >
                <span>Apply for this Tier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
