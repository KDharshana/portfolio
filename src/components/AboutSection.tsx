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
      year: '2025',
      role: 'Software Engineering Intern — Cloud Infrastructure',
      company: 'CloudScale Infrastructure',
      desc: 'Built an automated observability pipeline using Go and Prometheus. Optimized end-to-end integration test runners, cutting CI test runtime by 38% across microservices.'
    },
    {
      year: '2024 - 2025',
      role: 'Undergraduate Teaching Assistant — Data Structures & Algorithms',
      company: 'Cardiff University School of CS',
      desc: 'Lead weekly lab sessions for 120+ undergraduate students covering asymptotic Big-O analysis, binary trees, graph traversals (Dijkstra/A*), and dynamic programming.'
    },
    {
      year: '2024',
      role: 'Lead Tech Organizer — Cardiff Hackathon',
      company: 'Cardiff Computing Society',
      desc: 'Engineered real-time judge scoring dashboard and managed cloud API infrastructure for 400+ hackers, handling 1,200+ team project submissions seamlessly.'
    },
    {
      year: '2023 - 2024',
      role: 'Open Source Systems Contributor & Lab Apprentice',
      company: 'Distributed Systems Research Lab',
      desc: 'Researched gossip protocol convergence and contributed documentation and fuzz-testing harnesses to distributed Go repositories.'
    }
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#fafafa] border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // Academic &amp; Engineering Profile</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6 max-w-4xl">
            3rd Year Computer Science Student &amp; Systems Engineer.
          </h2>

          <p className="text-base sm:text-lg text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
            Undergraduate at Cardiff University School of Computer Science &amp; Informatics. Fusing low-level systems programming, concurrent algorithms, and distributed computing with modern full-stack web engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold border-2 border-black rounded-[8px] px-3.5 py-2 bg-white shadow-[2px_2px_0px_0px_#000000]">
              <GraduationCap className="w-4 h-4 text-black" />
              <span>Cardiff University — B.S. in Computer Science (Year 3)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold border-2 border-black rounded-[8px] px-3.5 py-2 bg-black text-white shadow-[2px_2px_0px_0px_#424242]">
              <Award className="w-4 h-4 text-white" />
              <span>First Class Honours Track • 3.92 / 4.0 GPA</span>
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
              Rigorous fundamentals meet creative execution.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#424242] leading-relaxed font-light">
              <p>
                I am a 3rd year Computer Science student who genuinely loves the mechanics of how software works under the hood. Whether building a consensus-driven distributed key-value store in Go implementing the Raft algorithm, or profiling memory allocators in C, I gravitate toward solving challenging engineering bottlenecks.
              </p>
              <p>
                At the same time, I refuse the stereotype that backend engineers can&apos;t build intuitive interfaces. I build reactive, accessible, highly responsive web flagships in Next.js 14, TypeScript, and Framer Motion. This dual perspective lets me build full-stack systems where the database architecture, network protocols, and frontend animations work together harmoniously.
              </p>
              <p>
                I actively mentor junior students as an undergraduate TA for Data Structures &amp; Algorithms, conduct research in distributed systems, and compete in hackathons. I am currently seeking software engineering internship opportunities for Summer 2025 / 2026.
              </p>
            </div>

            {/* Core Engineering Values */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-[8px] bg-[#f9f9f9] border-2 border-black">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-black" />
                  <span>01 // Asymptotic Rigor</span>
                </div>
                <p className="text-xs text-[#424242]">
                  Profile-guided optimization, proper algorithmic complexity selection, and understanding memory layout on the CPU.
                </p>
              </div>
              <div className="p-4 rounded-[8px] bg-[#f9f9f9] border-2 border-black">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-black" />
                  <span>02 // Zero Technical Debt</span>
                </div>
                <p className="text-xs text-[#424242]">
                  Strict TypeScript types, automated CI/CD pipelines, reproducible Docker builds, and exhaustive unit and fuzz testing.
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
                B.S. in Computer Science
              </div>
              <p className="text-xs text-[#7f7f7f] mb-4">
                Cardiff University • Expected Grad: June 2026
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
                Algorithmic problem solving with personality.
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
                <div className="font-display text-4xl sm:text-5xl text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-base font-bold text-black mb-1">
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
              WORK EXPERIENCE &amp; ROLES
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-black">
              Engineering Experience.
            </h3>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-[8px] bg-[#fafafa] border-2 border-black flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="font-display text-xl text-black bg-white px-3 py-1.5 rounded-[6px] border-2 border-black shrink-0">
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
