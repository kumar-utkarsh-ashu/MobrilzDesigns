"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Code, Rocket, CheckCircle } from "lucide-react";

interface MilestonePhase {
  num: string;
  name: string;
  title: string;
  timeline: string;
  highlights: string[];
}

const phases: MilestonePhase[] = [
  {
    num: "01",
    name: "Architectural Discovery",
    title: "System Specs & Security Scoping",
    timeline: "Sprint 1 (Weeks 1-2)",
    highlights: ["API Schemas & ERD Mapping", "SOC2 & Threat Modeling", "Multi-Tenant Partition Plan"],
  },
  {
    num: "02",
    name: "Motion Design & UI/UX",
    title: "Figma Tokens & Design System",
    timeline: "Sprint 2 (Weeks 3-4)",
    highlights: ["Interactive Kinetic Prototypes", "WCAG 2.2 AA Compliance", "Dark/Light Design Tokens"],
  },
  {
    num: "03",
    name: "Velocity Engineering",
    title: "Continuous CI/CD Delivery",
    timeline: "Sprints 3-5 (Weeks 5-10)",
    highlights: ["Playwright E2E Automation", "Bi-Weekly Staging Sandboxes", ">90% Test Coverage"],
  },
  {
    num: "04",
    name: "Production Cutover",
    title: "Zero-Downtime DNS Cutover & IP Handover",
    timeline: "Sprint 6 (Weeks 11-12)",
    highlights: ["Blue/Green Load Balancing", "APM Telemetry Setup", "100% Code & Asset Handover"],
  },
];

export function ProcessDesignD() {
  return (
    <section id="process" className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fluid Wave Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Fluid Wave Sprint Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Continuous milestone execution with zero friction and guaranteed deliverable sign-offs.
          </p>
        </div>

        {/* Fluid Wave Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((ph, idx) => (
            <div
              key={ph.num}
              className="relative p-6 rounded-3xl bg-[#09143f]/50 hover:bg-[#09143f]/80 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-lg space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {ph.num}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                    {ph.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white pt-1">
                  {ph.title}
                </h3>

                <p className="text-xs text-slate-400 font-light font-mono">
                  {ph.name}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                {ph.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

