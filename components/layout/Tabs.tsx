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

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const offset = 140; // account for sticky header height
    let ticking = false;

    const updateFromScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = elements[0]?.id ?? "home";
      for (const el of elements) {
        if (el.offsetTop <= scrollPos) {
          current = el.id;
        } else {
          break;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateFromScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
