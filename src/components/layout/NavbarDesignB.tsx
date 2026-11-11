"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Code2, Smartphone, Cloud, Cpu, Palette, Sparkles, Layout, Image as ImageIcon, Terminal, Bot, Workflow, Plug, TrendingUp, ShieldCheck } from "lucide-react";
import { servicesMegaMenu, industriesMegaMenu, workMegaMenu } from "@/lib/data/navigation";

interface NavbarDesignBProps {
  onOpenEstimator?: () => void;
}

export function NavbarDesignB({ onOpenEstimator }: NavbarDesignBProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    "code-2": <Code2 className="w-4 h-4" />,
    "smartphone": <Smartphone className="w-4 h-4" />,
    "cloud": <Cloud className="w-4 h-4" />,
    "cpu": <Cpu className="w-4 h-4" />,
    "palette": <Palette className="w-4 h-4" />,
    "sparkles": <Sparkles className="w-4 h-4" />,
    "layout": <Layout className="w-4 h-4" />,
    "image": <ImageIcon className="w-4 h-4" />,
    "terminal": <Terminal className="w-4 h-4" />,
    "bot": <Bot className="w-4 h-4" />,
    "workflow": <Workflow className="w-4 h-4" />,
    "plug": <Plug className="w-4 h-4" />,
    "trending-up": <TrendingUp className="w-4 h-4" />,
    "shield-check": <ShieldCheck className="w-4 h-4" />
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none font-sans">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative w-full max-w-6xl rounded-full bg-[#060d28]/90 backdrop-blur-2xl border border-blue-500/30 shadow-[0_20px_50px_rgba(1,4,18,0.7)] px-5 py-2.5 flex items-center justify-between"
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

          {/* Live Availability Beacon */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Q1 Sprints Open</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Spring Gliding Pill */}
        <nav
          onMouseLeave={() => setHoveredNav(null)}
          className="hidden lg:flex items-center gap-1 relative text-xs font-medium text-slate-300"
        >
          {/* 1. Home */}
          <a
            href="#hero"
            onMouseEnter={() => setHoveredNav("Home")}
            className="relative px-3 py-1.5 rounded-full transition-colors hover:text-white"
          >
            {hoveredNav === "Home" && (
              <motion.span
                layoutId="nav-pill-b"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
              />
            )}
            <span className="relative z-10">Home</span>
          </a>

          {/* 2. Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setHoveredNav("Services");
              setServicesOpen(true);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="relative flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-white cursor-pointer"
            >
              {hoveredNav === "Services" && (
                <motion.span
                  layoutId="nav-pill-b"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                />
              )}
              <span className="relative z-10">Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 relative z-10 ${servicesOpen ? "rotate-180 text-sky-400" : "text-slate-400"}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute -left-20 top-full mt-2 w-[860px] rounded-3xl bg-[#09143f]/95 backdrop-blur-2xl border border-blue-500/30 p-6 shadow-2xl grid grid-cols-4 gap-6 z-50 text-left"
                >
                  {servicesMegaMenu.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-[10px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                        {col.category}
                      </div>
                      <div className="space-y-1">
                        {col.items.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            className="flex items-start gap-2 p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="p-1 rounded-md bg-blue-500/10 text-sky-400 shrink-0 mt-0.5">
                              {iconMap[item.icon || "code-2"]}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover/item:text-sky-300">
                                {item.title}
                              </div>
                              <div className="text-[10px] text-slate-400 line-clamp-1">
                                {item.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Industries Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setHoveredNav("Industries");
              setIndustriesOpen(true);
            }}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              className="relative flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-white cursor-pointer"
            >
              {hoveredNav === "Industries" && (
                <motion.span
                  layoutId="nav-pill-b"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                />
              )}
              <span className="relative z-10">Industries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 relative z-10 ${industriesOpen ? "rotate-180 text-sky-400" : "text-slate-400"}`} />
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute -left-10 top-full mt-2 w-[460px] rounded-3xl bg-[#09143f]/95 backdrop-blur-2xl border border-blue-500/30 p-5 grid grid-cols-2 gap-3 z-50 text-left"
                >
                  {industriesMegaMenu.map((ind, i) => (
                    <a
                      key={i}
                      href={ind.href}
                      className="p-2.5 rounded-xl hover:bg-white/5 transition-colors group/ind"
                    >
                      <div className="text-xs font-semibold text-white group-hover/ind:text-sky-300">
                        {ind.title}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {ind.description}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Our Work Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setHoveredNav("Our Work");
              setWorkOpen(true);
            }}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              type="button"
              className="relative flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-white cursor-pointer"
            >
              {hoveredNav === "Our Work" && (
                <motion.span
                  layoutId="nav-pill-b"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
                />
              )}
              <span className="relative z-10">Our Work</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 relative z-10 ${workOpen ? "rotate-180 text-sky-400" : "text-slate-400"}`} />
            </button>

            <AnimatePresence>
              {workOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-[#09143f]/95 backdrop-blur-2xl border border-blue-500/30 p-3 space-y-1 z-50 text-left"
                >
                  {workMegaMenu.map((w, i) => (
                    <a
                      key={i}
                      href={w.href}
                      className="block p-2 rounded-xl hover:bg-white/5 transition-colors group/work"
                    >
                      <div className="text-xs font-semibold text-white group-hover/work:text-sky-300">
                        {w.title}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {w.description}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Packages */}
          <a
            href="#faqs"
            onMouseEnter={() => setHoveredNav("Packages")}
            className="relative px-3 py-1.5 rounded-full transition-colors hover:text-white"
          >
            {hoveredNav === "Packages" && (
              <motion.span
                layoutId="nav-pill-b"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
              />
            )}
            <span className="relative z-10">Packages</span>
          </a>

          {/* 6. OutSourcing */}
          <a
            href="#why-us"
            onMouseEnter={() => setHoveredNav("OutSourcing")}
            className="relative px-3 py-1.5 rounded-full transition-colors hover:text-white"
          >
            {hoveredNav === "OutSourcing" && (
              <motion.span
                layoutId="nav-pill-b"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
              />
            )}
            <span className="relative z-10">OutSourcing</span>
          </a>

          {/* 7. About */}
          <a
            href="#why-us"
            onMouseEnter={() => setHoveredNav("About")}
            className="relative px-3 py-1.5 rounded-full transition-colors hover:text-white"
          >
            {hoveredNav === "About" && (
              <motion.span
                layoutId="nav-pill-b"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-white/10 border border-white/10 z-0"
              />
            )}
            <span className="relative z-10">About</span>
          </a>

        </nav>

        {/* Right Magnetic Action: Talk to an Expert (No wrapping!) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenEstimator}
            className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] hover:from-[#408eeb] hover:to-[#3779cb] text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
          >
            <span>Talk to an Expert</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto fixed top-20 inset-x-4 z-40 lg:hidden rounded-3xl bg-[#060d28]/95 backdrop-blur-2xl border border-blue-500/30 p-6 shadow-2xl text-left max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                Home
              </a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                Services
              </a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                Industries
              </a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                Our Work
              </a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                Packages
              </a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                OutSourcing
              </a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">
                About
              </a>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimator?.();
                  }}
                  className="w-full py-3 rounded-full bg-[#3779cb] text-white text-xs font-semibold"
                >
                  Talk to an Expert
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

