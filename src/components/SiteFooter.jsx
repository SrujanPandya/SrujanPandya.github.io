import React from 'react';
import { Github, Linkedin, Mail, Rss } from 'lucide-react';
import { site } from '../data/site.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links" aria-label="External links">
        <a className="icon-link" href={`mailto:${site.email}`} aria-label="Email" title="Email">
          <Mail size={17} strokeWidth={1.5} />
        </a>
        <a className="icon-link" href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <Linkedin size={17} strokeWidth={1.5} />
        </a>
        <a className="icon-link" href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <Github size={17} strokeWidth={1.5} />
        </a>
        <a className="icon-link" href={site.links.substack} target="_blank" rel="noreferrer" aria-label="Substack" title="Substack">
          <Rss size={17} strokeWidth={1.5} />
        </a>
      </div>
      <div className="footer-copy">
        <p>{site.name.toLowerCase()} · {site.location.toLowerCase()}</p>
        <p>what you see here is all mine · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
