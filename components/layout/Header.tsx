"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { IconLink } from "@/components/ui/IconLink";
import { DblpIcon, FileIcon, GithubIcon, LinkedinIcon, MailIcon, ScholarIcon } from "../icons";
import { Tabs } from "./Tabs";

type HeaderProps = {
  name: string;
  links: SiteLinks;
  compact: boolean;
};

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
      <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-3 px-6 sm:grid-cols-[auto,1fr,auto]">
        <div className="flex items-center gap-3">
          <Link href="#home" className="flex items-center gap-2 text-white no-underline focus-ring">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto object-contain" priority />
            <span className="text-sm font-semibold tracking-tight text-slate-100">{name}</span>
          </Link>
        </div>
        <div className="flex justify-center sm:justify-center">
          <Tabs compact={compact} />
        </div>
        <div className="flex items-center justify-start gap-1.5 sm:justify-end">
          {items.map((item) => (
            <IconLink key={item.label} href={item.href} label={item.label}>
              <item.icon className="h-4 w-4" />
            </IconLink>
          ))}
        </div>
      </div>
    </header>
  );
}
