'use client';

import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface CapabilitiesProps {
  onOpenApplication: () => void;
}

export default function Capabilities({ onOpenApplication }: CapabilitiesProps) {
  const capabilities = [
    {
      title: 'Commercial Murals & Experiential',
      tagline: 'Large-format hand-painted exterior and interior murals that turn physical spaces into cultural landmarks.',
      bullets: [
        'Exterior & interior architectural murals',
        'Ultraviolet / reactive experiential paintwork',
        'Public sculpture & 3D trail installations',
        'Freehand lettering and brand environmental design'
      ],
      badge: 'High Impact'
    },
    {
      title: 'Brand Mascots & Character Systems',
      tagline: 'Distinctive, mischievous characters that inject human warmth and personality into corporate brands.',
      bullets: [
        'Character model sheets & turnaround vectors',
        '2D & 3D rigged animation assets (Lottie / WebGL)',
        'Merchandise, enamel pins, and apparel guides',
        'Extensive sticker packs for digital platforms'
      ],
      badge: 'Identity'
    },
    {
      title: 'Packaging & Limited Editions',
      tagline: 'Tactile, collectible packaging and box sets that consumers refuse to throw away.',
      bullets: [
        'Vinyl record sleeves, box sets & slipmats',
        '360° repeating drinkware & merchandise patterns',
        'Custom shipping mailers and unboxing inserts',
        'Specialty print finishes (Risograph, screenprint, foil)'
      ],
      badge: 'Tangible'
    },
    {
      title: 'Editorial & Campaign Key Visuals',
      tagline: 'Bold, hand-drawn typography and explosive kinetic drawings that cut through digital noise.',
      bullets: [
        'National campaign posters & outdoor billboards',
        'Custom bespoke headline brush lettering',
        'Interactive web illustrations & editorial hero art',
        'Full vector licensing and global buyout terms'
      ],
      badge: 'Campaign'
    }
  ];

  return (
    <section id="capabilities" className="w-full bg-[#fafafa] py-24 border-y border-black/10">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Headline */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-white mb-3 shadow-[2px_2px_0px_0px_#000000]">
              ABOUT DHARSHANA STUDIO
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-black leading-tight mb-4">
              Playful pictures that are bold on your behalf!
            </h2>
            <p className="text-base sm:text-lg text-[#424242] leading-relaxed font-light max-w-2xl">
              Created by Dharshana from the depths of the creative drawing dungeon. 
              We work with global record labels, forward-thinking tech ventures, cultural institutions, and ambitious brands who want artwork and software with an unmistakable soul.
            </p>
          </div>

          {/* Doodles Showcase */}
          <div className="lg:col-span-4 flex items-center justify-center gap-8">
            <div className="w-28 h-auto flex items-center justify-center">
              <Image
                src="/images/art-breathe.png"
                alt="Breathe plant illustration"
                width={112}
                height={144}
                className="w-28 h-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-28 h-auto flex items-center justify-center">
              <Image
                src="/images/art-hot-damn.png"
                alt="Hot Damn illustration"
                width={112}
                height={144}
                className="w-28 h-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* 4 Capabilities Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white border-2 border-black rounded-[8px] p-8 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl sm:text-2xl text-black">
                    {cap.title}
                  </h3>
                  <span className="text-[11px] font-bold border-2 border-black px-2.5 py-0.5 rounded bg-[#f5f5f5]">
                    {cap.badge}
                  </span>
                </div>

                <p className="text-sm text-[#424242] leading-relaxed font-light mb-6">
                  {cap.tagline}
                </p>

                <div className="space-y-2 pt-4 border-t-2 border-black/10 mb-6">
                  {cap.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-black">
                      <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#7f7f7f]">Direct Commission</span>
                <button
                  onClick={onOpenApplication}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline cursor-pointer"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
