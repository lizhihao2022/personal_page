"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { Project, Publication } from "@/content/site";
import { cn, isExternalLink } from "@/lib/utils";
import { Card } from "./Card";
import { ExternalIcon } from "./icons";
import { Tag } from "./Tag";

const linkLabels: Record<string, string> = {
  paper: "Paper",
  code: "GitHub",
  demo: "Demo",
  slides: "Slides",
  pdf: "PDF",
  arxiv: "arXiv",
  doi: "DOI",
  zhihu: "Zhihu",
};

type LinkListProps = {
  links: Record<string, string | undefined>;
  className?: string;
};

function LinkList({ links, className }: LinkListProps) {
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

  const getRepoFromHref = (href: string) => {
    const match = href.match(/github\.com\/(?<owner>[\w.-]+)\/(?<repo>[\w.-]+)/i);
    if (!match || !match.groups) return undefined;
    return `${match.groups.owner}/${match.groups.repo}`.toLowerCase();
  };

  const entries = Object.entries(links).filter(([, href]) => Boolean(href)) as [string, string][];
  if (!entries.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-3 text-sm text-slate-200", className)}>
      {entries.map(([key, href]) => (
        isExternalLink(href) ? (
          <a
            key={key}
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium focus-ring underline decoration-slate-500/60 decoration-2 underline-offset-4 transition hover:decoration-sky-300"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            <span>{linkLabels[key] ?? key}</span>
            {(() => {
              const repo = getRepoFromHref(href);
              const starCount = repo && data?.[repo];
              if (starCount === undefined) return null;
              return (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100 no-underline decoration-transparent">
                  ★ {starCount}
                </span>
              );
            })()}
          </a>
        ) : (
          <Link
            key={key}
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium focus-ring underline decoration-slate-500/60 decoration-2 underline-offset-4 transition hover:decoration-sky-300"
            prefetch
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            <span>{linkLabels[key] ?? key}</span>
            {(() => {
              const repo = getRepoFromHref(href);
              const starCount = repo && data?.[repo];
              if (starCount === undefined) return null;
              return (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100 no-underline decoration-transparent">
                  ★ {starCount}
                </span>
              );
            })()}
          </Link>
        )
      ))}
    </div>
  );
}

type FeaturedSectionProps = {
  projects: Project[];
  publications: Publication[];
  highlightAuthor?: string;
};

type CoverProps = {
  src?: string;
  alt: string;
  fallback: string;
};

function Cover({ src, alt, fallback }: CoverProps) {
  const source = src || fallback;
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-24 sm:w-36">
      <Image
        src={source}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 160px"
        priority={false}
      />
    </div>
  );
}

function renderAuthors(authors: string, highlight?: string) {
  if (!highlight) return authors;
  const parts = authors.split(",").map((p) => p.trim());
  return parts.map((part, idx) => {
    const isYou = part.toLowerCase().includes(highlight.toLowerCase());
    return (
      <span key={`${part}-${idx}`} className={isYou ? "font-semibold text-white" : undefined}>
        {part}
        {idx < parts.length - 1 ? ", " : ""}
      </span>
    );
  });
}

export function FeaturedSection({ projects, publications, highlightAuthor }: FeaturedSectionProps) {
  return (
    <div className="mt-12 space-y-12">
      <section className="fade-up" style={{ animationDelay: "220ms" }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="fade-up"
              style={{ animationDelay: `${260 + idx * 70}ms` }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <Cover src={project.cover} fallback="/project-placeholder.svg" alt={project.title} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <LinkList links={project.links} className="justify-start sm:justify-end" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-up" style={{ animationDelay: "260ms" }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Selected Publications</h2>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {publications.map((pub, idx) => (
            <Card
              key={`${pub.title}-${pub.year}`}
              className="fade-up"
              style={{ animationDelay: `${300 + idx * 60}ms` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <Cover src={pub.cover} fallback="/publication-placeholder.svg" alt={pub.title} />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{pub.venue}</span>
                    <span className="h-px w-4 rounded-full bg-white/30" aria-hidden />
                    <span>{pub.year}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">{pub.title}</h3>
                  <p className="text-sm text-slate-300">{renderAuthors(pub.authors, highlightAuthor)}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {pub.tags?.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <LinkList links={pub.links} className="justify-start sm:justify-end" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
