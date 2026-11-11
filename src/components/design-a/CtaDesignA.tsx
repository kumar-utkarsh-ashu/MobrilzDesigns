"use client";

import React, { useState } from "react";
import { ArrowUpRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";

export function CtaDesignA() {
  const [platform, setPlatform] = useState("Mobile App (iOS & Android)");
  const [timeline, setTimeline] = useState("8 - 12 Weeks");
  const [budget, setBudget] = useState("$10k - $25k");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="w-full bg-white border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#09143f] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px"
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wider uppercase">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Sprint Estimator</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Ready to build something extraordinary?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                Configure your project scope below or schedule a 30-minute architecture alignment with our lead engineers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict mutual NDA signed prior to code review</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent fixed-price milestone or staff augmentation options</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% intellectual property assignment guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Interactive Scope Estimator */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl border border-slate-100">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Architecture Scoping Received!</h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Our engineering lead will review your configuration ({platform}, {timeline}) and email you an architectural teardown within 4 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Reconfigure Options
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        1. Target Platform & Architecture
                      </label>
                      <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option>Mobile App (iOS & Android)</option>
                        <option>Enterprise SaaS Web Platform</option>
                        <option>AI Agent & Enterprise RAG Pipeline</option>
                        <option>Full-Stack Mobile + Cloud Backend</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                          2. Target Sprint
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option>4 - 6 Weeks (MVP Sprint)</option>
                          <option>8 - 12 Weeks (Full Build)</option>
                          <option>12 - 16 Weeks (Enterprise)</option>
                          <option>Dedicated Monthly Team</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                          3. Estimated Budget
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option>$5k - $10k (Prototype)</option>
                          <option>$10k - $25k (Standard)</option>
                          <option>$25k - $50k (Advanced)</option>
                          <option>$50k+ (Enterprise Multi-Tenant)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        4. Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-[#09143f] hover:bg-[#1a2b6d] text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Request Architecture Teardown</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                      <span>Zero spam. Direct response from senior engineering lead.</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

