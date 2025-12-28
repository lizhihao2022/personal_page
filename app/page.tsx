import React from "react";
import { siteConfig } from "@/content/site";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
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
        <FeaturedSection
          projects={siteConfig.featuredProjects}
          publications={siteConfig.selectedPublications}
        />
        <Footer contact={siteConfig.contact} />
      </main>
    </div>
  );
}
