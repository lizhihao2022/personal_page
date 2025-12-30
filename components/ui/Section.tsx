import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

type SectionHeadingProps = {
  title: string;
  accentWidth?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-32", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({ title, accentWidth = "w-12", size = "lg", className }: SectionHeadingProps) {
  const sizeClass =
    size === "lg"
      ? "text-2xl"
      : size === "md"
        ? "text-xl"
        : "text-sm font-semibold uppercase tracking-[0.22em] text-slate-300";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <h2 className={cn(sizeClass, size !== "sm" && "font-semibold text-white")}>{title}</h2>
      <span
        className={cn(
          "h-[2px] rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0",
          accentWidth,
          size === "sm" && "mt-[2px]",
        )}
        aria-hidden
      />
    </div>
  );
}
