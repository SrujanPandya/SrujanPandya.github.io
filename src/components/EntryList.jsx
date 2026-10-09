import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EntryList({ items, routePrefix, externalOnly = false }) {
  return (
    <div className="entry-list">
      {items.map((item, index) => {
        const content = (
          <>
            <div className="entry-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="entry-body">
              <div className="entry-meta">
                <span>{item.year || item.dateLabel}</span>
                {item.context && <span>{item.context}</span>}
              </div>
              <h3>{item.title}</h3>
              {item.summary && <p>{item.summary}</p>}
              <div className="entry-action">
                <span>{item.actionLabel || (item.url ? 'open' : 'read')}</span>
                <ArrowUpRight size={13} strokeWidth={1.6} />
              </div>
            </div>
          </>
        );

        const className = 'entry-row editorial-link';
        if ((externalOnly || item.url) && item.url) {
          return (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className={className}>
              {content}
            </a>
          );
        }

        return (
          <Link key={item.slug} to={`${routePrefix}/${item.slug}`} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
