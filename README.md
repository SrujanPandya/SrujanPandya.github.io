# Srujan Pandya — Research Portfolio

A restrained research-and-writing portfolio for **Srujan Pandya**, built with React 18, Vite, React Router, Tailwind CSS, and a small custom editorial design system.

The 2026 refresh keeps the original site's quiet single-column aesthetic while changing the architecture from one large tabbed component into a routed, data-driven site that is easier to maintain throughout a PhD.

## What the site now contains

- `/` — editorial homepage with current research, latest writing, a selected project, and current updates
- `/research` — current and previous research index
- `/research/:slug` — individual research notes
- `/projects` — selected engineering projects
- `/projects/:slug` — project detail pages
- `/writing` — curated Substack index and subscription link
- `/cv` — searchable native HTML CV plus the downloadable PDF

## Project structure

```text
.
├── .github/workflows/deploy.yml     # GitHub Pages deployment
├── design-experiments/              # Preserved, non-production prototypes
├── public/
│   ├── 404.html                     # Clean-route fallback for GitHub Pages
│   ├── Srujan_Pandya_Resume.pdf     # Canonical downloadable résumé
│   ├── favicon.svg
│   ├── og-thumbnail.png
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── sync-substack.mjs            # Build-time RSS → local JSON sync
├── src/
│   ├── components/
│   │   ├── DetailPage.jsx
│   │   ├── EntryList.jsx
│   │   ├── PageIntro.jsx
│   │   ├── RouteMeta.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── SiteHeader.jsx
│   │   ├── SiteLayout.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── cv.js
│   │   ├── projects.js
│   │   ├── research.js
│   │   ├── site.js
│   │   ├── writing.js
│   │   └── generated/substackPosts.json
│   ├── pages/
│   │   ├── CVPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResearchDetailPage.jsx
│   │   ├── ResearchPage.jsx
│   │   └── WritingPage.jsx
│   ├── App.jsx
│   ├── ThemeContext.jsx
│   ├── index.css
│   └── main.jsx
├── CONTENT_GUIDE.md
├── UPDATES.md
└── package.json
```

## Local development

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Production build

```bash
npm run build
```

The `prebuild` hook first runs the Substack RSS synchronizer. If Substack is unavailable, the sync script logs a warning and the build continues using the committed fallback JSON.

To preview the final build:

```bash
npm run preview
```

## Substack integration

The writing page does not embed the Substack UI. Instead, the build script fetches:

```text
https://srujanpandya.substack.com/feed
```

and stores the newest posts in:

```text
src/data/generated/substackPosts.json
```

You can manually refresh it with:

```bash
npm run sync:writing
```

This keeps the live portfolio fast and static while allowing new writing to appear automatically on production builds.

## GitHub Pages deployment

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. Push the repository to the `main` branch of `SrujanPandya.github.io`.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The workflow installs dependencies, syncs writing, builds the site, and deploys `dist/`.

### Clean routes on GitHub Pages

The app uses `BrowserRouter`, so links look like `/research` rather than `/#/research`.

GitHub Pages does not provide SPA rewrite rules, so `public/404.html` redirects deep-link requests through the root document and `index.html` restores the original pathname before React starts. This is sufficient for normal navigation and direct links on GitHub Pages.

If the site later moves to a host with rewrite support (Netlify, Vercel, Cloudflare Pages, etc.), use a conventional SPA rewrite and remove the `404.html` workaround.

## Themes

The original three-theme selector has been simplified to two complementary editorial palettes:

- **Deep Fluidity** — near-black, ivory, warm gold
- **Academic Parchment** — warm paper, graphite, clay

The stored theme is applied in `index.html` before React/CSS paint to prevent a visible theme flash.

## Content maintenance

Most portfolio updates no longer require editing page components. See **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** for the exact files to edit when adding research, projects, writing, or CV content.

For a complete implementation log, see **[UPDATES.md](./UPDATES.md)**.

## Important content note

The former `ProjectDetail.jsx` contained placeholder text about quantum mapping, high-energy physics, dark matter, and an invented uncertainty coefficient. That content has been removed from the production site and preserved only inside `design-experiments/project_page.js` as design history.

The current doctoral research page intentionally stays high-level because the repository does not contain verified technical methods, equations, figures, or results for that work. Add those only when you are ready to publish them.
