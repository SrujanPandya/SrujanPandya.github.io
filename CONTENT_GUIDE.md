# Content Guide

This file explains where to update the portfolio without touching the layout code.

## Identity, links, homepage statement, research interests

Edit:

```text
src/data/site.js
```

This file contains:

- name and role line
- email and social links
- homepage research statement
- research interests
- Substack URLs and tagline
- homepage “now” updates
- CV PDF path

## Research

Edit:

```text
src/data/research.js
```

Each research item has a stable `slug`, which becomes its URL.

Example:

```js
{
  slug: 'my-research-topic',
  year: '2027',
  status: 'ongoing',
  group: 'current',
  title: 'My research title',
  context: 'PhD research · University at Buffalo',
  tags: ['topic one', 'topic two'],
  summary: 'Short public summary.',
  detail: {
    lead: 'Opening paragraph.',
    sections: [
      {
        heading: 'Approach',
        paragraphs: ['Verified technical text goes here.'],
      },
    ],
  },
}
```

### Adding figures later

The refreshed site deliberately does **not** invent figures or equations. When real figures are ready:

1. put image files in `public/research/<slug>/`
2. add image metadata to the research data object
3. extend `DetailPage.jsx` with a reusable figure component

Keep captions factual and preferably use the same wording you would use in a paper, poster, or lab presentation.

## Projects

Edit:

```text
src/data/projects.js
```

Each project already has a detail page. Add another object using the same structure and it will automatically appear on `/projects`.

Avoid generic “challenge / solution / impact” language unless it accurately describes the project. The site is intentionally written more like a technical notebook than a product-design case study.

## Writing / Substack

The preferred workflow is automatic.

Run:

```bash
npm run sync:writing
```

or simply run a production build:

```bash
npm run build
```

The RSS sync updates:

```text
src/data/generated/substackPosts.json
```

If you ever change the publication URL, update `FEED_URL` in:

```text
scripts/sync-substack.mjs
```

and the Substack links in:

```text
src/data/site.js
```

## CV

The downloadable PDF lives at:

```text
public/Srujan_Pandya_Resume.pdf
```

The searchable web version is maintained in:

```text
src/data/cv.js
```

When your résumé changes, update both the PDF and the structured web data so they remain consistent.

## Navigation

Primary navigation is configured in:

```text
src/data/site.js
```

Routes themselves are defined in:

```text
src/App.jsx
```

Only add a top-level navigation item if it represents a durable part of the site. The current design intentionally avoids an “About” page because the homepage already carries identity/context and the CV carries biographical detail.

## Styling

All editorial styling and palette variables live in:

```text
src/index.css
```

The design uses semantic classes rather than per-element inline hover styles. That makes hover, keyboard, and theme behavior easier to keep consistent.
