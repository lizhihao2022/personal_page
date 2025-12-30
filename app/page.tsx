"use client";

import React from "react";
import Image from "next/image";
import { siteConfig, type ExperienceItem } from "@/content/site";
import { publicationEntries } from "@/content/publications";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { Header } from "@/components/layout/Header";
import { useHeaderMode } from "@/hooks/useHeaderMode";
import { ExternalIcon } from "@/components/icons";

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

  return (
    <div className="bg-surface text-slate-100">
      <Header name={siteConfig.name} links={siteConfig.links} compact={isCompact} />
      <main className="mx-auto max-w-3xl px-6 pb-16">
        <section id="home" className="scroll-mt-32 pt-6">
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
        </section>

        <section id="resume" className="scroll-mt-32 pt-16">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">Resume</h2>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
          </div>

          <div className="mt-8 space-y-12">
            {resume?.education?.length ? (
              <section>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Education</h3>
                  <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
                </div>
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
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Experience</h3>
                  <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
                </div>
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
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Academic Service</h3>
                  <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
                </div>
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
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Teaching</h3>
                  <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
                </div>
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
        </section>

        <section id="publications" className="scroll-mt-32 pt-16">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">Publications</h2>
            <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
          </div>
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
                    {pub.links?.length ? (
                      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                        {pub.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium focus-ring underline decoration-slate-500/60 decoration-2 underline-offset-4 transition hover:decoration-sky-300"
                          >
                            <ExternalIcon className="h-3.5 w-3.5" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Footer contact={siteConfig.contact} />
      </main>
    </div>
  );
}
