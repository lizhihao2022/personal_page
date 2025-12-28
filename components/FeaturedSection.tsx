import React from "react";
import Link from "next/link";
import { Project, Publication } from "@/content/site";
import { cn, isExternalLink } from "@/lib/utils";
import { Card } from "./Card";
import { ExternalIcon } from "./icons";
import { Tag } from "./Tag";

const linkLabels: Record<string, string> = {
  paper: "Paper",
  code: "Code",
  demo: "Demo",
  slides: "Slides",
  pdf: "PDF",
  arxiv: "arXiv",
  doi: "DOI",
};

type LinkListProps = {
  links: Record<string, string | undefined>;
};

function LinkList({ links }: LinkListProps) {
  const entries = Object.entries(links).filter(([, href]) => Boolean(href)) as [string, string][];
  if (!entries.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
      {entries.map(([key, href]) => (
        isExternalLink(href) ? (
          <a
            key={key}
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-white focus-ring"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            <span>{linkLabels[key] ?? key}</span>
          </a>
        ) : (
          <Link
            key={key}
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-white focus-ring"
            prefetch
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            <span>{linkLabels[key] ?? key}</span>
          </Link>
        )
      ))}
    </div>
  );
}

type FeaturedSectionProps = {
  projects: Project[];
  publications: Publication[];
};

export function FeaturedSection({ projects, publications }: FeaturedSectionProps) {
  return (
    <div className="mt-12 space-y-12">
      <section className="fade-up" style={{ animationDelay: "220ms" }}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured Work</p>
            <h2 className="mt-2 text-2xl font-semibold">Projects</h2>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="fade-up"
              style={{ animationDelay: `${260 + idx * 70}ms` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{project.description}</p>
                </div>
              </div>
              {project.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              ) : null}
              <LinkList links={project.links} />
            </Card>
          ))}
        </div>
      </section>

      <section className="fade-up" style={{ animationDelay: "260ms" }}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Writing</p>
            <h2 className="mt-2 text-2xl font-semibold">Selected Publications</h2>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {publications.map((pub, idx) => (
            <Card
              key={`${pub.title}-${pub.year}`}
              className="fade-up"
              style={{ animationDelay: `${300 + idx * 60}ms` }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{pub.venue}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{pub.title}</h3>
                  <p className="text-sm text-slate-300">{pub.authors}</p>
                  <p className="text-sm text-slate-400">{pub.year}</p>
                </div>
              </div>
              <LinkList links={pub.links} />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
