import React from "react";
import Link from "next/link";
import { cn, isExternalLink, isMailLink } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium no-underline transition duration-150 focus-ring hover:border-white/30 hover:text-white active:scale-[0.98] motion-reduce:transform-none";

const variants = {
  primary: "bg-white text-surface hover:bg-slate-100",
  ghost: "bg-white/5 text-slate-100 hover:bg-white/10",
};

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function LinkButton({ href, children, variant = "ghost", className }: LinkButtonProps) {
  const external = isExternalLink(href);
  const mail = isMailLink(href);

  if (external || mail) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      prefetch
    >
      {children}
    </Link>
  );
}
