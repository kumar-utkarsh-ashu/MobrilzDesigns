"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, ShieldCheck, ArrowRight, Menu, X } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { RollText } from "@/components/motion/RollText";

interface NavbarDesignDProps {
  onOpenEstimator?: () => void;
}

export function NavbarDesignD({ onOpenEstimator }: NavbarDesignDProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-6xl pointer-events-auto">
      <div
        className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[#020617]/85 border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(2,6,23,0.7)]"
            : "bg-[#020617]/60 border border-white/10 backdrop-blur-xl shadow-lg"
        }`}
      >
        {/* Brand Logo & Tag */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 p-1.5 flex items-center justify-center group-hover:border-cyan-300 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <img src="/assets/mobrilz-m-logo.svg" alt="Mobrilz" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-white text-lg block leading-none">
              MOBRILZ
            </span>
            <span className="text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest">
              Spatial Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium text-slate-300">
          <a href="#sandbox" className="hover:text-cyan-300 transition-colors">
            <RollText text="Device Sandbox" />
          </a>
          <a href="#mcp-studio" className="hover:text-cyan-300 transition-colors">
            <RollText text="MCP Terminal" />
          </a>
          <a href="#services" className="hover:text-cyan-300 transition-colors">
            <RollText text="Capabilities" />
          </a>
          <a href="#process" className="hover:text-cyan-300 transition-colors">
            <RollText text="Methodology" />
          </a>
          <a href="#guarantees" className="hover:text-cyan-300 transition-colors">
            <RollText text="SLA Contracts" />
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <MagneticWrapper strength={0.3}>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-[#3779cb] text-white text-xs font-mono font-bold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all flex items-center gap-2"
            >
              <span>Instant Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </MagneticWrapper>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-6 rounded-3xl bg-[#020617]/95 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 font-mono text-sm text-slate-200">
          <a
            href="#sandbox"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:text-cyan-400 border-b border-white/5"
          >
            Device Sandbox
          </a>
          <a
            href="#mcp-studio"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:text-cyan-400 border-b border-white/5"
          >
            MCP Terminal
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:text-cyan-400 border-b border-white/5"
          >
            Capabilities
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:text-cyan-400 border-b border-white/5"
          >
            Methodology
          </a>
          <a
            href="#guarantees"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:text-cyan-400"
          >
            SLA Contracts
          </a>
        </div>
      )}
    </header>
  );
}

