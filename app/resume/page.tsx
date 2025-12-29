import React from "react";
import { siteConfig, type ExperienceItem } from "@/content/site";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PageTabs } from "@/components/PageTabs";
import Image from "next/image";

export const metadata = {
  title: "Resume",
};

type HighlightItem = NonNullable<ExperienceItem["highlights"]>[number];

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

export default function ResumePage() {
  const resume = siteConfig.resume;

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
        <div className="sticky top-5 z-30 mt-6 flex justify-start md:justify-center">
          <PageTabs className="md:-translate-x-14" />
        </div>

        <div className="mt-12 space-y-12">
          {resume?.education?.length ? (
            <section>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-white">Education</h2>
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
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
                          <h3 className="mt-1 text-lg font-semibold text-white">{edu.degree}</h3>
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
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
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
                            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                            <span className="text-sm text-slate-400">{exp.period}</span>
                          </div>
                        </div>
                        {exp.details ? <p className="text-sm text-slate-300">{exp.details}</p> : null}
                        {exp.highlights?.length ? (
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                            {exp.highlights.map((item) => (
                              <li key={item.label}>
                                {renderHighlight(item)}
                              </li>
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
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-white">Academic Service</h2>
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
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
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold text-white">Teaching</h2>
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-300/90 to-amber-300/0" aria-hidden />
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
      </main>
    </div>
  );
}
