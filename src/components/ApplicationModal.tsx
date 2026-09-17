'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: string;
}

export default function ApplicationModal({ isOpen, onClose, preselectedTier }: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: preselectedTier || '$65,000 – $110,000 (Flagship Build)',
    timeline: 'Within 30 Days',
    scope: 'Autonomous AI Agents & Systems',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
        colors: ['#d0ab86', '#ffffff', '#e2c5a8']
      });
    }, 900);
  };

  const budgetOptions = [
    '$35,000 – $50,000 (0-to-1 Sprint)',
    '$65,000 – $110,000 (Flagship Build)',
    '$25,000 / month (Executive Advisory)',
    '$110,000+ (Custom Enterprise Systems)'
  ];

  const scopeOptions = [
    'Autonomous AI Agents & Systems',
    'Venture-Scale Web Platform (Next.js)',
    'High-End Design System & Flagship',
    '0-to-1 Venture Prototype'
  ];

  const timelineOptions = [
    'Immediate (Next 7–14 Days)',
    'Within 30 Days',
    'Next Quarter (Q1 2026)',
    'Flexible / Exploring'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-[#0e1017] border border-white/[0.12] rounded-3xl p-7 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
      >
        {/* Glow corner */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d0ab86]/[0.08] rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d0ab86]/10 border border-[#d0ab86]/20 text-[#d0ab86] text-[11px] font-mono uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Partner Intake Questionnaire</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Apply for an Engagement.
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                We accept 2 to 3 partnerships per quarter to protect senior execution quality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d0ab86] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d0ab86] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company & URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                    Company / Venture *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Aura Intelligence"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d0ab86] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                    Website / Pitch Deck URL
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d0ab86] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Primary Scope */}
              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                  Primary Scope of Engagement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {scopeOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, scope: opt })}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        formData.scope === opt
                          ? 'bg-[#d0ab86]/15 border border-[#d0ab86] text-[#d0ab86]'
                          : 'bg-white/[0.02] border border-white/[0.06] text-white/60 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Qualification */}
              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                  Allocated Capital / Budget Tier *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, budget: opt })}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all ${
                        formData.budget === opt
                          ? 'bg-[#d0ab86] text-black font-semibold'
                          : 'bg-white/[0.02] border border-white/[0.06] text-white/70 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                  Target Kickoff Timeline
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, timeline: opt })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        formData.timeline === opt
                          ? 'bg-white text-black font-semibold'
                          : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief context */}
              <div>
                <label className="block text-[11px] font-mono text-white/60 uppercase mb-1.5">
                  Brief Executive Summary (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Key deliverables, timeline bottlenecks, or specific technologies required..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#d0ab86] text-white text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Reassurance & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-white/40 font-mono">
                  <Shield className="w-3.5 h-3.5 text-[#d0ab86]" />
                  <span>NDA signed prior to discovery sync</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#d0ab86] hover:bg-[#e2c5a8] text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#d0ab86]/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Evaluating Parameters...</span>
                  ) : (
                    <>
                      <span>Transmit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation state */
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#d0ab86]/15 border border-[#d0ab86]/30 flex items-center justify-center mx-auto mb-6 text-[#d0ab86]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="font-mono text-xs text-[#d0ab86] tracking-widest uppercase mb-2">
              Application Transmitted
            </div>

            <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">
              Thank you, {formData.name}.
            </h3>

            <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed mb-8">
              Our Studio Principals review applications within 24 hours. Because your budget aligns with our{' '}
              <span className="text-[#d0ab86] font-mono">{formData.budget}</span> qualification criteria, we will reach out directly to schedule a private executive briefing.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-sm mx-auto text-left mb-8 font-mono text-xs text-white/60 space-y-1">
              <div>Partner: <span className="text-white">{formData.company}</span></div>
              <div>Timeline: <span className="text-white">{formData.timeline}</span></div>
              <div>Primary Scope: <span className="text-white">{formData.scope}</span></div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Return to Portfolio
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
