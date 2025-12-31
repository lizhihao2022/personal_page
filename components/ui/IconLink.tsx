import React from "react";
import Link from "next/link";
import { cn, isExternalLink, isMailLink } from "@/lib/utils";

type IconLinkProps = {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

export function IconLink({ href, label, className, children }: IconLinkProps) {
  const baseClass =
    "rounded-full border border-transparent bg-white/5 p-2 text-slate-200/80 transition hover:-translate-y-[1px] hover:bg-white/10 hover:text-white hover:border-sky-300 focus-visible:border-sky-300 focus-visible:ring-1 focus-visible:ring-sky-300 focus-visible:ring-offset-0 focus-ring motion-reduce:transform-none";

  if (isExternalLink(href) || isMailLink(href)) {
    return (
      <a
        href={href}
        aria-label={label}
        target={isExternalLink(href) ? "_blank" : undefined}
        rel={isExternalLink(href) ? "noreferrer" : undefined}
        className={cn(baseClass, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={cn(baseClass, className)} prefetch>
      {children}
    </Link>
  );
}
