"use client";

import React, { useRef, useEffect } from "react";
import { Compass, FileCode, Cpu, Rocket, CheckCircle2, Shield } from "lucide-react";
import { gsap } from "@/lib/motion/gsap";

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

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    // Use IntersectionObserver for fail-safe viewport trigger (Lenis compatible)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".gsap-process-card",
              { y: 24, scale: 0.96 },
              {
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "back.out(1.2)",
                clearProps: "all",
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative z-20 w-full py-28 bg-[#09143f]/95 col-lines overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Shield className="w-3.5 h-3.5" />
            <span>Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Animated Delivery Highway
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Guaranteed milestone contracts, bi-weekly verifiable staging, and zero operational surprises.
          </p>
        </div>

        {/* Timeline Highway Track */}
        <div className="relative">
          {/* Background Rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          {/* Glowing Laser Highway Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-400 to-[#3779cb] md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Highway Marker Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#060d28] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.7)] flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-cyan-300">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Milestone Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="gsap-process-card p-6 sm:p-7 rounded-3xl bg-[#060d28]/85 border border-white/15 hover:border-cyan-400/60 backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {step.phase}
                        </span>
                        <span className="text-xs font-mono text-slate-300">
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
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                          Verified Deliverables:
                        </span>
                        <div className="space-y-1.5">
                          {step.deliverables.map((d, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-2 text-xs text-slate-200"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
