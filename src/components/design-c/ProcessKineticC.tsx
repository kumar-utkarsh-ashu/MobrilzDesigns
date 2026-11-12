"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Compass, FileCode, Cpu, Rocket, CheckCircle2, Shield } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface StepItem {
  num: string;
  phase: string;
  title: string;
  duration: string;
  desc: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    num: "01",
    phase: "Architecture & Discovery",
    title: "System Topology & Architectural Sign-Off",
    duration: "Week 1 - 2",
    desc: "We analyze high-load user journeys, multi-tenant database constraints, and API schemas. Every contract is mapped before code is written.",
    deliverables: ["Topology Architecture Blueprint", "Database Schema & pgvector Spec", "Risk & Security Threat Model"],
    icon: <Compass className="w-5 h-5 text-cyan-400" />,
  },
  {
    num: "02",
    phase: "Figma Tokens & Design System",
    title: "High-Fidelity Prototyping & Motion Tokens",
    duration: "Week 3 - 4",
    desc: "Complete design system with accessibility contracts, responsive mobile/desktop break-points, and interactive motion presets.",
    deliverables: ["Figma Component Design Tokens", "Interactive Kinetic Prototype", "WCAG 2.2 AA Contrast Audit"],
    icon: <FileCode className="w-5 h-5 text-sky-400" />,
  },
  {
    num: "03",
    phase: "Sprint Velocity & CI/CD",
    title: "Bi-Weekly Sprints & Continuous Test Coverage",
    duration: "Week 5 - 10",
    desc: "Agile 2-week delivery cycles with branch preview environments, unit test coverage (>90%), and continuous regression validation.",
    deliverables: ["Dockerized Microservices", "Automated Playwright E2E Suite", "Live Client Staging Sandbox"],
    icon: <Cpu className="w-5 h-5 text-[#3779cb]" />,
  },
  {
    num: "04",
    phase: "Zero-Downtime Cutover",
    title: "Production Cutover & 100% IP Handover",
    duration: "Week 11 - 12",
    desc: "Blue/green deployment cutover with zero downtime, APM monitoring setup, full source code transfer, and team training.",
    deliverables: ["Zero-Downtime DNS Cutover", "Datadog / Prometheus APM Dashboards", "100% Source Code & IP Handover"],
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
];

export function ProcessKineticC() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 120,
    damping: 25,
  });

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full py-32 bg-[#09143f]/95 col-lines overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Animated Delivery Highway
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Guaranteed milestone contracts, bi-weekly verifiable staging, and zero operational surprises.
          </p>
        </div>

        {/* Timeline Highway Track */}
        <div className="relative">
          {/* Background Rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          {/* Animated Laser Fill Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-400 to-[#3779cb] md:-translate-x-1/2 shadow-[0_0_15px_rgba(100,181,246,0.9)] origin-top z-10"
          />

          {/* Step Cards */}
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Highway Milestone Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#060d28] border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(100,181,246,0.6)]">
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-8 rounded-3xl bg-[#060d28]/85 border border-white/15 hover:border-cyan-400/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(55,121,203,0.25)] space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          Phase {step.num} • {step.phase}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="text-slate-300 text-sm font-light leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="pt-3 border-t border-white/10 space-y-2">
                        {step.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

