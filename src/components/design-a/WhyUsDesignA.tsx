"use client";

import React from "react";
import { ShieldCheck, Code, Users, Clock, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

interface WhyUsDesignAProps {
  onOpenEstimator?: () => void;
}

export function WhyUsDesignA({ onOpenEstimator }: WhyUsDesignAProps) {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% IP & Source Ownership",
      description: "From commit #1 to production launch, you own every line of code, design file, and database architecture. Complete copyright assignment upon milestone completion.",
      tag: "LEGAL GUARANTEE"
    },
    {
      icon: Code,
      title: "Direct Senior Engineering Access",
      description: "Work directly with seasoned senior architects and principal engineers. No account executives, no junior intermediaries, and no lost context in translation.",
      tag: "COMMUNICATION"
    },
    {
      icon: Clock,
      title: "Predictable Bi-Weekly Sprints",
      description: "Sprint scope is locked prior to kickoff with clear deliverable milestones. Regular demo cutovers ensure complete transparency and zero unexpected budget drift.",
      tag: "TIMELINE SLA"
    },
    {
      icon: Award,
      title: "Enterprise Security & SOC2 Compliance",
      description: "All code adheres to strict OWASP security standards, automated SonarQube vulnerability scanning, and encrypted environment variable handling.",
      tag: "SECURITY STANDARDS"
    }
  ];

  return (
    <section id="why-us" className="w-full bg-white border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#09143f] text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Institutional Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
            Why Enterprise Leaders Partner With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Contractual guarantees, transparent engineering practices, and institutional code quality.
          </p>
        </div>

        {/* 4 Bento Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Contractually Enforced Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

