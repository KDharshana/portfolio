'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: string;
}

export default function ApplicationModal({ isOpen, onClose, preselectedTier }: ApplicationModalProps) {
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#000000', '#424242', '#7f7f7f', '#bcbcbc']
      });
    }, 700);
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
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-white border-2 border-black rounded-[8px] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000000] z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border-2 border-black rounded-[8px] bg-white hover:bg-[#f5f5f5] text-black shadow-[2px_2px_0px_0px_#000000]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-8">
              <div className="aa-badge text-xs font-bold uppercase mb-3 bg-[#f5f5f5]">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Partner Application Questionnaire
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-black">
                Apply for an Engagement.
              </h3>
              <p className="text-[#424242] text-xs sm:text-sm font-light mt-1">
                We accept strictly 2 to 3 partnerships per quarter to protect senior execution quality.
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
                    placeholder="Colin Kersley"
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
                    placeholder="colin@company.com"
                    className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>
              </div>

              {/* Company & URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase mb-1.5">
                    Company / Venture *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Alternative Aesthetics"
                    className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-black uppercase mb-1.5">
                    Website / Deck URL
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://alternativeaesthetics.co.uk"
                    className="w-full px-4 py-3 rounded-[8px] border-2 border-black focus:bg-[#fafafa] text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>
              </div>

              {/* Primary Scope */}
              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1.5">
                  Primary Scope of Engagement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {scopeOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, scope: opt })}
                      className={`text-left px-3.5 py-2.5 rounded-[8px] text-xs font-bold transition-all border-2 border-black ${
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

              {/* Budget Qualification */}
              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1.5">
                  Allocated Capital / Budget Tier *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, budget: opt })}
                      className={`text-left px-3.5 py-2.5 rounded-[8px] text-xs font-bold font-mono transition-all border-2 border-black ${
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
                      className={`px-3 py-1.5 rounded-[8px] text-xs font-bold border-2 border-black ${
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

              {/* Summary */}
              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1.5">
                  Brief Executive Summary (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Key goals, deliverables, or bottlenecks..."
                  className="w-full px-4 py-3 rounded-[8px] border-2 border-black text-black text-sm font-medium focus:outline-none shadow-[2px_2px_0px_0px_#000000] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#7f7f7f] font-mono">
                  <Shield className="w-4 h-4 text-black" />
                  <span>Mutual NDA executed prior to discovery</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="aa-button-primary w-full sm:w-auto px-8 py-3.5 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
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
          /* Confirmation */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-[8px] bg-black text-white border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_#424242]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="aa-badge text-xs font-bold uppercase mb-3 bg-[#f5f5f5]">
              Application Transmitted
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-black mb-4">
              Thank you, {formData.name}.
            </h3>

            <p className="text-[#424242] text-sm max-w-md mx-auto leading-relaxed mb-8">
              Our Studio Principals review applications within 24 hours. Because your budget aligns with our{' '}
              <span className="font-bold text-black">{formData.budget}</span> qualification criteria, we will reach out directly to schedule a private executive briefing.
            </p>

            <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black max-w-sm mx-auto text-left mb-8 font-mono text-xs text-[#424242] space-y-1.5 shadow-[2px_2px_0px_0px_#000000]">
              <div>Partner: <span className="text-black font-bold">{formData.company}</span></div>
              <div>Timeline: <span className="text-black font-bold">{formData.timeline}</span></div>
              <div>Primary Scope: <span className="text-black font-bold">{formData.scope}</span></div>
            </div>

            <button
              onClick={onClose}
              className="aa-button-secondary px-8 py-3 text-xs uppercase font-bold tracking-wider"
            >
              Return to Portfolio
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
