import React from 'react';
import { Link } from 'react-router-dom';
import RouteMeta from '../components/RouteMeta.jsx';

// Enhancement: unknown clean routes receive an intentional site-native 404.
export default function NotFoundPage() {
  return (
    <section className="not-found route-fade">
      <RouteMeta title="Page not found" description="The requested portfolio page could not be found." />
      <p className="eyebrow">404</p>
      <h1>This page is not in the notebook.</h1>
      <p>The route may have moved, or the link may be incomplete.</p>
      <Link className="text-link editorial-link" to="/">return home →</Link>
    </section>
  );
}
