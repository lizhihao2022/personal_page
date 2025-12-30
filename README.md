# Personal Homepage (Next.js)

Minimal single-page personal site built with Next.js (App Router) and Tailwind CSS. Content lives in a single file so you can edit text and links quickly.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the site.

## Editing Content

All editable text, links, projects, and publications are in `content/site.ts`. Update placeholders (name, tagline, bio, links, location, project/publication entries) and the UI will reflect your changes.

## Deployment

Deploy on Vercel:

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, create a new project from the repo.
3. Framework preset: **Next.js**. The default build command (`next build`) and output directory (`.next`) work.
4. After deployment, update any absolute URLs if you add them to metadata.

## Tech Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- ESLint + Prettier
- Content-first structure with no external data sources
