"use client";

import React, { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function CursorRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleClick = (e: MouseEvent) => {
      // Don't spawn ripples if clicking on form inputs
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      const newRipple: Ripple = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 750);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}

