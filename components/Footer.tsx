import React from "react";
import { SiteConfig } from "@/content/site";

export function Footer({ contact }: Pick<SiteConfig, "contact">) {
  return (
    <footer className="mt-16 border-t border-white/5 pt-8">
      <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">Get in touch</p>
          <p className="mt-1 text-sm text-slate-400">{contact.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 no-underline transition hover:bg-white/10 focus-ring"
          >
            {contact.email}
          </a>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">Minimal personal page built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
