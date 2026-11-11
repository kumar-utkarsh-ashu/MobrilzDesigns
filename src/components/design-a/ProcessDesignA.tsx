"use client";

import React from "react";
import { GitCommit, ShieldCheck, CheckCircle2, Milestone, ArrowRight } from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  tagline: string;
  duration: string;
  checkpoint: string;
  deliverables: string[];
}

const PROCESS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Architectural Discovery & Technical Spec",
    tagline: "We deconstruct requirements, define multi-tenant database schemas, and map API boundaries.",
    duration: "Week 1 - 2",
    checkpoint: "Formal Architecture Blueprint Sign-off",
    deliverables: [
      "Entity Relationship Diagram (ERD) & database schema",
      "API contract specifications & microservices topology",
      "Risk assessment & third-party dependency review"
    ]
  },
  {
    step: "02",
    title: "Rapid Prototyping & Design System",
    tagline: "Interactive clickable prototypes built with component tokens directly mappable to production code.",
    duration: "Week 2 - 4",
    checkpoint: "Figma Prototype & Design System Approval",
    deliverables: [
      "Full user journey wireframes & clickable high-fi flows",
      "Tokenized design system (Tailwind & shadcn/ui)",
      "User testing validation and usability score benchmark"
    ]
  },
  {
    step: "03",
    title: "Agile Sprint Engineering & Automated CI/CD",
    tagline: "Two-week agile sprints with bi-weekly client demos, automated unit tests, and continuous staging previews.",
    duration: "Week 4 - 10",
    checkpoint: "Automated QA Gate & SonarQube Code Review",
    deliverables: [
      "Modular frontend & backend microservices code",
      "Automated unit & integration test suites (>85% coverage)",
      "Live staging environment with continuous deployment"
    ]
  },
  {
    step: "04",
    title: "Production Cutover & 100% IP Handover",
    tagline: "Zero-downtime blue-green production deployment, cloud monitoring setup, and complete source code transfer.",
    duration: "Week 10 - 12",
    checkpoint: "100% IP & Repository Transfer Certificate",
    deliverables: [
      "Production deployment with automated CDN & SSL setup",
      "Cloud monitoring, logging & alerting thresholds",
      "100% Git repository ownership, documentation & IP sign-off"
    ]
  }
];

export function ProcessDesignA() {
  return (
    <section id="process" className="w-full bg-white border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#09143f] text-xs font-semibold tracking-wider uppercase mb-3">
            <Milestone className="w-3.5 h-3.5 text-blue-600" />
            <span>Predictable Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
            Sprint Delivery Roadmap
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A milestone-driven engineering methodology designed to eliminate scope creep and ensure timely delivery.
          </p>
        </div>

        {/* Continuous Step-Sequencer Roadmap */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 sm:before:left-9 before:w-0.5 before:bg-slate-200 before:hidden sm:before:block">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              
              {/* Step Number Circle */}
              <div className="shrink-0 w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-white border-2 border-blue-600 shadow-md flex flex-col items-center justify-center z-10">
                <span className="text-xs font-mono font-bold text-blue-600">STAGE</span>
                <span className="text-lg font-bold text-[#09143f]">{step.step}</span>
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/80 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {step.tagline}
                </p>

                {/* Milestone Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Checkpoint Gate */}
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 bg-blue-50/80 border border-blue-200/80 rounded-xl px-4 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>GATE CHECKPOINT: {step.checkpoint}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

