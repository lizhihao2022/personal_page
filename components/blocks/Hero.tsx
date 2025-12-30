"use client";

import React from "react";
import Image from "next/image";
import { SiteConfig } from "@/content/site";

const labelStyles = "text-xs uppercase tracking-[0.2em] text-amber-300";

export function Hero({
  name,
  tagline,
  bio,
  links,
  avatar,
}: Pick<SiteConfig, "name" | "tagline" | "bio" | "links" | "avatar">) {
  const linkClass = 'class="underline decoration-slate-500/60 underline-offset-4 hover:decoration-sky-300"';
  const infoHubHref = "https://hkust-gz.edu.cn/academics/four-hubs/information-hub";
  const taglineWithLinks = tagline
    .replace("PhD Student", `<strong>PhD Student</strong>`)
    .replace("DSA Thrust", `<a href="https://dsa.hkust-gz.edu.cn/" target="_blank" rel="noreferrer" ${linkClass}>DSA Thrust</a>`)
    .replace("HKUST(GZ)", `<a href="https://hkust-gz.edu.cn/" target="_blank" rel="noreferrer" ${linkClass}>HKUST(GZ)</a>`)
    .replace("Information Hub", `<a href="${infoHubHref}" target="_blank" rel="noreferrer" ${linkClass}>Information Hub</a>`);
  const enhancedBio = bio
    .replace("DSA Thrust", `<a href="https://dsa.hkust-gz.edu.cn/" target="_blank" rel="noreferrer" ${linkClass}>DSA Thrust</a>`)
    .replace("HKUST(GZ)", `<a href="https://hkust-gz.edu.cn/" target="_blank" rel="noreferrer" ${linkClass}>HKUST(GZ)</a>`)
    .replace("Information Hub", `<a href="${infoHubHref}" target="_blank" rel="noreferrer" ${linkClass}>Information Hub</a>`);

  return (
    <section className="fade-up" style={{ animationDelay: "120ms" }}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className={labelStyles}>Profile</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">{name}</h1>
          <p
            className="mt-3 text-lg text-slate-200"
            dangerouslySetInnerHTML={{ __html: taglineWithLinks }}
          />
          <p
            className="mt-4 text-base leading-relaxed text-slate-300"
            dangerouslySetInnerHTML={{ __html: enhancedBio }}
          />
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
