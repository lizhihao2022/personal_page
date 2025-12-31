import React from "react";
import { cn } from "@/lib/utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200 transition-colors duration-150 hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
