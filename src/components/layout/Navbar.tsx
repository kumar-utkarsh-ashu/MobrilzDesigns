"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers, ShieldCheck, Cpu } from "lucide-react";

interface NavbarProps {
  onOpenEstimator?: () => void;
  activeDesign?: "A" | "B";
  onSwitchDesign?: (design: "A" | "B") => void;
}

export function Navbar({ onOpenEstimator, activeDesign = "A", onSwitchDesign }: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Technologies", href: "#technologies" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Blog", href: "#blogs" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      {/* Floating Dynamic Island Header (Motion.dev & Kokonut UI Inspired) */}
      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative w-full max-w-5xl rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#060d28]/90 backdrop-blur-2xl border-blue-500/30 shadow-[0_20px_50px_rgba(1,4,18,0.7)] py-2 px-3 sm:px-4"
              : "bg-[#060d28]/80 backdrop-blur-xl border-white/15 shadow-[0_15px_35px_rgba(6,13,40,0.5)] py-2.5 px-4 sm:px-5"
          } flex items-center justify-between`}
        >
          {/* Brand Logo & Live Beacon */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2 shrink-0">
              <img
                src="/assets/logo.svg"
                alt="Mobrilz Logo"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </a>

            {/* Live Availability Beacon (Kokonut UI Pattern) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q1 Sprints</span>
            </div>
          </div>

          {/* Desktop Navigation with Gliding Spring Pill (Motion.dev Pattern) */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden lg:flex items-center gap-0.5 relative text-xs sm:text-[13px] font-medium text-slate-300"
          >
            {/* 1. Home */}
            <a
              href="#hero"
              onMouseEnter={() => setHoveredNav("Home")}
              onClick={() => setActiveNav("Home")}
              className="relative px-3.5 py-1.5 rounded-full transition-colors hover:text-white"
            >
              {hoveredNav === "Home" && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                />
              )}
              <span className="relative z-10">Home</span>
            </a>

            {/* 2. Services Mega-Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredNav("Services");
                setServicesOpen(true);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="#expertise"
                className="relative flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-colors hover:text-white cursor-pointer"
              >
                {hoveredNav === "Services" && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                  />
                )}
                <span className="relative z-10">Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 relative z-10 ${
                    servicesOpen ? "rotate-180 text-mobrilz-blue" : "text-slate-400"
                  }`}
                />
              </a>

              {/* Mega-Dropdown Menu with Bklit-style architecture preview */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#09143f]/95 backdrop-blur-2xl border border-blue-500/30 p-3 shadow-2xl z-50 text-left"
                  >
                    <a
                      href="#expertise"
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-mobrilz-blue group-hover:bg-blue-500/20">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-sky-300">
                          Web Development
                        </div>
                        <div className="text-[11px] text-slate-400 font-light mt-0.5">
                          Modern reactive frameworks & secure microservices
                        </div>
                      </div>
                    </a>

                    <a
                      href="#expertise"
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-indigo-300">
                          Mobile Apps & Architecture
                        </div>
                        <div className="text-[11px] text-slate-400 font-light mt-0.5">
                          60fps native iOS & Android with offline-first sync
                        </div>
                      </div>
                    </a>

                    <a
                      href="#expertise"
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-cyan-300">
                          Enterprise AI & MCP Agents
                        </div>
                        <div className="text-[11px] text-slate-400 font-light mt-0.5">
                          Autonomous tool routing with Model Context Protocol
                        </div>
                      </div>
                    </a>

                    <a
                      href="#expertise"
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                          Cloud & Kubernetes DevOps
                        </div>
                        <div className="text-[11px] text-slate-400 font-light mt-0.5">
                          99.99% SLA autoscaling & automated CI/CD
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {navLinks.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.label)}
                onClick={() => setActiveNav(link.label)}
                className="relative px-3.5 py-1.5 rounded-full transition-colors hover:text-white"
              >
                {hoveredNav === link.label && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Magnetic CTA Button: Talk to an Expert */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenEstimator}
              className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] hover:from-[#408eeb] hover:to-[#3779cb] text-white text-xs font-medium tracking-wide shadow-md shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer (Expandable Morph Island) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 inset-x-4 z-40 lg:hidden rounded-3xl bg-[#060d28]/95 backdrop-blur-2xl border border-blue-500/30 p-6 shadow-2xl text-left"
          >
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-mobrilz-blue"
              >
                Home
              </a>
              <a
                href="#expertise"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-mobrilz-blue"
              >
                Services
              </a>
              {navLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-white/5 hover:text-mobrilz-blue"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#3779cb] text-white text-xs font-semibold"
                >
                  <span>Talk to an Expert</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Design Variation Switcher Pill (Preserved strictly as required) */}
      <div
        id="design-variation-switcher"
        data-active-design={activeDesign}
        className="fixed bottom-5 left-5 z-[100] flex items-center gap-1 p-1.5 rounded-full bg-[#09143f]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(1,4,18,0.45)] font-sans select-none"
        role="navigation"
        aria-label="Design Variation Switcher"
      >
        <button
          type="button"
          onClick={() => onSwitchDesign?.("A")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
            activeDesign === "A"
              ? "bg-[#3779cb] text-white shadow-sm"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="A"
        >
          Design A
        </button>
        <button
          type="button"
          onClick={() => onSwitchDesign?.("B")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
            activeDesign === "B"
              ? "bg-[#3779cb] text-white shadow-sm"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="B"
        >
          Design B
        </button>
      </div>
    </>
  );
}
