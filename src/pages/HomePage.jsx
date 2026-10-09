import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RouteMeta from '../components/RouteMeta.jsx';
import { projects } from '../data/projects.js';
import { researchItems } from '../data/research.js';
import { site, updates } from '../data/site.js';
import { writingPosts } from '../data/writing.js';

// Enhancement: homepage now acts as a concise editorial index of research, writing, projects, and current work.
export default function HomePage() {
  const currentResearch = researchItems.find((item) => item.group === 'current');
  const latestWriting = writingPosts[0];
  const featuredProject = projects[0];

  return (
    <div className="route-fade home-page">
      <RouteMeta title="PhD researcher & writer" description={site.intro} />

      <section className="home-hero">
        <p className="eyebrow">research · engineering · writing</p>
        <h1>
          I study <em>soft matter</em> and charge transport in porous dielectric systems.
        </h1>
        <p>{site.intro}</p>
      </section>

      <div className="folio-stack">
        {currentResearch && (
          <section className="folio-section">
            <div className="folio-number">01</div>
            <div className="folio-content">
              <p className="eyebrow">current research</p>
              <Link className="feature-link editorial-link" to={`/research/${currentResearch.slug}`}>
                <h2>{currentResearch.title}</h2>
                <p>{currentResearch.context}</p>
                <span>read research note <ArrowUpRight size={13} /></span>
              </Link>
            </div>
          </section>
        )}

        {latestWriting && (
          <section className="folio-section">
            <div className="folio-number">02</div>
            <div className="folio-content">
              <p className="eyebrow">latest writing</p>
              <a className="feature-link editorial-link" href={latestWriting.url} target="_blank" rel="noreferrer">
                <h2>{latestWriting.title}</h2>
                <p>{site.substack.name} · {latestWriting.dateLabel}</p>
                <span>read on Substack <ArrowUpRight size={13} /></span>
              </a>
            </div>
          </section>
        )}

        {featuredProject && (
          <section className="folio-section">
            <div className="folio-number">03</div>
            <div className="folio-content">
              <p className="eyebrow">selected project</p>
              <Link className="feature-link editorial-link" to={`/projects/${featuredProject.slug}`}>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.context}</p>
                <span>explore project <ArrowUpRight size={13} /></span>
              </Link>
            </div>
          </section>
        )}
      </div>

      <section className="now-section">
        <div className="section-heading-row">
          <p className="eyebrow">now</p>
          <span>2026</span>
        </div>
        <ul>
          {updates.map((item) => (
            <li key={item.text}>
              <span aria-hidden="true">→</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
