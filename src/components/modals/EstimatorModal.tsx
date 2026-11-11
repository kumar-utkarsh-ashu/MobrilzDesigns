"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Send } from "lucide-react";

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimatorModal({ isOpen, onClose }: EstimatorModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState("Web Development");
  const [timeline, setTimeline] = useState("2 - 3 Months");
  const [budget, setBudget] = useState("$10k - $25k");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // simulate complete
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-[28px] bg-[#09143f] border border-blue-500/30 p-6 sm:p-8 text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Project Brief Received!</h3>
            <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
              Thank you, {formData.name || "partner"}. A Mobrilz principal architect will review your {service} project requirements and email your architectural roadmap within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#3779cb] hover:bg-[#275599] text-white text-sm font-medium transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-mobrilz-blue" />
                <span>Sprint Estimator & Scope</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Start a <span className="font-semibold text-[#9abbe3]">Project</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Select your parameters below to get instant architectural alignment.
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                  Step 1: Choose Core Engineering Focus
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "Cloud Solutions",
                    "Custom Software & MCP"
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all ${
                        service === s
                          ? "bg-[#3779cb]/30 border-blue-400 text-white shadow-inner"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3779cb] text-white text-xs sm:text-sm font-medium hover:bg-[#275599] transition-colors"
                  >
                    <span>Next: Timeline & Budget</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Target Sprint Cadence
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["1 Month", "2 - 3 Months", "Ongoing Pod"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-all ${
                          timeline === t
                            ? "bg-[#3779cb]/30 border-blue-400 text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Budget Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$5k - $10k", "$10k - $25k", "$25k+"].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-all ${
                          budget === b
                            ? "bg-[#3779cb]/30 border-blue-400 text-white"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3779cb] text-white text-xs sm:text-sm font-medium hover:bg-[#275599] transition-colors"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Christopher Menchaca"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Project Details (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you are looking to build..."
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 resize-none"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#3779cb] hover:bg-[#275599] text-white text-sm font-semibold transition-all shadow-md"
                  >
                    <span>Submit Project Scope</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
