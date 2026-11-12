"use client";

import React from "react";

interface RollTextProps {
  text: string;
  className?: string;
  hoverColor?: string;
}

export function RollText({
  text,
  className = "",
  hoverColor = "group-hover:text-cyan-300",
}: RollTextProps) {
  return (
    <span className={`group relative inline-flex overflow-hidden cursor-pointer select-none ${className}`}>
      <span className="flex">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 14}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className={`absolute top-0 left-0 flex ${hoverColor}`} aria-hidden="true">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
            style={{ transitionDelay: `${index * 14}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}

