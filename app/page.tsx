"use client";

import React from "react";
import Image from "next/image";
import { siteConfig, type ExperienceItem } from "@/content/site";
import { publicationEntries } from "@/content/publications";
import { FeaturedSection } from "@/components/blocks/FeaturedSection";
import { Hero } from "@/components/blocks/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { ExternalIcon } from "@/components/icons";
import { useHeaderMode } from "@/hooks/useHeaderMode";
import useSWR from "swr";

type HighlightItem = NonNullable<ExperienceItem["highlights"]>[number];
const typeLabels: Record<string, string> = {
  C: "Conference",
  J: "Journal",
  P: "Preprint",
  T: "Thesis",
};

function renderHighlight(item: HighlightItem) {
  if (!item.url) return item.label;
  const [prefix, ...rest] = item.label.split(":");
  if (rest.length) {
    const name = rest.join(":").trim();
    return (
      <>
        <span className="text-slate-400">{prefix}:</span>{" "}
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-slate-500/60 underline-offset-4 transition hover:decoration-amber-300"
        >
          {name}
        </a>
      </>
    );
  }
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-slate-500/60 underline-offset-4 transition hover:decoration-amber-300"
    >
      {item.label}
    </a>
  );
}

function highlightAuthor(authors: string) {
  const list = authors.split(/,\s*/);
  return list.map((author, idx) => {
    const isMe = author.toLowerCase().includes(siteConfig.name.toLowerCase());
    const suffix = idx < list.length - 1 ? ", " : "";
    return (
      <span key={`${author}-${idx}`} className={isMe ? "font-semibold text-white" : undefined}>
        {author}
        {suffix}
      </span>
    );
  });
}

export default function HomePage() {
  const { sentinelRef, isCompact } = useHeaderMode();
  const resume = siteConfig.resume;
  const { data: starData } = useSWR<Record<string, number>>(
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

  return (
    <div className="bg-surface text-slate-100">
      <Header name={siteConfig.name} links={siteConfig.links} compact={isCompact} />
      <main className="mx-auto max-w-3xl px-6 pb-16">
        <Section id="home" className="pt-6">
          <Hero
            name={siteConfig.name}
            tagline={siteConfig.tagline}
            bio={siteConfig.bio}
            links={siteConfig.links}
            avatar={siteConfig.avatar}
          />
          <div ref={sentinelRef} aria-hidden className="h-px w-full opacity-0" />
          <div className="mt-12">
            <FeaturedSection
              projects={siteConfig.featuredProjects}
              publications={siteConfig.selectedPublications}
              highlightAuthor={siteConfig.name}
            />
          </div>
        </Section>

        <Section id="resume" className="pt-16">
          <SectionHeading title="Resume" />

          <div className="mt-8 space-y-12">
            {resume?.education?.length ? (
              <section>
                <SectionHeading title="Education" size="sm" accentWidth="w-10" />
                <div className="mt-6 space-y-4">
                  {resume.education.map((edu) => (
                    <Card key={`${edu.school}-${edu.period}`} className="overflow-hidden">
                      <div className="relative">
                        {edu.logo ? (
                          <div
                            className="pointer-events-none absolute right-2 top-3 h-12 w-12 opacity-25 sm:right-3 sm:top-4 sm:h-16 sm:w-16"
                            style={{ transform: "translate(20%, -30%)" }}
                          >
                            <Image src={edu.logo} alt={`${edu.school} logo`} fill className="object-contain" sizes="56px" />
                          </div>
                        ) : null}
                        <div className="relative z-10 flex flex-col gap-2">
                          <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 break-words">{edu.school}</p>
                            <p className="text-sm text-slate-400">{edu.period}</p>
                            <h4 className="mt-1 text-lg font-semibold text-white">{edu.degree}</h4>
                          </div>
                          {edu.details ? <p className="text-sm text-slate-300">{edu.details}</p> : null}
                          {edu.highlights?.length ? (
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                              {edu.highlights.map((item) => (
                                <li key={item.label}>{renderHighlight(item)}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ) : null}

            {resume?.experience?.length ? (
              <section>
                <SectionHeading title="Experience" size="sm" accentWidth="w-10" />
                <div className="mt-6 space-y-4">
                  {resume.experience.map((exp) => (
                    <Card key={`${exp.role}-${exp.organization}-${exp.period}`} className="overflow-hidden">
                      <div className="relative">
                        {exp.logo ? (
                          <div
                            className="pointer-events-none absolute right-2 top-3 h-12 w-12 opacity-25 sm:right-3 sm:top-4 sm:h-16 sm:w-16"
                            style={{ transform: "translate(20%, -30%)" }}
                          >
                            <Image src={exp.logo} alt={`${exp.organization} logo`} fill className="object-contain" sizes="56px" />
                          </div>
                        ) : null}
                        <div className="relative z-10 flex flex-col gap-2">
                          <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 break-words">{exp.organization}</p>
                            <div className="flex flex-wrap items-baseline gap-2">
                              <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                              <span className="text-sm text-slate-400">{exp.period}</span>
                            </div>
                          </div>
                          {exp.details ? <p className="text-sm text-slate-300">{exp.details}</p> : null}
                          {exp.highlights?.length ? (
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                              {exp.highlights.map((item) => (
                                <li key={item.label}>{renderHighlight(item)}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ) : null}

            {resume?.academicService?.length ? (
              <section className="space-y-3">
                <SectionHeading title="Academic Service" size="sm" accentWidth="w-10" />
                <Card>
                  <div className="flex flex-wrap gap-2">
                    {resume.academicService.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Card>
              </section>
            ) : null}

            {resume?.teaching?.length ? (
              <section className="space-y-3">
                <SectionHeading title="Teaching" size="sm" accentWidth="w-10" />
                {resume.teaching.map((teach) => (
                  <Card key={teach.role + teach.institution}>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{teach.role}</p>
                      <p className="text-base text-slate-200">
                        <em>{teach.institution}</em>
                      </p>
                    </div>
                    {teach.courses?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                        {teach.courses.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                ))}
              </section>
            ) : null}
          </div>
        </Section>

        <Section id="publications" className="pt-16">
          <SectionHeading title="Publications" />
          <div className="mt-6 space-y-4">
            {publicationEntries.map((pub, idx) => (
              <Card key={pub.id} className="fade-up overflow-hidden" style={{ animationDelay: `${200 + idx * 60}ms` }}>
                <div className="relative">
                  {pub.logo ? (
                    <div
                      className="pointer-events-none absolute right-2 top-1 h-12 w-12 opacity-25 sm:right-3 sm:top-2 sm:h-16 sm:w-16"
                      style={{ transform: "translate(20%, -50%)" }}
                    >
                      <Image src={pub.logo} alt={`${pub.id} logo`} fill className="object-contain" sizes="56px" />
                    </div>
                  ) : null}
                  <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <span className="font-semibold text-amber-200">[{pub.id}]</span>
                        <span className="text-slate-400">{typeLabels[pub.type] ?? pub.type}</span>
                        <span className="text-slate-500">{pub.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm text-slate-200">{highlightAuthor(pub.authors)}</p>
                        {pub.links?.length ? (
                          <div className="flex flex-wrap items-center gap-1.5 text-sm text-slate-200">
                            {pub.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium focus-ring underline decoration-slate-500/60 decoration-2 underline-offset-4 transition hover:decoration-sky-300"
                              >
                                <ExternalIcon className="h-3.5 w-3.5" />
                                <span>{link.label}</span>
                                {(() => {
                                  const repo = link.repo ?? getRepoFromHref(link.href);
                                  const starCount = repo ? starData?.[repo.toLowerCase()] ?? link.stars : undefined;
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
                        ) : null}
                      </div>
                      <p className="text-sm text-slate-400 italic">{pub.venue}</p>
                    </div>
                  </div>
                  <div className="relative mt-3 flex flex-wrap gap-2">
                    {pub.tags?.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
