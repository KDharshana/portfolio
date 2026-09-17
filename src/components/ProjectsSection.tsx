'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle, Sparkles, Code, ExternalLink, Terminal } from 'lucide-react';
import { CS_PROJECTS, ProjectItem } from '@/lib/data';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Systems & Backend',
    'Full-Stack & Web',
    'AI & Machine Learning',
    'Interactive'
  ];

  const filteredItems = selectedCategory === 'All'
    ? CS_PROJECTS
    : CS_PROJECTS.filter((item) => item.category === selectedCategory);

  const scrollToContact = () => {
    setActiveItem(null);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="project" className="w-full py-24 bg-[#fafafa] border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // Selected CS Projects</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6 max-w-4xl">
            Featured Engineering Projects.
          </h2>

          <p className="text-base sm:text-lg text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
            A showcase of distributed consensus systems, autonomous multi-agent AI pipelines, real-time collaborative applications, and algorithmic visualizers.
          </p>

          {/* Category Tabs with Crossed Pencils */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/images/crossed-pencils.png"
                alt="Crossed Pencils"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-[8px] font-sans font-bold text-xs uppercase tracking-wider transition-all border-2 border-black cursor-pointer ${
                      isActive
                        ? 'bg-black text-white shadow-[2px_2px_0px_0px_#424242]'
                        : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white border-2 border-black rounded-[8px] overflow-hidden shadow-[5px_5px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              {/* Visual Image Container */}
              <div className="relative w-full h-64 sm:h-72 bg-[#f0f0f0] border-b-2 border-black overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white border-2 border-black rounded-[6px] px-2.5 py-1 text-[11px] font-bold text-black shadow-[2px_2px_0px_0px_#000000]">
                  {item.category}
                </div>
                <div className="absolute top-4 right-4 bg-black text-white border-2 border-black rounded-[6px] px-2.5 py-1 text-[11px] font-mono font-bold">
                  {item.year}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-mono font-bold text-[#7f7f7f] uppercase tracking-wider mb-2">
                    Scope: {item.client}
                  </div>
                  <h3 className="font-display text-2xl text-black mb-3 leading-snug group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#424242] leading-relaxed font-light mb-4">
                    {item.tagline}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono bg-[#f5f5f5] px-2 py-0.5 rounded border border-black/20 text-black font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-black font-semibold truncate max-w-[200px] sm:max-w-xs">
                    {item.impact}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-black uppercase tracking-wider group-hover:translate-x-1 transition-transform shrink-0">
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Drawer Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border-2 border-black rounded-[8px] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000000] z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 p-2 border-2 border-black rounded-[8px] bg-white hover:bg-[#f5f5f5] text-black shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-4">
                {activeItem.client} • {activeItem.category} • {activeItem.year}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-black mb-3">
                {activeItem.title}
              </h3>

              <div className="relative w-full h-64 sm:h-80 rounded-[8px] border-2 border-black overflow-hidden mb-6 bg-[#f0f0f0]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-[#424242] leading-relaxed mb-6 font-light">
                {activeItem.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-2">
                  Technologies &amp; Protocols:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeItem.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-bold bg-[#f5f5f5] px-3 py-1 rounded-[6px] border-2 border-black text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-2">
                  Architectural Deliverables &amp; Milestones:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-black bg-[#fafafa] p-2.5 rounded-[6px] border border-black/10">
                      <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black mb-6">
                <div className="text-[11px] font-mono font-bold uppercase text-[#7f7f7f]">Verified Outcome &amp; Benchmark</div>
                <div className="text-sm font-bold text-black mt-1">{activeItem.impact}</div>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#7f7f7f]">Interested in discussing this architecture?</span>
                <button
                  onClick={scrollToContact}
                  className="bg-black text-white px-6 py-2.5 rounded-[8px] font-bold text-xs uppercase tracking-wider -rotate-1 hover:rotate-0 transition-transform shadow-[3px_3px_0px_0px_#424242] cursor-pointer"
                >
                  Contact Dharshana
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
