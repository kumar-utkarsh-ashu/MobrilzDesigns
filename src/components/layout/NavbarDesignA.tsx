"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Code2, Smartphone, Cloud, Cpu, Palette, Sparkles, Layout, Image as ImageIcon, Terminal, Bot, Workflow, Plug, TrendingUp, ShieldCheck } from "lucide-react";
import { servicesMegaMenu, industriesMegaMenu, workMegaMenu } from "@/lib/data/navigation";

interface NavbarDesignAProps {
  onOpenEstimator?: () => void;
}

export function NavbarDesignA({ onOpenEstimator }: NavbarDesignAProps) {
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200/80 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Original Blue and White/Navy */}
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/logo.svg"
              alt="Mobrilz Logo"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Items Matching Exact Original Architecture */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-mobrilz-navy">
            
            {/* 1. Home */}
            <a
              href="#hero"
              className="px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:text-mobrilz-blue hover:bg-slate-100/80 transition-all"
            >
              Home
            </a>

            {/* 2. Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:bg-slate-100/80 hover:text-mobrilz-blue transition-all focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-mobrilz-blue" : "text-slate-400"}`} />
              </button>

              {servicesOpen && (
                <div className="absolute -left-20 top-full mt-1 w-[900px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 grid grid-cols-4 gap-6 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  {servicesMegaMenu.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {col.category}
                      </div>
                      <div className="space-y-1">
                        {col.items.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="p-1.5 rounded-lg bg-blue-50 text-mobrilz-blue shrink-0 mt-0.5">
                              {iconMap[item.icon || "code-2"]}
                            </div>
                            <div>
                              <div className="text-xs font-medium text-slate-900 group-hover/item:text-mobrilz-blue">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-500 font-light line-clamp-1">
                                {item.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Industries Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:bg-slate-100/80 hover:text-mobrilz-blue transition-all focus:outline-none"
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-mobrilz-blue" : "text-slate-400"}`} />
              </button>

              {industriesOpen && (
                <div className="absolute -left-10 top-full mt-1 w-[460px] bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 grid grid-cols-2 gap-3 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  {industriesMegaMenu.map((ind, i) => (
                    <a
                      key={i}
                      href={ind.href}
                      className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/ind"
                    >
                      <div className="text-xs font-semibold text-slate-900 group-hover/ind:text-mobrilz-blue">
                        {ind.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-light line-clamp-1 mt-0.5">
                        {ind.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Our Work Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:bg-slate-100/80 hover:text-mobrilz-blue transition-all focus:outline-none"
              >
                <span>Our Work</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${workOpen ? "rotate-180 text-mobrilz-blue" : "text-slate-400"}`} />
              </button>

              {workOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 space-y-1 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  {workMegaMenu.map((w, i) => (
                    <a
                      key={i}
                      href={w.href}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/work"
                    >
                      <div className="text-xs font-semibold text-slate-900 group-hover/work:text-mobrilz-blue">
                        {w.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-light mt-0.5">
                        {w.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Packages */}
            <a
              href="#faqs"
              className="px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:text-mobrilz-blue hover:bg-slate-100/80 transition-all"
            >
              Packages
            </a>

            {/* 6. OutSourcing */}
            <a
              href="#why-us"
              className="px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:text-mobrilz-blue hover:bg-slate-100/80 transition-all"
            >
              OutSourcing
            </a>

            {/* 7. About */}
            <a
              href="#why-us"
              className="px-3.5 py-2 rounded-lg text-mobrilz-navy font-medium hover:text-mobrilz-blue hover:bg-slate-100/80 transition-all"
            >
              About
            </a>

          </nav>

          {/* Right Side Action: Talk to an Expert Button */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={onOpenEstimator}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-semibold tracking-wide rounded-xl bg-mobrilz-navy text-white hover:bg-mobrilz-blue transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-mobrilz-navy hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-8 bg-white border-b border-slate-200 space-y-4 text-left max-h-[80vh] overflow-y-auto">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 font-medium text-slate-900">
            Home
          </a>
          
          <div className="border-t border-slate-100 pt-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase py-1">Services</div>
            <div className="grid grid-cols-2 gap-2 pl-2 text-xs py-1">
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Web Development</a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Mobile Apps</a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Cloud Solutions</a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Custom Software &amp; AI</a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase py-1">Industries</div>
            <div className="grid grid-cols-2 gap-2 pl-2 text-xs py-1">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">FinTech</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Healthcare</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Retail &amp; eCommerce</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-mobrilz-blue">Logistics</a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2 text-sm font-medium">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700">Our Work</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700">Packages</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700">OutSourcing</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700">About</a>
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator?.();
              }}
              className="w-full py-3 rounded-xl bg-mobrilz-navy text-white text-xs font-semibold shadow-md text-center"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

