import React from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200",
        "transition hover:border-amber-200/40 hover:text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
