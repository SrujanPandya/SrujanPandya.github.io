import React from 'react';

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro route-fade">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </header>
  );
}
