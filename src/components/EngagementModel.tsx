'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Briefcase, Calendar, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EngagementModelProps {
  onSelectTier?: (tierName: string) => void;
}

export default function EngagementModel({ onSelectTier }: EngagementModelProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  const roles = [
    {
      name: 'Summer Software Engineering Internship',
      timeline: '10 to 12 Weeks (Summer 2025/2026)',
      type: 'Full-Time Internship',
      focus: 'Android Engineering, Full-Stack Web (Bun / React 19), or Applied AI & GraphRAG',
      availability: 'Open for Summer 2025 & 2026',
      includes: [
        '40 Hours / week dedicated full-time engineering execution',
        'Proven shipping record: published Tonarc Android app on F-Droid',
        'Mastery in Kotlin, Jetpack Compose, Bun 1.3, React 19, Python & Rust',
        'Eagerness to pair-program, receive critique, and learn from staff engineers',
        'Open to remote global roles, hybrid positions, and relocation'
      ],
      recommended: true
    },
    {
      name: 'Part-Time Co-Op & Student Software Engineer',
      timeline: '3 to 6 Months (Academic Term)',
      type: '15 to 20 Hours / Week',
      focus: 'Mobile development, internal developer tooling, or GraphRAG AI pipelines',
      availability: 'Available Academic Year 2025–2026',
      includes: [
        '15 to 20 Hours / week consistent sprint contributions and PR reviews',
        'Experience shipping with Bun, Next.js, FastAPI, Neo4j, and Docker',
        'High asynchronous autonomy and clear engineering documentation',
        'Balanced alongside 3rd-year CS coursework',
        'Direct communication via Slack, GitHub, or Discord'
      ],
      recommended: false
    },
    {
      name: 'Full-Stack / Mobile MVP Prototyping Sprint',
      timeline: '2 to 4 Weeks Sprint',
      type: 'Technical Contract / Hackathon Project',
      focus: '0-to-1 Android apps in Jetpack Compose, Bun/React 19 platforms, or local LLM prototypes',
      availability: 'Selective: 1 Project per Term',
      includes: [
        'Complete native Android app or Next.js / Bun full-stack web application',
        'Offline-first architecture, background media session, or REST API',
        'Local LLM integration (Ollama) or GraphRAG (Neo4j) reasoning',
        'Clean GitHub repository transfer with zero technical debt',
        'Interactive UI with 100/100 performance benchmarks'
      ],
      recommended: false
    }
  ];

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 90%',
              once: true,
            },
          }
        );
      }

      if (rolesRef.current) {
        gsap.fromTo(
          Array.from(rolesRef.current.children),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: rolesRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleSelectTier = (roleName: string) => {
    if (onSelectTier) {
      onSelectTier(roleName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="commissions"
      ref={sectionRef}
      className="w-full bg-white py-24 border-b border-black/10 scroll-mt-20"
    >
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-3 shadow-[2px_2px_0px_0px_#000000]">
            WHAT I&apos;M LOOKING FOR // OPEN ROLES
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-black mb-4">
            Opportunities &amp; Collaboration.
          </h2>
          <p className="text-sm sm:text-base text-[#424242] font-light leading-relaxed">
            I am actively looking for software engineering internships and collaborative research projects where I can write high-impact code, tackle hard technical problems, and learn from world-class teams.
          </p>
        </div>

        {/* Roles Grid */}
        <div ref={rolesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.name}
              className={`border-2 border-black rounded-[8px] p-8 flex flex-col justify-between relative transition-all ${
                role.recommended
                  ? 'bg-[#f5f5f5] shadow-[6px_6px_0px_0px_#000000] lg:-translate-y-2'
                  : 'bg-white shadow-[4px_4px_0px_0px_#000000]'
              }`}
            >
              {role.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-[8px] bg-black text-white font-display text-xs uppercase tracking-wider border-2 border-black">
                  Top Priority Role
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#7f7f7f]">
                    {role.timeline}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-[6px] border border-black bg-white text-black">
                    {role.availability}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-black mb-2 leading-snug">
                  {role.name}
                </h3>

                <div className="text-xs font-mono font-bold text-black uppercase tracking-wider mb-3">
                  {role.type}
                </div>

                <p className="text-xs text-[#424242] mb-6 font-light leading-relaxed">
                  {role.focus}
                </p>

                <div className="space-y-2.5 pt-6 border-t-2 border-black/10 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-black">
                    What I bring to the team:
                  </p>
                  {role.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-black font-medium">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectTier(role.name)}
                className={`w-full py-3.5 rounded-[8px] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black transition-all cursor-pointer ${
                  role.recommended
                    ? 'bg-black text-white hover:bg-[#424242] shadow-[3px_3px_0px_0px_#424242]'
                    : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[3px_3px_0px_0px_#000000]'
                }`}
              >
                <span>Inquire About This Role</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
