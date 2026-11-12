"use client";

import React, { useRef, useEffect } from "react";
import { Sparkles, Layers, Code, Rocket, CheckCircle } from "lucide-react";
import { gsap } from "@/lib/motion/gsap";

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".gsap-d-wave-card",
              { y: 20, scale: 0.95 },
              {
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.08,
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

    observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fluid Wave Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Fluid Wave Sprint Process
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Continuous milestone execution with zero friction and guaranteed deliverable sign-offs.
          </p>
        </div>

        {/* Fluid Wave Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {phases.map((ph) => (
            <div
              key={ph.num}
              className="gsap-d-wave-card group relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#09143f]/60 to-[#030718]/80 hover:from-[#09143f]/85 hover:to-[#050c26]/95 border border-white/15 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)] space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {ph.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                    {ph.timeline}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold block">
                  {ph.name}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ph.title}
                </h3>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                {ph.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
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
