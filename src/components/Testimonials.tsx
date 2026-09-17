'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { SOCIAL_PROOF } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white py-24 border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-3 shadow-[2px_2px_0px_0px_#000000]">
            CLIENT VOICES & REPUTATION
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-black mb-4">
            Words of Praise.
          </h2>
          <p className="text-sm sm:text-base text-[#424242] font-light leading-relaxed">
            Direct feedback from label heads, creative directors, and founders who have collaborated with Dharshana on flagship releases.
          </p>
        </div>

        {/* Testimonials Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_PROOF.map((item, idx) => (
            <div
              key={item.author}
              className="bg-white border-2 border-black rounded-[8px] p-7 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#f5f5f5] border-2 border-black flex items-center justify-center mb-5 shadow-[2px_2px_0px_0px_#000000]">
                  <Quote className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm sm:text-[15px] text-black leading-relaxed font-normal mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t-2 border-black/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border-2 border-black overflow-hidden relative shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-base text-black leading-snug">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#424242] font-medium">
                    {item.title}, <span className="text-black font-semibold">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
