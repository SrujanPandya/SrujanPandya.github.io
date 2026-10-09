import { useEffect } from 'react';

// Enhancement: lightweight per-route metadata without adding a head-management dependency.
export default function RouteMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Srujan Pandya` : 'Srujan Pandya — PhD Researcher';
    document.title = fullTitle;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (descriptionTag && description) descriptionTag.setAttribute('content', description);
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
