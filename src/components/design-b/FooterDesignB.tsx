"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

interface FooterDesignBProps {
  onOpenEstimator?: () => void;
}

export function FooterDesignB({ onOpenEstimator }: FooterDesignBProps) {
  return (
    <footer className="w-full bg-[#030712] border-t border-cyan-500/20 text-slate-400 font-sans pt-20 pb-14 relative overflow-hidden">
      
      {/* Subtle Cyan Glow Beam at top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Giant Luminous Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[16vw] font-black font-mono text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        MOBRILZ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info with Authentic Logo and Ambient Aura */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-3 group">
              <div className="relative p-2.5 rounded-2xl bg-[#060d28] border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 transition-colors">
                <Image
                  src="/assets/logo.svg"
                  alt="Mobrilz"
                  width={150}
                  height={32}
                  className="h-7 w-auto invert brightness-200"
                  priority
                />
              </div>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering high-scale digital platforms, cross-platform mobile binaries, and enterprise autonomous AI agents for global brands.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:info@mobrilz.com" className="hover:text-white font-mono">info@mobrilz.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+918882898235" className="hover:text-white font-mono">+91 88828 98235</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Noida Sector 63, Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Nav: Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Engineering</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Autonomous AI Agents</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Microservice Topology</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cross-Platform Mobile</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">pgvector RAG Pipelines</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Zero-Downtime CI/CD</a></li>
            </ul>
          </div>

          {/* Nav: Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">FinTech &amp; Banking</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">HealthTech &amp; Telehealth</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">E-Commerce Marketplaces</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Logistics &amp; Tracking</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Enterprise PropTech</a></li>
            </ul>
          </div>

          {/* Nav: Protocol */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Protocol</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Sprint Highway</a></li>
              <li><a href="#technologies" className="hover:text-cyan-400 transition-colors">Tech Matrix</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">100% IP Guarantees</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Client Endorsements</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition-colors">System FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Encrypted Repositories • SOC2 Readiness • Strict NDAs</span>
          </div>
          <div>
            © {new Date().getFullYear()} Mobrilz Technologies Pvt. Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
