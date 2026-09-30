'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroArtRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(
        heroArtRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 25,
          duration: 0.9,
          ease: 'power2.out',
        }
      )
        .from(
          hookRef.current,
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          buttonsRef.current ? Array.from(buttonsRef.current.children) : [],
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
            stagger: 0.12,
          },
          '-=0.3'
        )
        .from(
          handRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
          },
          '-=0.2'
        );

      // Continuous pointing hand float indicator
      gsap.to(handRef.current, {
        y: 7,
        duration: 0.85,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    },
    { scope: containerRef }
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between items-center bg-white px-4 pt-4 pb-8 overflow-hidden select-none scroll-mt-20"
    >
      {/* Main Hero Custom Hand-Drawn Artwork: DHARSHANA */}
      <div className="w-full max-w-[1020px] mx-auto flex flex-col items-center justify-center my-auto px-4 py-2">
        <div
          ref={heroArtRef}
          className="w-full flex items-center justify-center pointer-events-none select-none"
        >
          <Image
            src="/images/dharshana-hero-art.png"
            alt="DHARSHANA - 3rd Year Computer Science Student & Software Engineer"
            width={1020}
            height={574}
            className="w-full max-w-[960px] h-auto max-h-[66vh] object-contain pointer-events-none select-none"
            priority
            draggable={false}
          />
        </div>

        {/* Short Personal Hook */}
        <p
          ref={hookRef}
          className="mt-4 text-center text-sm sm:text-base md:text-lg text-[#424242] font-light max-w-2xl leading-relaxed"
        >
          Creator of Tonarc (published on F-Droid), architect of Bun 1.3 &amp; React 19 web platforms, and builder of local GraphRAG AI agents. Rigorous CS fundamentals meets real-world open source.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <button
            onClick={() => scrollTo('project')}
            className="px-6 py-3 rounded-[8px] bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-[#424242] transition-all shadow-[3px_3px_0px_0px_#424242] flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Technical Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-[8px] bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-[#f5f5f5] transition-all shadow-[3px_3px_0px_0px_#000000] cursor-pointer"
          >
            Get In Touch / Hire Me
          </button>
        </div>
      </div>

      {/* Pointing Hand at the Bottom */}
      <div
        ref={handRef}
        className="flex flex-col items-center justify-center pt-2 pb-1 cursor-pointer group"
        onClick={() => scrollTo('about')}
      >
        <div className="transition-transform group-hover:scale-115">
          <Image
            src="/images/pointing-hand.png"
            alt="Scroll down to About"
            width={40}
            height={60}
            className="w-9 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
