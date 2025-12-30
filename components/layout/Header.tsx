"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteLinks } from "@/content/site";
import { cn, isExternalLink, isMailLink } from "@/lib/utils";
import { DblpIcon, FileIcon, GithubIcon, LinkedinIcon, MailIcon, ScholarIcon } from "../icons";
import { Tabs } from "./Tabs";

type HeaderProps = {
  name: string;
  links: SiteLinks;
  compact: boolean;
};

const iconButtonClass =
  "rounded-full bg-white/5 p-2 text-slate-200/80 transition hover:-translate-y-[1px] hover:bg-white/10 hover:text-white focus-ring motion-reduce:transform-none";

export function Header({ name, links, compact }: HeaderProps) {
  const items = [
    { href: links.email, label: "Email", icon: MailIcon },
    { href: links.cv, label: "CV", icon: FileIcon },
    { href: links.github, label: "GitHub", icon: GithubIcon },
    { href: links.scholar, label: "Scholar", icon: ScholarIcon },
    links.linkedin ? { href: links.linkedin, label: "LinkedIn", icon: LinkedinIcon } : null,
    links.dblp ? { href: links.dblp, label: "DBLP", icon: DblpIcon } : null,
  ].filter(Boolean) as { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/5 transition-all duration-300",
        compact ? "bg-surface/90 backdrop-blur-md py-2" : "bg-surface/70 backdrop-blur-sm py-4",
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="#home" className="flex items-center gap-2 text-white no-underline focus-ring">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto object-contain" priority />
            <span className="text-sm font-semibold tracking-tight text-slate-100">{name}</span>
          </Link>
          <div className="flex items-center gap-1.5">
            {items.map((item) =>
              isExternalLink(item.href) || isMailLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={isExternalLink(item.href) ? "_blank" : undefined}
                  rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                  className={iconButtonClass}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ) : (
                <Link key={item.label} href={item.href} aria-label={item.label} className={iconButtonClass} prefetch>
                  <item.icon className="h-4 w-4" />
                </Link>
              ),
            )}
          </div>
        </div>
        <Tabs compact={compact} />
      </div>
    </header>
  );
}
