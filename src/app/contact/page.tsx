'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  MapPin,
  Mail,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '£25,000 – £45,000 (Full Scale Mural)',
    timeline: 'Within 30 Days',
    scope: 'Commercial Murals & Experiential',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '£15,000 – £25,000 (Key Visual / Mascot)',
    '£25,000 – £45,000 (Full Scale Mural)',
    '£45,000 – £85,000 (Global Campaign & Universe)',
    '£85,000+ (Comprehensive Brand Retainer)'
  ];

  const scopeOptions = [
    'Commercial Murals & Experiential',
    'Brand Mascots & Character Systems',
    'Packaging & Limited Editions',
    'Creative Engineering & Digital Flagship'
  ];

  const timelineOptions = [
    'Immediate (Next 7–14 Days)',
    'Within 30 Days',
    'Next Quarter (Q4 / Q1)',
    'Flexible / Exploring'
  ];

  const faqs = [
    {
      q: 'Do you travel internationally for murals?',
      a: 'Yes. I travel across the UK, Europe, and globally for on-site architectural masonry murals, retail flagship takeovers, and festival installations.'
    },
    {
      q: 'Are full copyright and buyout rights included?',
      a: 'Yes, 100%. All commissions include complete commercial buyout agreements. You own all master vectors, CMYK print assets, and production code outright.'
    },
    {
      q: 'What is typical turnaround time?',
      a: 'Visual sprints and mascot systems take 2–3 weeks. Large-format on-site murals take 3–5 weeks. Comprehensive brand universes & web flagships take 6–8 weeks.'
    },
    {
      q: 'Can you write the frontend code for web projects?',
      a: 'Yes. I develop production-ready Next.js 14/15, Tailwind CSS, and Framer Motion codebases, delivered directly to your GitHub repository.'
    }
  ];

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
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />

      {/* Header Section */}
      <section className="w-full pt-16 pb-16 px-4 sm:px-6 max-w-[1224px] mx-auto border-b border-black/10">
        <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-[#f5f5f5] text-black text-xs font-bold uppercase tracking-wider mb-6 shadow-[2px_2px_0px_0px_#000000]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>04 // Commission Inquiries &amp; Booking</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-black leading-[1.1] mb-6 max-w-4xl">
          Let&apos;s Create Something Bold Together.
        </h1>

        <p className="text-lg sm:text-xl text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
          Direct senior execution with zero middlemen. Dharshana accepts strictly 2 to 3 major commissions per quarter to ensure dedicated, world-class craft.
        </p>
      </section>

      {/* 2-Column Bento Layout */}
      <section className="w-full py-16 bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info & FAQs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Studio Status Card */}
              <div className="bg-white border-2 border-black rounded-[8px] p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000000]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-black">
                    Booking Q4 / Q1 Commissions
                  </span>
                </div>
                <h3 className="font-display text-2xl text-black mb-3">
                  Direct Studio Contact
                </h3>
                <p className="text-xs sm:text-sm text-[#424242] leading-relaxed font-light mb-6">
                  Every message is read and responded to personally by Dharshana within 24 business hours.
                </p>

                <div className="space-y-3 pt-4 border-t-2 border-black/10 text-xs">
                  <div className="flex items-center gap-3 text-black">
                    <MapPin className="w-4 h-4 text-black shrink-0" />
                    <span>Cardiff Bay, Wales, UK (Working Worldwide)</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <span className="font-mono font-bold">hello@dharshana.art</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <Clock className="w-4 h-4 text-black shrink-0" />
                    <span>Response Time: Under 24 Hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                    <span>Mutual Non-Disclosure Agreement (NDA) Standard</span>
                  </div>
                </div>
              </div>

              {/* Social Doodles Card */}
              <div className="bg-white border-2 border-black rounded-[8px] p-6 shadow-[4px_4px_0px_0px_#000000] text-center">
                <div className="w-[220px] max-w-full h-auto mx-auto mb-3">
                  <Image
                    src="/images/social-doodles.png"
                    alt="Social doodles"
                    width={220}
                    height={54}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
                <div className="text-xs font-mono text-[#7f7f7f]">
                  Instagram • LinkedIn • Cara • GitHub
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white border-2 border-black rounded-[8px] p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000000]">
                <div className="inline-block border-2 border-black rounded-[8px] px-2.5 py-0.5 text-[11px] font-bold bg-[#f5f5f5] mb-4">
                  FREQUENTLY ASKED QUESTIONS
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

            {/* Right Column: Commission Briefing Form */}
            <div className="lg:col-span-7 bg-white border-2 border-black rounded-[8px] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000000]">
              {!isSubmitted ? (
                <div>
                  <div className="mb-8">
                    <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold uppercase mb-3 bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]">
                      PROJECT BRIEFING FORM
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl text-black">
                      Tell Me About Your Project.
                    </h2>
                    <p className="text-[#424242] text-xs sm:text-sm font-light mt-1">
                      Fill out the fields below and I will get back to you with timeline feasibility and scoping details.
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
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black uppercase mb-1.5">
                          Work Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                        />
                      </div>
                    </div>

                    {/* Company & URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-black uppercase mb-1.5">
                          Company / Brand *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Records or Studio"
                          className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black uppercase mb-1.5">
                          Website / Reference URL
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://yourbrand.com"
                          className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                        />
                      </div>
                    </div>

                    {/* Primary Scope */}
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Primary Scope of Commission
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {scopeOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, scope: opt })}
                            className={`text-left px-3.5 py-2.5 rounded-[8px] text-xs font-bold transition-all border-2 border-black cursor-pointer ${
                              formData.scope === opt
                                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#424242]'
                                : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Tier */}
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Allocated Budget Tier *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, budget: opt })}
                            className={`text-left px-3.5 py-2.5 rounded-[8px] text-xs font-bold font-mono transition-all border-2 border-black cursor-pointer ${
                              formData.budget === opt
                                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#424242]'
                                : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Target Kickoff Timeline
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timelineOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, timeline: opt })}
                            className={`px-3 py-1.5 rounded-[8px] text-xs font-bold border-2 border-black cursor-pointer ${
                              formData.timeline === opt
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-[#f5f5f5]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Notes */}
                    <div>
                      <label className="block text-xs font-bold text-black uppercase mb-1.5">
                        Project Notes &amp; Creative Vision (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell Dharshana about your wall dimensions, brand character, launch timeline, or specific creative objectives..."
                        className="w-full px-4 py-3 rounded-[8px] border-2 border-black text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-[#7f7f7f] font-mono">
                        <Shield className="w-4 h-4 text-black" />
                        <span>Mutual NDA executed upon discovery</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 bg-black text-white rounded-[8px] border-2 border-black hover:bg-[#424242] shadow-[3px_3px_0px_0px_#424242] transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Inquiry...</span>
                        ) : (
                          <>
                            <span>Transmit Commission Inquiry</span>
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
                    Inquiry Transmitted
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-black mb-4">
                    Thank you, {formData.name}!
                  </h3>

                  <p className="text-[#424242] text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Dharshana reviews commission requests within 24 hours. Because your project aligns with the{' '}
                    <span className="font-bold text-black">{formData.budget}</span> tier, Dharshana will reach out directly to schedule a private briefing.
                  </p>

                  <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black max-w-sm mx-auto text-left mb-8 font-mono text-xs text-[#424242] space-y-1.5 shadow-[2px_2px_0px_0px_#000000]">
                    <div>Brand: <span className="text-black font-bold">{formData.company}</span></div>
                    <div>Timeline: <span className="text-black font-bold">{formData.timeline}</span></div>
                    <div>Scope: <span className="text-black font-bold">{formData.scope}</span></div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-[8px] bg-white text-black font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
                    >
                      Send Another Note
                    </button>
                    <Link
                      href="/project"
                      className="px-6 py-2.5 rounded-[8px] bg-black text-white font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-[#424242] shadow-[2px_2px_0px_0px_#424242] cursor-pointer"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
