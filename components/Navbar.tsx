"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLinks } from "@/content/site";
import { cn, isExternalLink, isMailLink } from "@/lib/utils";
import { FileIcon, GithubIcon, LinkedinIcon, MailIcon, ScholarIcon } from "./icons";

type NavbarProps = {
  name: string;
  links: SiteLinks;
};

const iconButtonClass =
  "rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 no-underline transition hover:-translate-y-[1px] hover:border-white/30 hover:text-white focus-ring motion-reduce:transform-none";

export function Navbar({ name, links }: NavbarProps) {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
  ];
  const items = [
    { href: links.email, label: "Email", icon: MailIcon },
    { href: links.cv, label: "CV", icon: FileIcon },
    { href: links.github, label: "GitHub", icon: GithubIcon },
    { href: links.scholar, label: "Scholar", icon: ScholarIcon },
    links.linkedin ? { href: links.linkedin, label: "LinkedIn", icon: LinkedinIcon } : null,
  ].filter(Boolean) as { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[];

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white no-underline focus-ring">
            <span className="text-sm uppercase text-slate-400">Portfolio</span>
            <span className="text-base">{name}</span>
          </Link>
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm no-underline transition focus-ring",
                    active
                      ? "bg-white text-surface"
                      : "border border-white/10 text-slate-200 hover:border-white/30 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <nav className="flex items-center gap-2">
          {items.map((item) => (
            isExternalLink(item.href) || isMailLink(item.href) ? (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={isExternalLink(item.href) ? "_blank" : undefined}
                rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                className={cn(iconButtonClass)}
              >
                <item.icon className="h-4 w-4" />
              </a>
            ) : (
              <Link key={item.label} href={item.href} aria-label={item.label} className={cn(iconButtonClass)} prefetch>
                <item.icon className="h-4 w-4" />
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
