import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhancement: reusable editorial detail layout prevents project/research pages from drifting visually.
export default function DetailPage({ item, backTo, backLabel, kind = 'project' }) {
  const detail = item.detail || {};
  const tags = item.tags || [];
  const sections = detail.sections || item.sections || [];
  const tools = item.tools || [];

  return (
    <article className="detail-page route-fade">
      <Link to={backTo} className="back-link editorial-link">
        <ArrowLeft size={14} strokeWidth={1.6} /> {backLabel}
      </Link>

      <header className="detail-header">
        <p className="eyebrow">{kind} · {item.year} · {item.status || item.context}</p>
        <h1>{item.title}</h1>
        {item.context && <p className="detail-context">{item.context}</p>}
        <p className="detail-lead">{detail.lead || item.summary}</p>
        {tags.length > 0 && (
          <div className="tag-row" aria-label="Topics">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </header>

      <div className="detail-content">
        {sections.map((section) => {
          const paragraphs = section.paragraphs || [];
          const bullets = section.bullets || [];

          return (
            <section key={section.heading} className="detail-section">
              <h2>{section.heading}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {bullets.length > 0 && (
                <ul>
                  {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          );
        })}

        {tools.length > 0 && (
          <section className="detail-section">
            <h2>Tools & methods</h2>
            <p>{tools.join(' · ')}</p>
          </section>
        )}

        {detail.note && <aside className="research-note">{detail.note}</aside>}

        {item.externalUrl && (
          <a className="text-link editorial-link" href={item.externalUrl} target="_blank" rel="noreferrer">
            open original project material <ExternalLink size={13} strokeWidth={1.6} />
          </a>
        )}
      </div>
    </article>
  );
}
