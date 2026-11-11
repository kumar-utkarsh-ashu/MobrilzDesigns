"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projectsData, portfolioCategories } from "@/lib/data/portfolio";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Website") return project.kind === "Website";
    if (selectedCategory === "Mobile App") return project.kind === "Mobile App";
    return project.industry?.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#060d28] text-white relative overflow-hidden border-t border-[#1b2b65]/60">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-[#3779cb]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#18346b]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-mobrilz-blue" />
              <span>Selected Works &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Good ideas deserve <br className="hidden sm:inline" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                great execution
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
            <p className="font-light text-sm sm:text-base text-slate-300 leading-relaxed md:text-right">
              From high-throughput fintech platforms to fluid mobile apps, explore production software architected and scaled by Mobrilz.
            </p>
            <div className="font-mono text-xs text-sky-400">
              Showing {filteredProjects.length} of {projectsData.length} production builds
            </div>
          </div>
        </div>

        {/* Kokonut-style Category Filter Switcher with Spring Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                  isSelected ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="portfolio-filter-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] shadow-md shadow-blue-500/20 z-0"
                  />
                )}
                {!isSelected && (
                  <span className="absolute inset-0 rounded-full bg-white/5 border border-white/10 hover:border-white/20 z-0 transition-colors" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Bento Showcase Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.slice(0, 12).map((project, idx) => (
              <motion.div
                layout
                key={project.slug || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <SpotlightCard
                  spotlightColor="rgba(55, 121, 203, 0.25)"
                  className="group flex flex-col justify-between p-4 sm:p-5 h-full border-[#1b2b65] bg-[#09143f]/70 hover:border-[#3779cb]/60"
                >
                  {/* Media Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#060d28] border border-white/10 mb-5">
                    <img
                      src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Kind Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#060d28]/85 backdrop-blur-md text-[10px] font-mono text-sky-300 font-medium border border-white/15">
                      {project.kind}
                    </div>

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 rounded-full bg-[#09143f]/90 hover:bg-[#3779cb] text-white backdrop-blur-md transition-colors shadow-sm"
                        aria-label={`Open ${project.title} live`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Card Content & Outcome Details */}
                  <div className="flex flex-col flex-1 justify-between gap-3 px-1">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-medium">
                        {project.industry}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-1 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-2 mt-1.5">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10 mt-3">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono text-[10px]">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Action */}
        <div className="mt-14 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 shadow-sm transition-all backdrop-blur-sm"
          >
            <span>Have a custom vision to bring to life?</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
