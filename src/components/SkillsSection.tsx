'use client';

import {
  Sparkles,
  Terminal,
  Server,
  Layers,
  Bot,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { CS_SKILLS } from '@/lib/data';

export default function SkillsSection() {
  const icons = [Terminal, Server, Layers, Bot];

  const toolsMatrix = [
    {
      category: 'Languages & Core',
      items: ['Python (FastAPI, NumPy)', 'Go (Goroutines, gRPC)', 'C / C++ (Pointers, Memory)', 'TypeScript / ESNext', 'Java (OOP)', 'SQL (PostgreSQL)']
    },
    {
      category: 'Systems & Backend',
      items: ['Distributed Raft Consensus', 'In-Memory Redis Caching', 'Apache Kafka Streams', 'WebSockets & CRDTs', 'Docker & Docker Compose', 'Linux Kernel Basics']
    },
    {
      category: 'Databases & Cloud',
      items: ['PostgreSQL & TimescaleDB', 'Prisma ORM & Supabase', 'MongoDB NoSQL', 'AWS EC2 & S3 Basics', 'Git & GitHub Actions', 'REST & GraphQL APIs']
    },
    {
      category: 'Frontend & Applied AI',
      items: ['Next.js 14/15 App Router', 'React & Tailwind CSS', 'Framer Motion Physics', 'Three.js / HTML5 Canvas', 'LangChain & ChromaDB RAG', 'OpenAI & LLM APIs']
    }
  ];

  const devWorkflow = [
    {
      step: '01',
      title: 'Algorithmic Complexity & Schema Design',
      desc: 'Formulate Big-O time/space constraints, edge-case bounds, and relational database schema normalization before touching code.'
    },
    {
      step: '02',
      title: 'Modular Architecture & Strict Types',
      desc: 'Enforce strict type systems (TypeScript/Go/C++), clear module seams, and separation of concerns across service boundaries.'
    },
    {
      step: '03',
      title: 'Concurrency & Network Profiling',
      desc: 'Verify race-free concurrency, profile memory allocation with pprof/valgrind, and minimize network packet serialization overhead.'
    },
    {
      step: '04',
      title: 'Automated CI/CD & Test Verification',
      desc: 'Write unit tests, regression suites, and integration tests running automatically on GitHub Actions with reproducible Docker containers.'
    }
  ];

  return (
    <section id="skills" className="w-full py-24 bg-white border-b border-black/10 scroll-mt-20">
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-[#f5f5f5] text-black text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // Technical Skills &amp; Stack</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6 max-w-4xl">
            Core Computer Science &amp; Technical Arsenal.
          </h2>

          <p className="text-base sm:text-lg text-[#424242] font-light leading-relaxed max-w-3xl">
            From low-level systems programming and distributed consensus in Go to production-grade Next.js full-stack development and applied AI engineering.
          </p>
        </div>

        {/* 4 Core Specializations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CS_SKILLS.map((d, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={d.title}
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
                      Core Competencies:
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
                    TOOLS &amp; TECHNOLOGIES:
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

        {/* Tools Matrix */}
        <div className="bg-[#fafafa] border-2 border-black rounded-[8px] p-8 sm:p-10 shadow-[5px_5px_0px_0px_#000000] mb-16">
          <div className="mb-8">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-white mb-2 shadow-[2px_2px_0px_0px_#000000]">
              STACK BREAKDOWN
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-black">
              Full Technical Inventory.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsMatrix.map((matrix) => (
              <div
                key={matrix.category}
                className="bg-white border-2 border-black rounded-[8px] p-5 shadow-[3px_3px_0px_0px_#000000]"
              >
                <div className="font-display text-base text-black mb-3 pb-2 border-b-2 border-black/10">
                  {matrix.category}
                </div>
                <div className="space-y-1.5">
                  {matrix.items.map((item) => (
                    <div
                      key={item}
                      className="p-1.5 bg-[#f9f9f9] border border-black/10 rounded-[6px] text-xs font-medium text-black flex items-center justify-between"
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

        {/* Engineering Workflow */}
        <div className="bg-white border-2 border-black rounded-[8px] p-8 sm:p-10 shadow-[5px_5px_0px_0px_#000000]">
          <div className="mb-8">
            <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-2 shadow-[2px_2px_0px_0px_#000000]">
              ENGINEERING APPROACH
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-black">
              How I Solve Problems &amp; Ship Code.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-[8px] bg-[#fafafa] border-2 border-black flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-3xl text-black mb-2">
                    {step.step}
                  </div>
                  <h4 className="font-display text-base text-black mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#424242] leading-relaxed font-light">
                    {step.desc}
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
