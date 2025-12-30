import React from "react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const displayDate = process.env.NEXT_PUBLIC_BUILD_DATE || siteConfig.lastUpdated || "N/A";
  return (
    <footer className="mt-16 border-t border-white/10 pt-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="flex flex-col gap-1">
          <span>
            © {year} {siteConfig.siteName}
          </span>
          <span className="text-white/50">{siteConfig.location}</span>
        </div>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <span className="font-mono text-white/60">Last updated: {displayDate}</span>
          {siteConfig.sourceUrl ? (
            <a
              href={siteConfig.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/50 transition hover:text-white/80 focus-ring"
            >
              Source
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
