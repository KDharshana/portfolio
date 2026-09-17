'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Sparkles,
  Paintbrush,
  Smile,
  Package,
  Code2,
  CheckCircle,
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function SkillsPage() {
  const disciplines = [
    {
      id: 'murals',
      icon: Paintbrush,
      badge: 'Physical & Architectural',
      title: 'Commercial Murals & Experiential Art',
      tagline: 'Exterior masonry and interior landmark murals executed freehand with architectural longevity.',
      description: 'I paint large-scale murals on industrial brick, concrete facades, flagship offices, and public festival spaces. Every line is hand-rendered with high-durability, weather-resistant materials.',
      skills: [
        'Exterior & interior masonry murals (up to 20m wide)',
        'Freehand scaling on multi-tier scaffolding and cherry pickers',
        'Ultraviolet & glow-in-the-dark reactive paintwork',
        'Public fiberglass sculpture trails (e.g. Peanuts Snoopy)',
        'Protective clear-coat weatherproofing against maritime moisture',
        'Pedestrian safety planning & council compliance'
      ],
      tools: ['Montana Gold', 'Molotow High-Solid', 'Krink Mops', 'Liquitex Professional', 'Purdy Brushes']
    },
    {
      id: 'characters',
      icon: Smile,
      badge: 'Character Systems',
      title: 'Brand Mascots & Character Design',
      tagline: 'Irreverent, mischievous cartoon characters that give corporate tech products an attitude and human soul.',
      description: 'Mascots are the ultimate antidote to corporate sterility. I engineer expressive character systems with distinct personalities that thrive across digital UI, physical merch, and social stickers.',
      skills: [
        'Character turnarounds, model sheets & expression matrices',
        '2D Lottie animations optimized under 45kb for web apps',
        'Developer community sticker packs (Discord, Slack, Telegram)',
        'Soft enamel collectible pin & embroidered apparel design',
        'App empty states, 404 error illustrations, and onboarding flows',
        'Full vector licensing and global buyout assignment'
      ],
      tools: ['Procreate', 'iPad Pro + Apple Pencil', 'Adobe Illustrator', 'After Effects', 'Lottie Files']
    },
    {
      id: 'packaging',
      icon: Package,
      badge: 'Tangible & Print',
      title: 'Packaging, Vinyl & Limited Editions',
      tagline: 'Tactile unboxing experiences, collector box sets, and merchandise that consumers refuse to throw away.',
      description: 'From video game vinyl box sets to custom insulated drinkware and limited edition screenprints, I design tangible packaging engineered for unforgettable unboxing moments.',
      skills: [
        'Full-bleed custom corrugated shipping mailer dielines',
        'Spot-gloss UV separation and foil stamping prepress',
        '360° repeating vector patterns for drinkware & bottles',
        'Vinyl inner sleeves, jackets, gatefolds & slipmats',
        'Limited signed Risograph and silkscreen art print editions',
        'Direct factory liaison and prepress proof verification'
      ],
      tools: ['Adobe InDesign', 'Illustrator Dielines', 'Pantone Matching System', 'Silk-Screen Prepress', 'Risograph']
    },
    {
      id: 'engineering',
      icon: Code2,
      badge: 'Creative Technology',
      title: 'Creative Frontend Engineering & Motion',
      tagline: 'Production-ready interactive web experiences built with Next.js, TypeScript, and kinetic motion.',
      description: 'Unlike traditional illustrators who hand off static PNGs and hope for the best, I write clean, production-grade frontend software. I turn artwork into responsive, interactive digital flagships.',
      skills: [
        'Next.js 14/15 App Router architecture with TypeScript',
        'Tailwind CSS design systems & custom micro-animations',
        'Framer Motion spring physics & scroll-driven timelines',
        'Interactive SVG manipulation & Three.js canvas playgrounds',
        'Strict 100/100 Core Web Vitals performance benchmarks',
        'Zero-debt git workflow delivered directly to your codebase'
      ],
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Git / GitHub']
    }
  ];

  const toolsMatrix = [
    { category: 'Physical Art & Murals', items: ['Montana Spray', 'Molotow Acrylic', 'Krink Mops', 'Liquitex Heavy Body', 'Scaffolding Rigging'] },
    { category: 'Illustration & Vector', items: ['Procreate', 'iPad Pro', 'Adobe Illustrator', 'Photoshop', 'Vector Splines'] },
    { category: 'Packaging & Print', items: ['Dieline Engineering', 'Adobe InDesign', 'Pantone Spot Color', 'Risograph Setup', 'Silk Screening'] },
    { category: 'Frontend & Creative Code', items: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lottie / WebGL'] }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Raw Thumbnails',
      desc: 'We align on your strategic goals, audience, and creative tone. I generate dozens of raw ink thumbnails and directional concepts.'
    },
    {
      step: '02',
      title: 'Vector Refinement & Dielines',
      desc: 'Selected directions are refined into scalable vectors, character turnaround sheets, print dielines, or digital component architecture.'
    },
    {
      step: '03',
      title: 'On-Site Painting or Code Build',
      desc: 'Execution phase: I physically paint the masonry mural on scaffolding, or code the production Next.js application with kinetic motion.'
    },
    {
      step: '04',
      title: 'Handoff & Global Buyout',
      desc: 'Delivery of all master vector assets, production git repository, behind-the-scenes cinematography, and full copyright assignment.'
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />

      {/* Header Section */}
      <section className="w-full pt-16 pb-20 px-4 sm:px-6 max-w-[1224px] mx-auto border-b border-black/10">
        <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-[#f5f5f5] text-black text-xs font-bold uppercase tracking-wider mb-6 shadow-[2px_2px_0px_0px_#000000]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 // Craft, Tools &amp; Disciplines</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-black leading-[1.1] mb-6 max-w-4xl">
          Creative Disciplines &amp; Technical Arsenal.
        </h1>

        <p className="text-lg sm:text-xl text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
          A rare hybrid skillset uniting freehand brush-and-ink illustration with large-scale architectural execution, tactile packaging engineering, and production Next.js software.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-[8px] border-2 border-black shadow-[3px_3px_0px_0px_#424242] hover:bg-[#424242] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Commission Dharshana</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/project"
            className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-[8px] border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:bg-[#f5f5f5] transition-all cursor-pointer"
          >
            View Projects In Action
          </Link>
        </div>
      </section>

      {/* 4 Core Disciplines Detailed Cards */}
      <section className="w-full py-20 bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-white mb-3 shadow-[2px_2px_0px_0px_#000000]">
              CORE SPECIALIZATIONS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-black">
              What I Build For You.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.id}
                  className="bg-white border-2 border-black rounded-[8px] p-8 shadow-[5px_5px_0px_0px_#000000] hover:shadow-[7px_7px_0px_0px_#000000] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[8px] bg-[#f5f5f5] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_#000000]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold border-2 border-black px-2.5 py-0.5 rounded bg-[#f5f5f5]">
                        {d.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-black mb-2">
                      {d.title}
                    </h3>

                    <p className="text-xs font-bold text-[#7f7f7f] uppercase tracking-wider mb-4">
                      {d.tagline}
                    </p>

                    <p className="text-sm text-[#424242] leading-relaxed font-light mb-6">
                      {d.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t-2 border-black/10 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                        Key Capabilities:
                      </div>
                      {d.skills.map((skill, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-black font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-black/10">
                    <div className="text-[11px] font-mono text-[#7f7f7f] mb-2">
                      TOOLS & STACK:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono bg-[#f5f5f5] px-2 py-0.5 rounded border border-black/20 text-black font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack Matrix */}
      <section className="w-full py-20 bg-white border-b border-black/10">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-3 shadow-[2px_2px_0px_0px_#000000]">
                ARSENAL & PROFICIENCY
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-black">
                Tool Stack Matrix.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424242] max-w-md font-light">
              From physical masonry acrylics on 12-meter scaffolding to production Next.js component repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsMatrix.map((matrix) => (
              <div
                key={matrix.category}
                className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[3px_3px_0px_0px_#000000]"
              >
                <div className="font-display text-lg text-black mb-4 pb-2 border-b-2 border-black/10">
                  {matrix.category}
                </div>
                <div className="space-y-2">
                  {matrix.items.map((item) => (
                    <div
                      key={item}
                      className="p-2 bg-[#f9f9f9] border border-black/10 rounded-[6px] text-xs font-medium text-black flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="w-full py-20 bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-white mb-3 shadow-[2px_2px_0px_0px_#000000]">
              COLLABORATION WORKFLOW
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-black">
              How We Work Together.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-3xl sm:text-4xl text-black mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#424242] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 p-8 rounded-[8px] bg-black text-white border-2 border-black shadow-[6px_6px_0px_0px_#424242] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl sm:text-3xl mb-2">
                Have an ambitious brief ready?
              </div>
              <p className="text-sm text-[#bcbcbc] font-light max-w-lg">
                I take on 2 to 3 select commissions per quarter. Let&apos;s build something bold that people remember.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-[8px] hover:bg-[#f5f5f5] transition-all shrink-0 cursor-pointer shadow-[2px_2px_0px_0px_#000000]"
            >
              Start Commission Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
