import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import PageIntro from '../components/PageIntro.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { education, experience, skills } from '../data/cv.js';
import { projects } from '../data/projects.js';
import { researchItems } from '../data/research.js';
import { site } from '../data/site.js';

// Enhancement: accessible native CV replaces the PDF-only viewing experience while preserving PDF download/open links.
export default function CVPage() {
  const capstone = researchItems.find((item) => item.slug === 'cnn-autoencoder-lwd-compression');

  return (
    <div className="route-fade">
      <RouteMeta title="CV" description="Education, professional experience, and technical skills for Srujan Pandya." />
      <PageIntro eyebrow="curriculum vitae" title="CV">
        <p>
          A web-readable version of the résumé bundled with this site. The original PDF remains available for formal applications and printing.
        </p>
      </PageIntro>

      <div className="cv-actions">
        <a className="button-link editorial-link" href={site.cvPath} download="Srujan_Pandya_Resume.pdf">
          download PDF <Download size={13} />
        </a>
        <a className="text-link editorial-link" href={site.cvPath} target="_blank" rel="noreferrer">
          open PDF <ExternalLink size={13} />
        </a>
      </div>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-list">
          {education.map((item) => (
            <article key={item.institution} className="cv-item">
              <div>
                <h3>{item.institution}</h3>
                <p className="cv-role">{item.degree}</p>
                <p>{item.detail}</p>
              </div>
              <time>{item.dates}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional experience</h2>
        <div className="cv-list">
          {experience.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="cv-item cv-item-stacked">
              <div className="cv-item-heading">
                <div>
                  <h3>{item.role}</h3>
                  <p className="cv-role">{item.organization}</p>
                </div>
                <time>{item.dates}</time>
              </div>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {capstone && (
        <section className="cv-section">
          <h2>Industry capstone</h2>
          <div className="cv-list">
            <article className="cv-item cv-item-stacked">
              <div className="cv-item-heading">
                <div>
                  <h3>{capstone.title}</h3>
                  <p className="cv-role">{capstone.context}</p>
                </div>
                <time>{capstone.year}</time>
              </div>
              <p>{capstone.summary}</p>
            </article>
          </div>
        </section>
      )}

      <section className="cv-section">
        <h2>Selected projects</h2>
        <div className="cv-list">
          {projects.map((project) => (
            <article key={project.slug} className="cv-item">
              <div>
                <h3>{project.title}</h3>
                <p className="cv-role">{project.context}</p>
                <p>{project.summary}</p>
              </div>
              <time>{project.year}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Technical skills & certifications</h2>
        <dl className="skills-list">
          {skills.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.items}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
