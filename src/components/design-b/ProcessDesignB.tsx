"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, GitBranch, Terminal, Shield, CheckCircle2, ArrowRight } from "lucide-react";

interface MilestoneNode {
  step: string;
  name: string;
  code: string;
  desc: string;
  deliverable: string;
}

const MILESTONES: MilestoneNode[] = [
  {
    step: "01",
    name: "Architectural Mapping",
    code: "INIT_TOPOLOGY",
    desc: "Domain modeling, API contract contracts, and multi-tenant database design.",
    deliverable: "Schema & Architecture Contract"
  },
  {
    step: "02",
    name: "Interactive Prototyping",
    code: "TOKEN_SYSTEM",
    desc: "High-fidelity Figma prototypes synced directly with Tailwind CSS & shadcn/ui tokens.",
    deliverable: "Clickable Prototype & Storybook"
  },
  {
    step: "03",
    name: "Sprint Engineering",
    code: "CI_CD_PIPELINE",
    desc: "Bi-weekly sprint demos, automated unit test suites, and continuous staging deployments.",
    deliverable: "Production Code & Automated Tests"
  },
  {
    step: "04",
    name: "Cutover & IP Transfer",
    code: "PROD_CUTOVER",
    desc: "Zero-downtime blue-green deployment, cloud monitoring, and complete git repository handover.",
    deliverable: "100% IP Handover & Production SLA"
  }
];

export function ProcessDesignB() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="w-full bg-[#030712] border-b border-white/10 py-24 relative overflow-hidden">
      {/* Laser Highway Background Glow */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-sm pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kinetic Sprint Highway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Execution Pipeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Milestone checkpoints connected by continuous verification and automated testing.
          </p>
        </div>

        {/* Laser Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {MILESTONES.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-gradient-to-b from-cyan-950/40 to-[#060d28] border-cyan-500/50 shadow-[0_10px_35px_rgba(6,182,212,0.2)]"
                    : "bg-gradient-to-b from-white/[0.05] to-transparent border-white/10 hover:border-white/20"
                }`}
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                </div>

                {/* Checkpoint Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

