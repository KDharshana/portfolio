'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  GraduationCap,
  FileText,
  Terminal
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DraggableSticker from '@/components/DraggableSticker';
import SharpieCanvas from '@/components/SharpieCanvas';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      q: 'Where are you located and what are your work preferences?',
      a: 'Based in Salem, Tamil Nadu, India. Fully set up for high-velocity remote engineering across international timezones, and open to hybrid or relocation opportunities.'
    },
    {
      q: 'What dates are you available for internships?',
      a: 'Available full-time (40 hrs/week) during Summer/semester breaks, and 15–20 hrs/week for part-time remote co-ops during the academic year.'
    },
    {
      q: 'What is your primary technical arsenal?',
      a: 'Kotlin and Jetpack Compose for Android (published on F-Droid); Bun 1.3, React 19, and TypeScript for web; Python, Ollama, and Neo4j for local AI/GraphRAG; and Rust for systems harnesses.'
    },
    {
      q: 'Can I inspect your open-source code and apps?',
      a: 'Yes! Check out my GitHub profiles at github.com/KDharshana and github.com/dharshan-X, including Tonarc (F-Droid), E-Waste System, AI Interview Copilot, and Active GraphRAG.'
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

      const columns = [leftColRef.current, rightColRef.current].filter(Boolean);
      if (columns.length > 0) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.16,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#000000', '#424242', '#7f7f7f', '#bcbcbc']
      });
    }, 700);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-24 bg-[#fafafa] border-b border-black/10 scroll-mt-20"
    >
      <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="w-full max-w-[1020px] mx-auto flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider mb-6 shadow-[2px_2px_0px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // Connect &amp; Opportunities</span>
          </div>

          <div className="w-full flex items-center justify-center pointer-events-none select-none mb-6">
            <Image
              src="/images/contact-graffiti-art.png"
              alt="CONNECT - Let's Build Graffiti"
              width={1020}
              height={574}
              className="w-full max-w-[960px] h-auto max-h-[58vh] object-contain pointer-events-none select-none"
              priority
              draggable={false}
            />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-black leading-tight mb-4 max-w-4xl">
            Let&apos;s Build Something Great Together.
          </h2>

          <p className="text-base sm:text-lg text-[#424242] font-light leading-relaxed max-w-3xl">
            I am actively interviewing for Summer 2025/2026 Software Engineering Internships and exploring research collaborations. Reach out directly or submit a message below.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info, Resume & FAQs */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            {/* Student Contact Card */}
            <div className="bg-white border-2 border-black rounded-[8px] p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000000]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-black">
                  Actively Seeking SWE Internships &amp; Roles
                </span>
              </div>
              <h3 className="font-display text-2xl text-black mb-3">
                Dharshana
              </h3>
              <p className="text-xs sm:text-sm text-[#424242] leading-relaxed font-light mb-6">
                3rd Year Computer Science Undergrad based in Salem, Tamil Nadu. Creator of Tonarc on F-Droid, full-stack Bun/React 19 developer, and local GraphRAG AI builder.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-black/10 text-xs">
                <div className="flex items-center gap-3 text-black">
                  <GraduationCap className="w-4 h-4 text-black shrink-0" />
                  <span>B.E. in Computer Science — Class of 2026</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>Salem, Tamil Nadu, India (Remote &amp; Relocation Ready)</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <span className="font-mono font-bold">dharshana.cs@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Clock className="w-4 h-4 text-black shrink-0" />
                  <span>Response Time: Usually Under 6 Hours</span>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="mt-6 pt-4 border-t-2 border-black/10 flex flex-wrap gap-2">
                <a
                  href="mailto:dharshana.cs@gmail.com"
                  className="px-3.5 py-1.5 rounded-[6px] border-2 border-black bg-black text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#424242] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://github.com/KDharshana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-[6px] border-2 border-black bg-[#f5f5f5] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-white transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>github.com/KDharshana</span>
                </a>
              </div>
            </div>

            {/* Social Doodles Card */}
            <div className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] text-center">
              <div className="w-[220px] max-w-full h-auto mx-auto mb-3 flex items-center justify-center">
                <DraggableSticker
                  src="/images/social-doodles.png"
                  alt="Social doodles"
                  width={220}
                  height={54}
                  initialRotate={-1}
                  badgeText="DRAG"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold">
                <a
                  href="https://github.com/KDharshana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline underline-offset-2"
                >
                  KDharshana (GitHub)
                </a>
                <span className="text-[#7f7f7f]">•</span>
                <a
                  href="https://github.com/dharshan-X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline underline-offset-2"
                >
                  dharshan-X (GitHub)
                </a>
                <span className="text-[#7f7f7f]">•</span>
                <a
                  href="https://f-droid.org/packages/com.quietrays.tonarc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline underline-offset-2"
                >
                  Tonarc (F-Droid)
                </a>
              </div>
            </div>

            {/* Recruiter & Team FAQ */}
            <div className="bg-white border-2 border-black rounded-[8px] p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000000]">
              <div className="inline-block border-2 border-black rounded-[8px] px-2.5 py-0.5 text-[11px] font-bold bg-[#f5f5f5] mb-4">
                RECRUITER &amp; TEAM FAQ
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="pb-3 border-b border-black/10 last:border-b-0 last:pb-0">
                    <div className="font-bold text-xs text-black mb-1 flex items-start gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-xs text-[#424242] leading-relaxed font-light pl-5">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Recruiter Form */}
          <div ref={rightColRef} className="lg:col-span-7 space-y-8">
            <div className="bg-white border-2 border-black rounded-[8px] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000000]">
            {!isSubmitted ? (
              <div>
                <div className="mb-8">
                  <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold uppercase mb-3 bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]">
                    MESSAGE / OPPORTUNITY INQUIRY
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-black">
                    Send a Message or Opportunity.
                  </h3>
                  <p className="text-[#424242] text-xs sm:text-sm font-light mt-1">
                    Whether you are a recruiter with an internship opening, a founder building an MVP, or an engineer wanting to connect.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Work / School Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                      />
                    </div>
                  </div>

                  {/* Company / Team & Link */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Company / Team / Lab *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Scale AI, Stripe, Research Lab..."
                        className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="SWE Internship 2025/2026, Open Source, or Collaboration..."
                        className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                      />
                    </div>
                  </div>

                  {/* Your Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-black uppercase mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell Dharshana about your team, tech stack, open roles, or project requirements..."
                      className="w-full px-4 py-3 rounded-[8px] border-2 border-black text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#7f7f7f] font-mono">
                      <Terminal className="w-4 h-4 text-black" />
                      <span>Direct line to Dharshana</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 bg-black text-white rounded-[8px] border-2 border-black hover:bg-[#424242] shadow-[3px_3px_0px_0px_#424242] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation State */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-[8px] bg-black text-white border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_#424242]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold uppercase mb-3 bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]">
                  Message Transmitted
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-black mb-4">
                  Thank you, {formData.name}!
                </h3>

                <p className="text-[#424242] text-sm max-w-md mx-auto leading-relaxed mb-8">
                  Dharshana will review your message and reply to{' '}
                  <span className="font-bold text-black">{formData.email}</span> within 24 hours.
                </p>

                <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black max-w-sm mx-auto text-left mb-8 font-mono text-xs text-[#424242] space-y-1.5 shadow-[2px_2px_0px_0px_#000000]">
                  <div>Organization: <span className="text-black font-bold">{formData.company}</span></div>
                  <div>Subject: <span className="text-black font-bold">{formData.subject || 'Direct Inquiry'}</span></div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-[8px] bg-white text-black font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
            </div>

            {/* Interactive Sharpie Desk Canvas */}
            <SharpieCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
