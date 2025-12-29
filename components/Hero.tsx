"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteConfig } from "@/content/site";

const labelStyles = "text-xs uppercase tracking-[0.2em] text-amber-300";

export function Hero({
  name,
  tagline,
  bio,
  links,
  avatar,
}: Pick<SiteConfig, "name" | "tagline" | "bio" | "links" | "avatar">) {
  const pathname = usePathname();
  const tabs = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Publications", href: "/publications" },
  ];
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => pathname === tab.href || pathname.startsWith(`${tab.href}/`)),
  );

  return (
    <section className="fade-up" style={{ animationDelay: "120ms" }}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className={labelStyles}>Profile</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">{name}</h1>
          <p className="mt-3 text-lg text-slate-200">{tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{bio}</p>
          <div className="mt-6 inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-300">
            <div className="relative h-3 w-80 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-full bg-white/25 transition-transform duration-400 ease-out will-change-transform"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
                aria-hidden
              />
              {tabs.map((tab, idx) => {
                const position = idx === 0 ? "left-0" : idx === 1 ? "left-1/3" : "left-2/3";
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`absolute inset-y-0 ${position} z-10 flex w-1/3 items-center justify-center no-underline text-slate-200 transition hover:text-white focus-ring`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {avatar ? (
          <div className="flex shrink-0 justify-center">
            <Image
              src={avatar}
              alt={`${name} portrait`}
              width={140}
              height={140}
              className="h-28 w-28 rounded-full border border-white/10 object-cover shadow-subtle sm:h-32 sm:w-32"
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
