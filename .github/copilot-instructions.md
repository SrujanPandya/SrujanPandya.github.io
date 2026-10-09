# Copilot instructions

## Project and architecture

This is a static React 18 portfolio built with Vite and React Router, deployed to the root GitHub Pages site `SrujanPandya.github.io`.

- `src/App.jsx` defines the clean URL routes; `src/components/SiteLayout.jsx` provides the shared header, main area, and footer.
- `src/pages/` contains route-level views; reusable page, detail, navigation, and metadata components live in `src/components/`.
- `src/data/` is the content source of truth for identity/navigation, research, projects, writing, and CV entries. Research and project slugs are public detail-page URLs.
- `src/ThemeContext.jsx` persists the two themes; `src/index.css` holds the editorial design system and theme tokens. `index.html` applies the stored theme before React starts.
- `scripts/sync-substack.mjs` refreshes the committed JSON writing cache before production builds.
- `public/404.html` and the route-restoration script in `index.html` preserve `BrowserRouter` deep links on GitHub Pages, which has no SPA rewrite rules.
- `.github/workflows/deploy.yml` installs with `npm ci`, builds with Node 20, and deploys `dist/`.

## Commands

Run these from this app's root directory:

- Install dependencies: `npm ci` (or `npm install` when changing dependencies)
- Start Vite: `npm run dev`
- Refresh Substack data: `npm run sync:writing`
- Build for production: `npm run build`
- Preview the build: `npm run preview`

There is no configured test runner, test script, or lint script, so there is no single-test command. Use `npm run build` to verify changes; it also runs `sync:writing` through the `prebuild` hook. The feed sync falls back to the committed `src/data/generated/substackPosts.json` if the feed cannot be reached.

## Repository conventions

- For content edits, update the relevant `src/data/*.js` file before changing a page component; `CONTENT_GUIDE.md` maps content types to their data files.
- Keep research and project slugs stable because they are used in public URLs and looked up by the detail-page route components.
- Keep public research claims factual. The README notes that methods, equations, figures, and results should not be invented or added until verified for publication.
- Match the site's concise, editorial, technical-notebook tone; avoid generic marketing case-study language unless it accurately describes the project.
- Keep identity and navigation in `src/data/site.js`; keep styles in `src/index.css` using semantic classes and the existing theme variables.
- The CV has two maintained representations: structured, searchable content in `src/data/cv.js` and the downloadable PDF in `public/Srujan_Pandya_Resume.pdf`.
- When changing the Substack publication, keep `scripts/sync-substack.mjs` and `src/data/site.js` feed/link values aligned.

## Browser tooling

The project-level `.mcp.json` configures Playwright MCP `0.0.83` for browser checks. It is started with `npx` on demand and runs headless; the package is not an application dependency.
