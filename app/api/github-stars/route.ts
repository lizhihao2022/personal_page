import { NextResponse } from "next/server";
import { publicationEntries } from "@/content/publications";

const repos = Array.from(
  new Set(
    publicationEntries.flatMap((pub) =>
      pub.links
        .map((link) => link.repo)
        .filter((repo): repo is string => Boolean(repo)),
    ),
  ),
);

export const revalidate = 0; // always fresh

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const resp = await fetch(`https://api.github.com/repos/${repo}`, { headers, cache: "no-store" });
      if (!resp.ok) throw new Error(`Failed ${repo}`);
      const data = await resp.json();
      return { repo, stars: data.stargazers_count as number };
    }),
  );

  const stars: Record<string, number> = {};
  results.forEach((r) => {
    if (r.status === "fulfilled") {
      stars[r.value.repo] = r.value.stars;
    }
  });

  return NextResponse.json({ stars }, { status: 200 });
}
