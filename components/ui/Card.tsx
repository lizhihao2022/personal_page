import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-white/5 p-5 shadow-subtle transition",
        "hover:-translate-y-0.5 hover:border-white/10 hover:shadow-lg/10",
        "motion-reduce:transform-none",
        className,
      )}
      {...props}
    />
  );
}
