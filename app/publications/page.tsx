"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { ExternalIcon } from "@/components/icons";
import { publicationEntries } from "@/content/publications";
import { siteConfig } from "@/content/site";
import Image from "next/image";
import useSWR from "swr";

const typeLabels: Record<string, string> = {
  C: "Conference",
  J: "Journal",
  P: "Preprint",
  T: "Thesis",
};

function highlightAuthor(authors: string) {
  return authors.split(/,\s*/).map((author, idx) => {
    const isMe = author.toLowerCase().includes("zhihao li");
    const suffix = idx < authors.split(/,\s*/).length - 1 ? ", " : "";
    return (
      <span key={`${author}-${idx}`} className={isMe ? "font-semibold text-white" : undefined}>
        {author}
        {suffix}
      </span>
    );
  });
}

function LinkList({ links }: { links: { label: string; href: string; stars?: number; repo?: string }[] }) {
  const { data } = useSWR<Record<string, number>>(
    "/api/github-stars",
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch stars");
      const json = await res.json();
      return (json?.stars ?? {}) as Record<string, number>;
    },
    { revalidateOnFocus: false },
  );

  return (
    <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-200">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium focus-ring underline decoration-slate-500/60 decoration-2 underline-offset-4 transition hover:decoration-sky-300"
        >
          <ExternalIcon className="h-3.5 w-3.5" />
          <span>{link.label}</span>
          {(() => {
            const starCount =
              link.repo && data?.[link.repo] !== undefined ? data[link.repo] : link.stars;
            if (starCount === undefined) return null;
            return (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100 no-underline decoration-transparent">
                ★ {starCount}
              </span>
            );
          })()}
        </a>
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <div className="bg-surface text-slate-100">
      <Navbar name={siteConfig.name} links={siteConfig.links} />
      <main className="mx-auto max-w-3xl px-6 pb-16 pt-10 sm:pt-14">
        <Hero
          name={siteConfig.name}
          tagline={siteConfig.tagline}
          bio={siteConfig.bio}
          links={siteConfig.links}
          avatar={siteConfig.avatar}
        />

        <section className="mt-12 space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">Publications</h2>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
          </div>

          <div className="mt-6 space-y-4">
            {publicationEntries.map((pub) => (
              <Card key={pub.id} className="fade-up overflow-hidden">
                <div className="relative">
                  {pub.logo ? (
                    <div
                      className="pointer-events-none absolute right-2 top-1 h-12 w-12 opacity-25 sm:right-3 sm:top-2 sm:h-16 sm:w-16"
                      style={{ transform: "translate(20%, -50%)" }}
                    >
                      <Image
                        src={pub.logo}
                        alt={`${pub.id} logo`}
                        fill
                        className="object-contain"
                        sizes="56px"
                      />
                    </div>
                  ) : null}
                  <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <span className="font-semibold text-amber-200">[{pub.id}]</span>
                        <span className="text-slate-400">{typeLabels[pub.type]}</span>
                        <span className="text-slate-500">{pub.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                      <p className="text-sm text-slate-200">{highlightAuthor(pub.authors)}</p>
                      <p className="text-sm text-slate-400 italic">{pub.venue}</p>
                    </div>
                  </div>
                  <div className="relative mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {pub.tags?.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    {pub.links?.length ? <LinkList links={pub.links} /> : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
