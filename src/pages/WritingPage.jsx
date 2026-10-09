import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../components/PageIntro.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { site } from '../data/site.js';
import { writingPosts } from '../data/writing.js';

// Enhancement: Substack stays the publishing/subscription backend while this page remains a curated editorial index.
export default function WritingPage() {
  return (
    <div className="route-fade">
      <RouteMeta title="Writing" description={`Essays from ${site.substack.name}, Srujan Pandya's non-technical writing.`} />
      <PageIntro eyebrow="essays & notes" title="Writing">
        <p>Non-technical essays published through {site.substack.name}. The portfolio acts as a quiet index while Substack remains the publication and subscription layer.</p>
      </PageIntro>

      <section className="newsletter-block">
        <div>
          <p className="eyebrow">{site.substack.name}</p>
          <blockquote>“{site.substack.tagline}”</blockquote>
        </div>
        <a className="button-link editorial-link" href={site.substack.subscribeUrl} target="_blank" rel="noreferrer">
          subscribe on Substack <ArrowUpRight size={13} />
        </a>
      </section>

      <section className="writing-list" aria-label="Writing archive">
        {writingPosts.map((post, index) => (
          <a key={post.url} className="writing-row editorial-link" href={post.url} target="_blank" rel="noreferrer">
            <span className="writing-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="writing-title">{post.title}</span>
            <span className="writing-date">{post.dateLabel}</span>
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </a>
        ))}
      </section>

      <a className="text-link editorial-link writing-all" href={site.substack.homeUrl} target="_blank" rel="noreferrer">
        all writing on Substack <ArrowUpRight size={13} />
      </a>
    </div>
  );
}
