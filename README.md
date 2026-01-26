# Writer's Portfolio Website

A clean, minimal, and aesthetic portfolio website for writers, featuring essays, movie reviews, blog posts, and more. Inspired by the elegant design of [aeon.co](https://aeon.co/).

## Features

- **Clean, Typography-First Design** — Beautiful serif fonts for content, sans-serif for UI elements
- **Responsive Layout** — Works beautifully on desktop, tablet, and mobile devices
- **Multiple Content Types** — Separate sections for essays, movie reviews, and blog posts
- **Reading-Optimized** — Generous whitespace, optimal line lengths, and comfortable reading experience
- **Smooth Interactions** — Subtle animations, mobile navigation, and reading progress indicator

## Pages

- **Homepage** (`index.html`) — Hero section with featured content from all categories
- **Essays** (`essays.html`) — Long-form philosophical and cultural essays
- **Movies** (`movies.html`) — Film reviews and cinema analysis
- **Blog** (`blog.html`) — Personal reflections and shorter observations
- **Article** (`article.html`) — Individual article template with full typography
- **About** (`about.html`) — Writer biography and contact information

## Design Philosophy

The design follows these principles:

1. **Minimal Color Palette** — Black, white, and subtle accents let the content shine
2. **Generous Whitespace** — Breathing room makes the reading experience comfortable
3. **Typography Hierarchy** — Clear distinction between titles, subtitles, and body text
4. **Content-First** — Design gets out of the way to let writing take center stage
5. **Accessibility** — Semantic HTML, proper heading structure, and keyboard navigation

## Technologies Used

- **HTML5** — Semantic markup for better SEO and accessibility
- **CSS3** — Custom properties, flexbox, and grid for modern layouts
- **Vanilla JavaScript** — Lightweight interactions without framework overhead
- **Google Fonts** — Crimson Pro (serif) and Inter (sans-serif)

## Getting Started

Simply open `index.html` in your web browser to view the website. All files are self-contained with no build process required.

```bash
# Navigate to the project directory
cd writer-portfolio

# Open in default browser (Windows)
start index.html

# Or simply double-click index.html in File Explorer
```

## Customization

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
  --color-accent: #2c5f8d;  /* Main accent color */
  --color-text: #1a1a1a;    /* Primary text color */
  /* ... more colors */
}
```

### Updating Content

Each HTML file contains sample content that you can replace with your own writing. The structure is clearly organized with semantic HTML classes.

### Adding New Articles

Use `article.html` as a template for new articles. Copy the file and update:
- Title and meta description in `<head>`
- Category, title, and subtitle in article header
- Main content in `.article-content`
- Tags at the bottom

## File Structure

```
writer-portfolio/
│
├── index.html          # Homepage
├── essays.html         # Essays listing
├── movies.html         # Movie reviews listing
├── blog.html           # Blog posts listing
├── article.html        # Individual article template
├── about.html          # About page
├── styles.css          # Complete design system
├── script.js           # JavaScript interactions
└── README.md           # This file
```

## Browser Compatibility

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Credits

Design inspired by [Aeon](https://aeon.co/), a magazine of ideas and culture known for its beautiful, readable design.

Fonts: [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts.

## License

Feel free to use this template for your own writer portfolio. Customize it, modify it, and make it your own!

---

**Note**: Remember to replace example email addresses, social media links, and sample content with your own information before publishing.
