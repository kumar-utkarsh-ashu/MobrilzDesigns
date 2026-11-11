"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Design A Components (The Architectural Engineering Studio - Swiss White & Navy)
import { NavbarDesignA } from "@/components/layout/NavbarDesignA";
import { HeroDesignA } from "@/components/design-a/HeroDesignA";
import { PortfolioDesignA } from "@/components/design-a/PortfolioDesignA";
import { ExpertiseDesignA } from "@/components/design-a/ExpertiseDesignA";
import { ProcessDesignA } from "@/components/design-a/ProcessDesignA";
import { TechStackDesignA } from "@/components/design-a/TechStackDesignA";
import { WhyUsDesignA } from "@/components/design-a/WhyUsDesignA";
import { ReviewsDesignA } from "@/components/design-a/ReviewsDesignA";
import { BlogsDesignA } from "@/components/design-a/BlogsDesignA";
import { FaqDesignA } from "@/components/design-a/FaqDesignA";
import { CtaDesignA } from "@/components/design-a/CtaDesignA";
import { FooterDesignA } from "@/components/design-a/FooterDesignA";

// Design B Components (The Cybernetic AI Studio - Anime.js, Motion.dev & Kokonut UI Void)
import { NavbarDesignB } from "@/components/layout/NavbarDesignB";
import { HeroDesignB } from "@/components/design-b/HeroDesignB";
import { PortfolioDesignB } from "@/components/design-b/PortfolioDesignB";
import { ExpertiseDesignB } from "@/components/design-b/ExpertiseDesignB";
import { ProcessDesignB } from "@/components/design-b/ProcessDesignB";
import { TechStackDesignB } from "@/components/design-b/TechStackDesignB";
import { WhyUsDesignB } from "@/components/design-b/WhyUsDesignB";
import { ReviewsDesignB } from "@/components/design-b/ReviewsDesignB";
import { BlogsDesignB } from "@/components/design-b/BlogsDesignB";
import { FaqDesignB } from "@/components/design-b/FaqDesignB";
import { CtaDesignB } from "@/components/design-b/CtaDesignB";
import { FooterDesignB } from "@/components/design-b/FooterDesignB";

// Modals
import { EstimatorModal } from "@/components/modals/EstimatorModal";

function HomeContent() {
  const searchParams = useSearchParams();
  const initialDesign = searchParams.get("design")?.toUpperCase() === "B" ? "B" : "A";
  const [activeDesign, setActiveDesign] = useState<"A" | "B">(initialDesign);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  useEffect(() => {
    const d = searchParams.get("design")?.toUpperCase();
    if (d === "A" || d === "B") {
      setActiveDesign(d);
    }
  }, [searchParams]);

  const handleOpenEstimator = () => setIsEstimatorOpen(true);
  const handleCloseEstimator = () => setIsEstimatorOpen(false);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        activeDesign === "A"
          ? "bg-[#fbfcfd] text-slate-800"
          : "bg-[#060d28] text-white"
      }`}
    >
      {activeDesign === "A" ? (
        /* ========================================================================= */
        /* DESIGN A: THE ARCHITECTURAL ENGINEERING STUDIO (SWISS WHITE & NAVY)        */
        /* ========================================================================= */
        <>
          {/* Header with Original Blue & Navy Logo & Complete Mega-Menus */}
          <NavbarDesignA onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            {/* Hero with Interactive Topology Node Canvas */}
            <HeroDesignA onOpenEstimator={handleOpenEstimator} />

            {/* Horizontal Split-Screen Project Deck (GSAP Style) */}
            <PortfolioDesignA />

            {/* Architectural Engineering Specification Drafting Table */}
            <ExpertiseDesignA />

            {/* Continuous Step-Sequencer Milestone Roadmap */}
            <ProcessDesignA />

            {/* Multi-Tier Layered Architecture Blueprint */}
            <TechStackDesignA />

            {/* High-Trust Enterprise Guarantee Grid */}
            <WhyUsDesignA onOpenEstimator={handleOpenEstimator} />

            {/* Editorial Quotation Ledger */}
            <ReviewsDesignA />

            {/* Technical Whitepapers & Research */}
            <BlogsDesignA onOpenEstimator={handleOpenEstimator} />

            {/* High-Precision Diagnostic Accordions */}
            <FaqDesignA onOpenEstimator={handleOpenEstimator} />

            {/* Embedded Instant Sprint Estimator Console */}
            <CtaDesignA />
          </main>

          {/* Clean 5-Column High-Contrast Navy & Slate Footer */}
          <FooterDesignA onOpenEstimator={handleOpenEstimator} />
        </>
      ) : (
        /* ========================================================================= */
        /* DESIGN B: THE CYBERNETIC AI STUDIO (DARK KINETIC VOID)                    */
        /* ========================================================================= */
        <>
          {/* Suspended Floating Dynamic Island Header */}
          <NavbarDesignB onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            {/* Hero with Anime.js Kinetic Laser Rays & Live MCP Agent Terminal */}
            <HeroDesignB onOpenEstimator={handleOpenEstimator} />

            {/* 3D Perspective Spotlight Bento Deck (Kokonut UI) */}
            <PortfolioDesignB />

            {/* Holographic Bento Lab */}
            <ExpertiseDesignB />

            {/* Anime.js Laser Timeline Highway */}
            <ProcessDesignB />

            {/* Cybernetic Hex / Grid Matrix with Glowing Chips */}
            <TechStackDesignB />

            {/* Kinetic Spotlight Value Cards */}
            <WhyUsDesignB />

            {/* Infinite Velocity Marquee Deck */}
            <ReviewsDesignB />

            {/* Cybernetic Reading Cards */}
            <BlogsDesignB />

            {/* Cybernetic Glowing Drawer Accordions */}
            <FaqDesignB onOpenEstimator={handleOpenEstimator} />

            {/* Hypnotic Concentric Breathing Radar Aura */}
            <CtaDesignB onOpenEstimator={handleOpenEstimator} />
          </main>

          {/* Cybernetic Void Footer with Giant Luminous Watermark */}
          <FooterDesignB onOpenEstimator={handleOpenEstimator} />
        </>
      )}

      {/* Global Interactive Project Estimator Modal */}
      <EstimatorModal isOpen={isEstimatorOpen} onClose={handleCloseEstimator} />

      {/* Floating Design Variation Switcher Pill (Fixed Bottom Left) */}
      <div
        id="design-variation-switcher"
        data-active-design={activeDesign}
        className="fixed bottom-5 left-5 z-[100] flex items-center gap-1.5 p-1.5 rounded-full bg-[#09143f]/95 backdrop-blur-xl border border-white/20 shadow-[0_12px_36px_rgba(1,4,18,0.55)] font-sans select-none"
        role="navigation"
        aria-label="Design Variation Switcher"
      >
        <button
          type="button"
          onClick={() => setActiveDesign("A")}
          className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "A"
              ? "bg-[#3779cb] text-white shadow-md ring-1 ring-white/30"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="A"
        >
          Design A (Architectural Studio)
        </button>
        <button
          type="button"
          onClick={() => setActiveDesign("B")}
          className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "B"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md ring-1 ring-white/30"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="B"
        >
          Design B (Cybernetic Kinetic)
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060d28]" />}>
      <HomeContent />
    </Suspense>
  );
}
