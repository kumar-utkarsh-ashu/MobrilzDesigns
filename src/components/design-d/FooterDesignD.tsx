"use client";

import React from "react";
import { ArrowUpRight, Globe, Shield, Terminal } from "lucide-react";
import { RollText } from "@/components/motion/RollText";

interface FooterDesignDProps {
  onOpenEstimator?: () => void;
}

export function FooterDesignD({ onOpenEstimator }: FooterDesignDProps) {
  return (
    <footer className="relative z-20 w-full pt-24 pb-14 bg-[#020617] border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Monolith Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 p-2 flex items-center justify-center">
                <img src="/assets/mobrilz-m-logo.svg" alt="Mobrilz" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-white text-xl tracking-tight block">
                  MOBRILZ TECHNOLOGIES
                </span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  Spatial Intelligence Studio
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              We engineer bespoke software, high-performance web platforms, and autonomous AI architectures for ambitious global enterprises.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Q1/Q2 Sprints
              </span>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-4">
              <span className="text-slate-400 uppercase tracking-wider block">Architecture</span>
              <ul className="space-y-2.5 text-slate-300">
                <li><a href="#services" className="hover:text-cyan-300 transition-colors">Web Engineering</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition-colors">Mobile Ecosystems</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition-colors">Cloud & Kubernetes</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition-colors">Enterprise AI & MCP</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-slate-400 uppercase tracking-wider block">Methodology</span>
              <ul className="space-y-2.5 text-slate-300">
                <li><a href="#sandbox" className="hover:text-cyan-300 transition-colors">Device Sandbox</a></li>
                <li><a href="#mcp-studio" className="hover:text-cyan-300 transition-colors">MCP Terminal</a></li>
                <li><a href="#process" className="hover:text-cyan-300 transition-colors">Fluid Wave Sprint</a></li>
                <li><a href="#guarantees" className="hover:text-cyan-300 transition-colors">SLA Contracts</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <span className="text-slate-400 uppercase tracking-wider block">Global Hubs</span>
              <ul className="space-y-2.5 text-slate-300">
                <li><span>Riyadh • KSA (Salla Ecosystem)</span></li>
                <li><span>London • UK (Fintech)</span></li>
                <li><span>San Francisco • US (AI Labs)</span></li>
                <li><a href="mailto:contact@mobrilz.com" className="text-cyan-400 hover:text-cyan-200">contact@mobrilz.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Giant Illuminated Watermark */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© 2026 Mobrilz Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SOC2 Type II Compliant</span>
            <span>Zero Data Retention</span>
            <span>100% IP Handover</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

