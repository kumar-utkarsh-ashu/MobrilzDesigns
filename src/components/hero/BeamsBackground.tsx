"use client";

import React, { useEffect, useRef } from "react";

export function BeamsBackground({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#060d28] pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Anime.js inspired kinetic ambient laser rays */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <g filter="url(#beams-blur-v3)">
            <path
              d="M-100 -50L650 900L800 900L50 -50Z"
              fill="url(#beam-grad-1)"
              opacity="0.45"
            />
            <path
              d="M1500 -50L550 900L400 900L1350 -50Z"
              fill="url(#beam-grad-2)"
              opacity="0.4"
            />
            <path
              d="M720 -100L620 900L820 900Z"
              fill="url(#beam-grad-3)"
              opacity="0.3"
            />
          </g>
          <defs>
            <filter id="beams-blur-v3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="70" />
            </filter>
            <linearGradient id="beam-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3779cb" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#09143f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beam-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#275599" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#060d28" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beam-grad-3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#9abbe3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0b1647" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Blueprint Crosshair Grid */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid-pattern-v3"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 36 0 V 72 M 0 36 H 72"
              fill="none"
              stroke="rgba(55, 121, 203, 0.08)"
              strokeWidth="1"
            />
            <path
              d="M 36 31.5 V 40.5 M 31.5 36 H 40.5"
              fill="none"
              stroke="rgba(64, 142, 235, 0.28)"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid-pattern-v3)" />
      </svg>

      {/* Ambient Radial Core Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3779cb]/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
