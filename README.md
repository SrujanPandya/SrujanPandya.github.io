# Research Portfolio

A minimal, elegant personal portfolio for a PhD researcher. Built with **React 18**, **Vite**, and **Tailwind CSS**. Designed with a Kindle-inspired warm palette.

## Project Structure

```
research-portfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── pages/
│   │   ├── Portfolio.jsx    # Main portfolio page (home, research, projects, writing, cv)
│   │   └── ProjectDetail.jsx# Individual project detail page
│   ├── App.jsx              # Route definitions
│   ├── index.css            # Tailwind directives + custom animations
│   └── main.jsx             # React root entry point
├── index.html               # HTML entry point (Google Fonts, SEO meta)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## Deploying to GitHub Pages

### Option A — Deploy `dist/` manually (simplest)

1. Build the project: `npm run build`
2. Push the contents of `dist/` to the `gh-pages` branch of your repository
3. In your repo → **Settings → Pages**, set source to the `gh-pages` branch, root `/`

### Option B — Use the `gh-pages` npm package (recommended)

```bash
# Install the deploy helper (one time)
npm install --save-dev gh-pages

# Add this to package.json "scripts":
#   "deploy": "gh-pages -d dist"

# Build and deploy in one step
npm run build && npx gh-pages -d dist
```

### Important: Repository Name

- If your repo is `yourusername.github.io`, the site root is `/`. The current `vite.config.js` (`base: './'`) works for this.
- If your repo has a different name (e.g. `portfolio`), your site will be at `yourusername.github.io/portfolio/`. In that case, update `vite.config.js`:
  ```js
  base: '/portfolio/',
  ```

---

## Customization Checklist

Before publishing, replace the placeholder content in `src/pages/Portfolio.jsx`:

- [ ] **Name** — search for `alex rivers` and replace with your name
- [ ] **Tagline** — update `phd student • philosophy of science`
- [ ] **Bio** — update the italic intro paragraph on the Home tab
- [ ] **Status items** — replace conference/dissertation placeholders
- [ ] **Research list** — fill in the `RESEARCH` array with your actual papers
- [ ] **Projects** — fill in the `PROJECTS` array
- [ ] **Writing** — fill in the `WRITING` array
- [ ] **Footer location** — replace `cambridge, uk`
- [ ] **Footer links** — update `mailto:`, Twitter, and GitHub hrefs
- [ ] **CV** — replace the placeholder in the CV tab with an `<iframe>` or PDF link
- [ ] **Copyright year** — update `© 2024`
- [ ] **Favicon** — edit `public/favicon.svg` with your actual initials

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React 18](https://react.dev/) | UI framework |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [lucide-react](https://lucide.dev/) | Icon set |
| [Google Fonts](https://fonts.google.com/) | Lora (serif) + Inter (sans) |
