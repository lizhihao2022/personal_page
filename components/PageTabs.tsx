"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Publications", href: "/publications" },
];

export function PageTabs({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => pathname === t.href || pathname.startsWith(`${t.href}/`)),
  );

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <span
          className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-amber-200/60 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
          aria-hidden
        />
      </div>
      <div className="mt-2 flex w-full justify-between text-[11px] uppercase tracking-[0.14em] text-slate-300">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              prefetch
              className={cn(
                "group relative flex w-1/3 flex-col items-center justify-start pb-1 pt-3 text-center no-underline focus-ring",
                "-mt-3 transition duration-300",
                isActive ? "-translate-y-[2px] text-amber-100" : "text-slate-300",
              )}
            >
              <span
                className={cn(
                  "transition duration-300",
                  "group-hover:-translate-y-[2px] group-hover:text-white",
                  isActive ? "font-semibold text-white" : "text-slate-300",
                )}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
