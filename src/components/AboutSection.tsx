'use client';

import Image from 'next/image';
import { ACADEMIC_STATS, EDUCATION_DETAILS } from '@/lib/data';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  CheckCircle,
  Terminal,
  BookOpen,
  Award,
  Cpu
} from 'lucide-react';

export default function AboutSection() {
  const experiences = [
    {
      year: '2025 - Present',
      role: 'Lead Android & Open Source Developer — Tonarc',
      company: 'F-Droid Ecosystem & Open Source',
      desc: 'Architected and published Tonarc (PixelPlayerOSS) on F-Droid using Kotlin, Jetpack Compose, and AndroidX Media3 ExoPlayer. Implemented background audio playback services, real-time synchronized LRC lyrics, and custom 10-band equalizer presets.'
    },
    {
      year: '2025',
      role: 'Full-Stack Architect — E-Waste Management System',
      company: 'Green Computing Platform',
      desc: 'Engineered an end-to-end e-waste recycling platform with Bun 1.3.1, React 19, and TypeScript. Implemented JWT authentication, geo-located collection centers directory, and cryptographically verifiable digital certificates with QR codes.'
    },
    {
      year: '2024 - 2025',
      role: 'Applied AI & Systems Researcher — AI Interview Copilot & GraphRAG',
      company: 'Autonomous AI & Knowledge Systems',
      desc: 'Developed a real-time multimodal interview assistant with dual-channel audio transcription, Tesseract OCR screen capture, and local Ollama inference. Designed an autonomous GraphRAG agent with Neo4j native vector search and Cypher reasoning.'
    },
    {
      year: '2024 - 2025',
      role: 'Systems Contributor & Tooling Developer — Mervelas & Claw-Code',
      company: 'Developer Tooling & Systems Harnesses',
      desc: 'Authored Mervelas, an independent high-performance AI coding CLI built with Bun and TypeScript. Contributed to claw-code-parity Rust systems harness work, focusing on zero-allocation streaming token parsers and terminal ergonomics.'
    }
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#fafafa] border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // Scraped Profile &amp; Engineering Background</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6 max-w-4xl">
            3rd Year Computer Science Student &amp; Software Engineer.
          </h2>

          <p className="text-base sm:text-lg text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
            Undergraduate Computer Science engineer based in Salem, Tamil Nadu, India. Specializing in modern Android engineering with Kotlin &amp; Jetpack Compose, high-performance web systems with Bun &amp; React 19, local AI GraphRAG architectures, and systems tooling in Rust.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold border-2 border-black rounded-[8px] px-3.5 py-2 bg-white shadow-[2px_2px_0px_0px_#000000]">
              <GraduationCap className="w-4 h-4 text-black" />
              <span>B.E. in Computer Science — Class of 2026 (Year 3)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold border-2 border-black rounded-[8px] px-3.5 py-2 bg-black text-white shadow-[2px_2px_0px_0px_#424242]">
              <MapPin className="w-4 h-4 text-white" />
              <span>Salem, Tamil Nadu, India • Open for Global Remote &amp; Hybrid Roles</span>
            </div>
          </div>
        </div>

        {/* 2-Column Bento: Story & Academic Standings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 bg-white border-2 border-black rounded-[8px] p-8 sm:p-10 shadow-[5px_5px_0px_0px_#000000]">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-5 shadow-[2px_2px_0px_0px_#000000]">
              ENGINEERING PHILOSOPHY &amp; BACKGROUND
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-black mb-5 leading-tight">
              Production open-source code meets modern systems architecture.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#424242] leading-relaxed font-light">
              <p>
                I am a 3rd year Computer Science undergraduate who loves building real-world, high-impact software from first principles. My engineering footprint centers around production Android development in Kotlin—where I architected and published <strong>Tonarc (PixelPlayerOSS)</strong> on F-Droid, featuring AndroidX Media3 ExoPlayer background playback, Jetpack Compose UI, and synchronized lyrics.
              </p>
              <p>
                On the web, I build with next-generation runtimes like <strong>Bun 1.3</strong> and <strong>React 19</strong>, creating scalable platforms such as an enterprise E-Waste Management System with verifiable cryptographic QR certificates and sub-50ms REST API latencies.
              </p>
              <p>
                In applied artificial intelligence, I focus on low-latency, privacy-preserving systems. I developed an AI Interview Copilot powered by dual-stream audio capture and local LLMs (Ollama / LLaMA 3.2), and an autonomous <strong>GraphRAG Agent</strong> combining Neo4j native vector search with multi-hop relational reasoning. In systems programming, I contribute to high-performance developer harnesses and CLIs written in <strong>Rust</strong>.
              </p>
            </div>

            {/* Core Engineering Values */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-[8px] bg-[#f9f9f9] border-2 border-black">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-black" />
                  <span>01 // Native Mobile &amp; Modern Runtimes</span>
                </div>
                <p className="text-xs text-[#424242]">
                  ExoPlayer background session lifecycle, Jetpack Compose reactive state hoisting, and Bun 1.3 ultra-fast execution.
                </p>
              </div>
              <div className="p-4 rounded-[8px] bg-[#f9f9f9] border-2 border-black">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-black" />
                  <span>02 // Privacy-First AI &amp; Systems Rigor</span>
                </div>
                <p className="text-xs text-[#424242]">
                  Local LLM inference via Ollama, Neo4j multi-hop GraphRAG reasoning, and memory-safe tooling in Rust.
                </p>
              </div>
            </div>
          </div>

          {/* Side Column: Education & Coursework */}
          <div className="lg:col-span-4 space-y-6">
            {/* Degree & Standing Card */}
            <div className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000]">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-black" />
                <span className="font-bold text-xs uppercase tracking-wider text-black">
                  Degree &amp; Coursework
                </span>
              </div>
              <div className="font-display text-lg text-black mb-1">
                B.E. in Computer Science
              </div>
              <p className="text-xs text-[#7f7f7f] mb-4">
                Salem, Tamil Nadu, India • Expected Grad: 2026
              </p>

              <div className="pt-3 border-t border-black/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-black mb-2">
                  Key Coursework:
                </div>
                <div className="space-y-1.5 text-xs text-[#424242]">
                  {EDUCATION_DETAILS.coursework.slice(0, 6).map((course, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-black shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Doodles Card */}
            <div className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] text-center">
              <div className="flex items-center justify-center gap-6 mb-3">
                <Image
                  src="/images/art-breathe.png"
                  alt="Breathe plant doodle"
                  width={90}
                  height={110}
                  className="w-20 h-auto object-contain hover:scale-105 transition-transform"
                />
                <Image
                  src="/images/art-hot-damn.png"
                  alt="Hot damn doodle"
                  width={90}
                  height={110}
                  className="w-20 h-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
              <div className="font-display text-base text-black mb-1">
                Code + Creative Craft
              </div>
              <p className="text-xs text-[#7f7f7f]">
                Algorithmic problem solving with authentic open-source shipping.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Stats Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACADEMIC_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#7f7f7f] block mb-2">
                  // METRIC_0{idx + 1}
                </span>
                <div className="font-display text-3xl sm:text-4xl text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-bold text-black mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-[#7f7f7f] pt-4 border-t border-black/10 mt-4 font-light">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Academic Milestones */}
        <div className="bg-white border-2 border-black rounded-[8px] p-8 sm:p-10 shadow-[5px_5px_0px_0px_#000000]">
          <div className="mb-8">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-2 shadow-[2px_2px_0px_0px_#000000]">
              WORK &amp; OPEN SOURCE MILESTONES
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-black">
              Engineering Milestones.
            </h3>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-[8px] bg-[#fafafa] border-2 border-black flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="font-display text-lg sm:text-xl text-black bg-white px-3 py-1.5 rounded-[6px] border-2 border-black shrink-0">
                  {exp.year}
                </div>
                <div>
                  <div className="font-display text-lg text-black mb-0.5">
                    {exp.role}
                  </div>
                  <div className="text-xs font-bold text-[#7f7f7f] uppercase tracking-wider mb-2">
                    {exp.company}
                  </div>
                  <p className="text-xs sm:text-sm text-[#424242] font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
