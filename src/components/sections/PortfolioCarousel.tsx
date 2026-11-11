"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, ExternalLink, Layers, X, Search } from "lucide-react";
import { projectsData, portfolioCategories, ProjectItem } from "@/lib/data/portfolio";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface PortfolioCarouselProps {
  theme?: "light" | "dark";
}

export function PortfolioCarousel({ theme = "dark" }: PortfolioCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Website") return project.kind === "Website";
    if (selectedCategory === "Mobile App") return project.kind === "Mobile App";
    return project.industry?.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const nextSlide = () => {
    if (currentIndex < filteredProjects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, filteredProjects.length - 3));
    }
  };

  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#060d28] text-white" : "bg-[#fbfcfd] text-slate-900 border-t border-slate-200/80"
      }`}
    >
      {/* Background ambient lighting */}
      {isDark ? (
        <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-[#3779cb]/10 blur-[160px] pointer-events-none rounded-full" />
      ) : (
        <div className="absolute inset-0 bg-light-grid opacity-50 pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-mono text-xs tracking-wider uppercase mb-3 ${
              isDark ? "bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue" : "bg-blue-50 border border-blue-200 text-mobrilz-blue"
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works &amp; Case Studies</span>
            </div>
            
            {/* Exact Headline from source of truth */}
            <h2 className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.08] ${
              isDark ? "text-white" : "text-[#09143f]"
            }`}>
              Good ideas deserve <br className="hidden sm:inline" />
              <span className={`font-semibold ${
                isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]" : "text-mobrilz-blue"
              }`}>
                great execution
              </span>
            </h2>
          </div>

          {/* Right Header Navigation & All Projects trigger */}
          <div className="flex flex-col sm:items-end gap-4">
            <p className={`font-light text-sm sm:text-base max-w-md leading-relaxed sm:text-right ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}>
              From high-throughput fintech platforms to fluid mobile apps, explore production software architected and scaled by Mobrilz.
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className={`p-3 rounded-full border transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs"
                }`}
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className={`p-3 rounded-full border transition-all ${
                  isDark
                    ? "bg-[#3779cb] border-[#3779cb] text-white hover:bg-[#275599]"
                    : "bg-[#09143f] border-[#09143f] text-white hover:bg-mobrilz-blue shadow-xs"
                }`}
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={`ml-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  isDark
                    ? "bg-white/10 border-white/15 text-white hover:bg-white/15"
                    : "bg-slate-100 border-slate-200 text-mobrilz-navy hover:bg-slate-200"
                }`}
              >
                Browse All 37 Projects ({projectsData.length})
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills with Spring Physics */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                  isSelected
                    ? isDark ? "text-white" : "text-white"
                    : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId={`cat-pill-${theme}`}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className={`absolute inset-0 rounded-full z-0 ${
                      isDark
                        ? "bg-gradient-to-r from-[#3779cb] to-[#275599] shadow-md shadow-blue-500/20"
                        : "bg-[#09143f] shadow-md shadow-slate-900/10"
                    }`}
                  />
                )}
                {!isSelected && (
                  <span className={`absolute inset-0 rounded-full z-0 transition-colors ${
                    isDark ? "bg-white/5 border border-white/10" : "bg-white border border-slate-200"
                  }`} />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* GSAP-style Smooth Horizontal Carousel Slider */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / 3)}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.slug || idx}
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shrink-0"
              >
                {isDark ? (
                  <SpotlightCard
                    spotlightColor="rgba(55, 121, 203, 0.25)"
                    className="group flex flex-col justify-between p-4 sm:p-5 h-full border-[#1b2b65] bg-[#09143f]/80"
                  >
                    {/* Media Frame */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#060d28] border border-white/10 mb-5">
                      <img
                        src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#060d28]/85 backdrop-blur-md text-[10px] font-mono text-sky-300 font-medium border border-white/15">
                        {project.kind}
                      </div>
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 right-3 p-2 rounded-full bg-[#09143f]/90 hover:bg-[#3779cb] text-white backdrop-blur-md transition-colors"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 justify-between gap-3 px-1">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-medium">
                          {project.industry}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-1 group-hover:text-sky-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-2 mt-1.5">
                          {project.desc}
                        </p>
                      </div>

                      {project.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10 mt-3">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </SpotlightCard>
                ) : (
                  <article className="group flex flex-col justify-between p-4 sm:p-5 h-full rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-mobrilz-blue/40 transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-5">
                      <img
                        src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono text-mobrilz-navy font-semibold border border-slate-200">
                        {project.kind}
                      </div>
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 right-3 p-2 rounded-full bg-[#09143f] hover:bg-mobrilz-blue text-white shadow-sm transition-colors"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-col flex-1 justify-between gap-3 px-1">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-mobrilz-blue font-semibold">
                          {project.industry}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-mobrilz-navy tracking-tight mt-1 group-hover:text-mobrilz-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-2 mt-1.5">
                          {project.desc}
                        </p>
                      </div>

                      {project.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-100 mt-3">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Position Indicator */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 3)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === i
                    ? "w-8 bg-[#3779cb]"
                    : `w-2 ${isDark ? "bg-white/20" : "bg-slate-300"}`
                }`}
                aria-label={`Slide group ${i + 1}`}
              />
            ))}
          </div>

          <div className="font-mono text-xs text-slate-400">
            Slide {Math.min(currentIndex + 3, filteredProjects.length)} of {filteredProjects.length}
          </div>
        </div>

      </div>

      {/* Full Catalog Modal for all 37 projects */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className={`relative w-full max-w-5xl rounded-3xl p-6 sm:p-8 max-h-[90vh] flex flex-col shadow-2xl ${
              isDark ? "bg-[#09143f] border border-blue-500/30 text-white" : "bg-white text-slate-900 border border-slate-200"
            }`}>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Complete Mobrilz Portfolio Catalog
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    All 37 production web and mobile software projects architected by our engineering pod.
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search input */}
              <div className="mb-6 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by title, industry, or technology (e.g. Next.js, FinTech, Swift)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 rounded-2xl text-sm border focus:outline-none ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white focus:border-blue-400"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-mobrilz-blue"
                  }`}
                />
              </div>

              {/* Scrollable Grid */}
              <div className="overflow-y-auto flex-1 pr-2 grid grid-cols-1 md:grid-cols-3 gap-5">
                {projectsData
                  .filter((p) => {
                    if (!searchQuery) return true;
                    const q = searchQuery.toLowerCase();
                    return (
                      p.title.toLowerCase().includes(q) ||
                      p.industry.toLowerCase().includes(q) ||
                      p.technologies?.some((t) => t.toLowerCase().includes(q))
                    );
                  })
                  .map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all ${
                        isDark ? "bg-[#060d28] border-white/10" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-black/20">
                        <img
                          src={p.image.startsWith("/") ? p.image : `/${p.image}`}
                          alt={p.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="text-[10px] font-mono uppercase text-sky-400 font-semibold">{p.industry}</div>
                      <div className="text-sm font-bold mt-0.5 truncate">{p.title}</div>
                      <div className="text-xs text-slate-400 line-clamp-2 mt-1">{p.desc}</div>
                      {p.live_link && (
                        <a
                          href={p.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:underline mt-3"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

