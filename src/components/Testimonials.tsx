'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { CS_TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white py-24 border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-3 shadow-[2px_2px_0px_0px_#000000]">
            ACADEMIC &amp; INDUSTRY ENDORSEMENTS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-black mb-4">
            Faculty &amp; Mentor Words.
          </h2>
          <p className="text-sm sm:text-base text-[#424242] font-light leading-relaxed">
            Feedback from Computer Science professors, internship engineering mentors, and hackathon judges who have reviewed Dharshana&apos;s code and systems work.
          </p>
        </div>

        {/* Testimonials Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CS_TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              className="bg-white border-2 border-black rounded-[8px] p-7 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#f5f5f5] border-2 border-black flex items-center justify-center mb-5 shadow-[2px_2px_0px_0px_#000000]">
                  <Quote className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm sm:text-[14px] text-black leading-relaxed font-normal mb-6">
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
