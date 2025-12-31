import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export function Card({ as: Component = "div", className, children, ...props }: CardProps) {
  const Element: any = Component;
  return (
    <Element
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-subtle transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg motion-reduce:transform-none",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-0 transition duration-200 group-hover:opacity-100" aria-hidden />
      <div className="relative z-10">{children}</div>
    </Element>
  );
}
