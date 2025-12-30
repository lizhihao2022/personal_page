"use client";

import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "publications", label: "Publications" },
];

type TabsProps = {
  compact?: boolean;
  className?: string;
};

export function Tabs({ compact = false, className }: TabsProps) {
  const [active, setActive] = useState<string>("home");

  // Observe section visibility to highlight the current tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const prefersReducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    [],
  );

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav className={cn("flex items-center gap-2", className)} aria-label="Page tabs">
      <div
        className={cn(
          "inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-1.5 py-1 transition",
          compact ? "border-white/10 bg-white/10 backdrop-blur" : "border-transparent",
        )}
      >
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              onClick={handleClick(section.id)}
              className={cn(
                "relative px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition focus-ring",
                "text-slate-400 hover:text-slate-100",
                isActive && "text-amber-100",
              )}
            >
              {section.label}
              <span
                className={cn(
                  "absolute left-1/2 -bottom-1 h-[2px] w-5 -translate-x-1/2 rounded-full bg-amber-200 transition duration-200",
                  isActive ? "opacity-100" : "opacity-0",
                )}
                aria-hidden
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
