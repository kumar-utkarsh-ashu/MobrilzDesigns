"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Global Motion & Atmospheric Primitives
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ProgressBar } from "@/components/motion/ProgressBar";
import { SystemBar } from "@/components/motion/SystemBar";
import { GlassCursor } from "@/components/motion/GlassCursor";
import { CursorRipple } from "@/components/motion/CursorRipple";

// =============================================================================
// DESIGN C: KINETIC 3D SYNTHESIS (CODEOFSAGAR + 5 REPOS SYNTHESIS)
// =============================================================================
import { DynamicDockNav } from "@/components/layout/DynamicDockNav";
import { Mobrilz3DHeroStage } from "@/components/hero/Mobrilz3DHeroStage";
import { MobrilzPinnedShowcase } from "@/components/showcase/MobrilzPinnedShowcase";
import { MobrilzCircularGallery } from "@/components/showcase/MobrilzCircularGallery";
import { ExpertiseKineticC } from "@/components/design-c/ExpertiseKineticC";
import { ProcessKineticC } from "@/components/design-c/ProcessKineticC";
import { TechStackKineticC } from "@/components/design-c/TechStackKineticC";
import { WhyUsKineticC } from "@/components/design-c/WhyUsKineticC";
import { ReviewsKineticC } from "@/components/design-c/ReviewsKineticC";
import { FaqKineticC } from "@/components/design-c/FaqKineticC";

// =============================================================================
// DESIGN D: LIQUID GLASS AURORA & SPATIAL INTELLIGENCE STUDIO (GLOBAL DESIGN INTEL)
// =============================================================================
import { NavbarDesignD } from "@/components/design-d/NavbarDesignD";
import { HeroDesignD } from "@/components/design-d/HeroDesignD";
import { DeviceSandboxD } from "@/components/design-d/DeviceSandboxD";
import { McpStudioD } from "@/components/design-d/McpStudioD";
import { ProcessDesignD } from "@/components/design-d/ProcessDesignD";
import { WhyUsDesignD } from "@/components/design-d/WhyUsDesignD";
import { FooterDesignD } from "@/components/design-d/FooterDesignD";

// =============================================================================
// DESIGN A: ARCHITECTURAL STUDIO (SWISS WHITE & NAVY) - 100% UNTOUCHED
// =============================================================================
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

// =============================================================================
// DESIGN B: CYBERNETIC AI STUDIO (DARK VOID) - 100% UNTOUCHED
// =============================================================================
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
  const queryDesign = searchParams.get("design")?.toUpperCase();
  const initialDesign =
    queryDesign === "A" || queryDesign === "B" || queryDesign === "D"
      ? (queryDesign as "A" | "B" | "D")
      : "C";
  const [activeDesign, setActiveDesign] = useState<"A" | "B" | "C" | "D">(initialDesign);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  useEffect(() => {
    const d = searchParams.get("design")?.toUpperCase();
    if (d === "A" || d === "B" || d === "C" || d === "D") {
      setActiveDesign(d as any);
    }
  }, [searchParams]);

  const handleOpenEstimator = () => setIsEstimatorOpen(true);
  const handleCloseEstimator = () => setIsEstimatorOpen(false);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        activeDesign === "A"
          ? "bg-[#fbfcfd] text-slate-800"
          : activeDesign === "D"
          ? "bg-[#020617] text-white"
          : "bg-[#060d28] text-white"
      }`}
    >
      {/* Global Luxury Momentum Scroll & Atmospheric Interactions */}
      <SmoothScroll />
      <ProgressBar />
      <GlassCursor />
      <CursorRipple />

      {activeDesign === "C" ? (
        /* ========================================================================= */
        /* DESIGN C: THE KINETIC 3D SYNTHESIS (FULL-PAGE KINETIC CHOREOGRAPHY)      */
        /* ========================================================================= */
        <>
          {/* Cybernetic Telemetry HUD */}
          <SystemBar />

          {/* Suspended macOS Dynamic Spring Magnification Dock */}
          <DynamicDockNav onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            {/* 370svh Pinned Scrub Stage with Authentic 3D Extruded Mobrilz Logo */}
            <Mobrilz3DHeroStage onOpenEstimator={handleOpenEstimator} />

            {/* Pinned Horizontal Flagship Project Deck */}
            <MobrilzPinnedShowcase />

            {/* Interactive 3D Spatial Cylindrical Orbit Gallery (Drag to Spin) */}
            <MobrilzCircularGallery />

            {/* Full-Page Kinetic: Interactive Holographic Engineering Studio */}
            <div id="services">
              <ExpertiseKineticC />
            </div>

            {/* Full-Page Kinetic: Continuous Animated Laser Highway */}
            <div id="process">
              <ProcessKineticC />
            </div>

            {/* Full-Page Kinetic: Glowing Circuit Grid Matrix */}
            <TechStackKineticC />

            {/* Full-Page Kinetic: Spotlight Bento Guarantees with 3D Tilt */}
            <WhyUsKineticC />

            {/* Full-Page Kinetic: Dual-Row Infinite Velocity Marquee */}
            <div id="reviews">
              <ReviewsKineticC />
            </div>

            {/* Technical Whitepapers */}
            <BlogsDesignB />

            {/* Full-Page Kinetic: Spring-Damped Accordion Drawers */}
            <FaqKineticC onOpenEstimator={handleOpenEstimator} />

            {/* Concentric Breathing Radar Scope Calculator */}
            <CtaDesignB onOpenEstimator={handleOpenEstimator} />
          </main>

          {/* Deep Obsidian Void Footer with Authentic SVG Brand Identity */}
          <FooterDesignB onOpenEstimator={handleOpenEstimator} />
        </>
      ) : activeDesign === "D" ? (
        /* ========================================================================= */
        /* DESIGN D: LIQUID GLASS AURORA & SPATIAL INTELLIGENCE STUDIO              */
        /* ========================================================================= */
        <>
          <NavbarDesignD onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            {/* Bioluminescent Liquid Aurora Canvas + Authentic Brand Emblem */}
            <HeroDesignD onOpenEstimator={handleOpenEstimator} />

            {/* Interactive Multi-Device Project Sandbox (Desktop / Tablet / Mobile) */}
            <DeviceSandboxD />

            {/* Live Enterprise MCP Terminal Playground */}
            <McpStudioD />

            {/* Capabilities Studio */}
            <div id="services">
              <ExpertiseKineticC />
            </div>

            {/* Fluid Wave Sprint Process */}
            <ProcessDesignD />

            {/* Liquid Glass Bento Guarantees */}
            <WhyUsDesignD />

            {/* Reviews Marquee */}
            <ReviewsKineticC />

            {/* Diagnostic FAQs */}
            <FaqKineticC onOpenEstimator={handleOpenEstimator} />

            {/* Concentric Radar Estimator */}
            <CtaDesignB onOpenEstimator={handleOpenEstimator} />
          </main>

          {/* Liquid Glass Monolith Footer */}
          <FooterDesignD onOpenEstimator={handleOpenEstimator} />
        </>
      ) : activeDesign === "A" ? (
        /* ========================================================================= */
        /* DESIGN A: THE ARCHITECTURAL STUDIO (SWISS WHITE & NAVY) - 100% UNTOUCHED */
        /* ========================================================================= */
        <>
          <NavbarDesignA onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            <HeroDesignA onOpenEstimator={handleOpenEstimator} />
            <PortfolioDesignA />
            <ExpertiseDesignA />
            <ProcessDesignA />
            <TechStackDesignA />
            <WhyUsDesignA onOpenEstimator={handleOpenEstimator} />
            <ReviewsDesignA />
            <BlogsDesignA onOpenEstimator={handleOpenEstimator} />
            <FaqDesignA onOpenEstimator={handleOpenEstimator} />
            <CtaDesignA />
          </main>

          <FooterDesignA onOpenEstimator={handleOpenEstimator} />
        </>
      ) : (
        /* ========================================================================= */
        /* DESIGN B: THE CYBERNETIC AI STUDIO (DARK VOID) - 100% UNTOUCHED           */
        /* ========================================================================= */
        <>
          <NavbarDesignB onOpenEstimator={handleOpenEstimator} />

          <main className="flex-1 w-full">
            <HeroDesignB onOpenEstimator={handleOpenEstimator} />
            <PortfolioDesignB />
            <ExpertiseDesignB />
            <ProcessDesignB />
            <TechStackDesignB />
            <WhyUsDesignB />
            <ReviewsDesignB />
            <BlogsDesignB />
            <FaqDesignB onOpenEstimator={handleOpenEstimator} />
            <CtaDesignB onOpenEstimator={handleOpenEstimator} />
          </main>

          <FooterDesignB onOpenEstimator={handleOpenEstimator} />
        </>
      )}

      {/* Global Interactive Project Estimator Modal */}
      <EstimatorModal isOpen={isEstimatorOpen} onClose={handleCloseEstimator} />

      {/* Floating 4-Way Design Switcher Pill (Fixed Bottom Left) */}
      <div
        id="design-variation-switcher"
        data-active-design={activeDesign}
        className="fixed bottom-5 left-5 z-[100] flex items-center gap-1.5 p-1.5 rounded-full bg-[#020617]/95 backdrop-blur-2xl border border-white/20 shadow-[0_12px_36px_rgba(1,4,18,0.7)] font-sans select-none text-xs"
        role="navigation"
        aria-label="Design Variation Switcher"
      >
        <button
          type="button"
          onClick={() => setActiveDesign("C")}
          className={`px-3 py-1.5 rounded-full font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "C"
              ? "bg-gradient-to-r from-cyan-400 to-[#3779cb] text-slate-950 shadow-lg ring-1 ring-white/40 font-extrabold"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="C"
        >
          Design C (Kinetic 3D ★)
        </button>
        <button
          type="button"
          onClick={() => setActiveDesign("D")}
          className={`px-3 py-1.5 rounded-full font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "D"
              ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg ring-1 ring-white/40 font-extrabold"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="D"
        >
          Design D (Liquid Aurora ✦)
        </button>
        <button
          type="button"
          onClick={() => setActiveDesign("B")}
          className={`px-3 py-1.5 rounded-full font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "B"
              ? "bg-[#3779cb] text-white shadow-md ring-1 ring-white/30"
              : "text-slate-400 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="B"
        >
          Design B
        </button>
        <button
          type="button"
          onClick={() => setActiveDesign("A")}
          className={`px-3 py-1.5 rounded-full font-bold tracking-wide transition-all duration-200 ${
            activeDesign === "A"
              ? "bg-slate-200 text-slate-900 shadow-md ring-1 ring-slate-400"
              : "text-slate-400 hover:text-white hover:bg-white/10"
          }`}
          data-design-btn="A"
        >
          Design A
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
