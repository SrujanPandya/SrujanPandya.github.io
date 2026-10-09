import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { EntryList } from '../components/EntryList.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { researchItems } from '../data/research.js';
import { site } from '../data/site.js';

// Enhancement: research is grouped by status instead of using an unnecessary search box for a small collection.
export default function ResearchPage() {
  const current = researchItems.filter((item) => item.group === 'current');
  const previous = researchItems.filter((item) => item.group === 'previous');

  return (
    <div className="route-fade">
      <RouteMeta title="Research" description="Current and previous research by Srujan Pandya." />
      <PageIntro eyebrow="research" title="Research">
        <p>
          Current doctoral work and selected previous technical research. The site keeps public-facing summaries concise and links outward when longer material already exists.
        </p>
      </PageIntro>

      <section className="index-section">
        <div className="section-heading-row">
          <h2>current</h2>
          <span>{current.length}</span>
        </div>
        <EntryList items={current} routePrefix="/research" />
      </section>

      <section className="index-section">
        <div className="section-heading-row">
          <h2>previous</h2>
          <span>{previous.length}</span>
        </div>
        <EntryList items={previous} routePrefix="/research" />
      </section>

      <section className="interest-section">
        <p className="eyebrow">research interests</p>
        <p>{site.researchInterests.join(' / ')}</p>
      </section>
    </div>
  );
}
