# 2026 Portfolio Refresh — Change Log

This document records the architectural, design, content, and deployment changes made to the original portfolio repository.

## 1. Architecture

### Replaced tab state with routed pages

**Before:** `src/pages/Portfolio.jsx` held Home, Research, Projects, Writing, and CV in one component controlled by `useState('home')`.

**After:** dedicated routes and page components:

- `/`
- `/research`
- `/research/:slug`
- `/projects`
- `/projects/:slug`
- `/writing`
- `/cv`

Files involved:

- `src/App.jsx`
- `src/main.jsx`
- `src/pages/*`
- `src/components/SiteLayout.jsx`

### Added clean GitHub Pages deep-link handling

Changed from `HashRouter` to `BrowserRouter` for cleaner URLs.

Added:

- `public/404.html`
- route-restoration script in `index.html`

### Separated content from components

Created:

- `src/data/site.js`
- `src/data/research.js`
- `src/data/projects.js`
- `src/data/cv.js`
- `src/data/writing.js`

The site can now be updated largely by editing data rather than JSX layout.

## 2. Design system

### Preserved the core visual identity

Retained:

- narrow editorial reading column
- Lora + Inter typography
- serif-led intellectual tone
- thin rules and generous whitespace
- restrained accent color
- minimal animation

### Shifted toward “research notebook / literary journal”

Added:

- folio-style numeric homepage sections (`01`, `02`, `03`)
- editorial metadata lines
- publication-style project/research indices
- quieter section rules
- research-note callouts
- native text-first CV layout

### Simplified theme system

**Removed from production:**

- Carbon & Chrome
- Soft Robotics
- three-way swatch pill

**Current palettes:**

- Deep Fluidity
- Academic Parchment

Academic Parchment is based on the warm paper / graphite / clay palette already present in the original `palette-switcher.html` experiment.

The theme control is now a compact `dark` / `paper` toggle.

### Removed inline hover mutation

The original pages frequently changed colors via `onMouseEnter` / `onMouseLeave` and direct `element.style` mutation.

Those interactions now live in semantic CSS classes in `src/index.css`, improving consistency and keyboard accessibility.

### Added reduced-motion support

`prefers-reduced-motion` disables decorative animation for users who request it.

## 3. Homepage

The homepage now communicates all three important identities without requiring a visitor to choose a tab first:

1. current research
2. latest writing
3. selected technical project

The existing “updates” concept is retained as a compact “now” section.

The name itself functions as the Home link, so a separate `home` navigation label is no longer needed.

## 4. Research

### Removed the research search field

The original site had only two research entries, so search added more interface than utility. The new page groups content into:

- current
- previous
- research interests

Search can be added back when the body of work becomes large enough to justify it.

### Added research detail pages

Current doctoral research now has a dedicated route:

```text
/research/charge-transport-porous-dielectric-deposits
```

The page is intentionally conservative. The original repository did not contain verified methods, equations, results, or figures for the doctoral project, so none were fabricated.

The SLB capstone also receives a structured internal detail page while retaining the existing external report link.

## 5. Projects

### Replaced numeric IDs with stable slugs

**Before:**

```text
/projects/1
/projects/2
/projects/3
```

and all three rendered the same hard-coded placeholder page.

**After:**

```text
/projects/ur3-card-matching-vision
/projects/dual-quadcopter-aerial-delivery
/projects/patient-integrated-joint-impedance-control
```

Each route is generated from `src/data/projects.js` and displays project-specific content.

### Removed hallucinated placeholder material

The previous detail page contained content about:

- high-energy physics
- quantum mapping
- a made-up uncertainty coefficient
- dark matter
- “quantum history” / “ethics of observation” navigation

That content did not correspond to the project title or résumé and has been removed from production.

Project detail copy is now based on information already present in the original portfolio and bundled résumé.

## 6. Writing / Substack

### Removed the nonfunctional email input

The old subscribe box accepted an email address but did not submit anywhere.

The replacement links directly to Substack’s actual subscription page.

### Added build-time RSS sync

Created:

```text
scripts/sync-substack.mjs
```

The script fetches the public Substack RSS feed and writes the newest posts to:

```text
src/data/generated/substackPosts.json
```

`npm run build` invokes it automatically through `prebuild`.

The script is deliberately fail-safe: if the feed cannot be reached, the existing committed JSON remains in use and the build continues.

## 7. CV

### Replaced the PDF-first experience with native HTML

The `/cv` page now contains searchable, mobile-friendly HTML sections for:

- education
- professional experience
- technical skills and certifications

The content was transcribed from the résumé PDF already included in the repository.

The PDF is still available via:

- download button
- open-in-new-tab link

The redundant root-level copy of the résumé was removed. The canonical file is now only:

```text
public/Srujan_Pandya_Resume.pdf
```

## 8. SEO and metadata

Improved default metadata in `index.html` and added lightweight route-specific document title/description updates through:

```text
src/components/RouteMeta.jsx
```

Added:

- `public/robots.txt`
- `public/sitemap.xml`
- canonical URL
- theme-color metadata

## 9. Theme flash prevention

The original theme attribute was applied after React mounted, which could allow a visible initial theme flash.

A small synchronous script in `index.html` now applies the stored theme before the page paints.

Legacy theme preferences are migrated:

- `carbon-chrome` → `academic-parchment`
- `soft-robotics` → `academic-parchment`

## 10. Repository cleanup

Moved the following non-production experiments into `design-experiments/`:

- `palette-switcher.html`
- `project_page.js`
- `research_portfolio_index.js`

Added `design-experiments/README.md` explaining their purpose.

## 11. Deployment

Added GitHub Pages workflow:

```text
.github/workflows/deploy.yml
```

It:

1. checks out the repository
2. installs dependencies with `npm ci`
3. syncs Substack during the build
4. builds the Vite app
5. deploys the `dist/` directory through GitHub Pages Actions

## 12. Documentation

Added/rewritten:

- `README.md` — setup, architecture, deployment, Substack integration
- `CONTENT_GUIDE.md` — where to edit each content type
- `UPDATES.md` — this complete implementation log

## Files removed from production source

- `src/pages/Portfolio.jsx`
- `src/pages/ProjectDetail.jsx`
- root-level `Srujan_Pandya_Resume.pdf` duplicate

No original portfolio facts were intentionally replaced with invented biographical or research claims.
