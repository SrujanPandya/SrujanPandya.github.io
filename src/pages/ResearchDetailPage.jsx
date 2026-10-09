import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DetailPage from '../components/DetailPage.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { getResearchBySlug } from '../data/research.js';

// Enhancement: stable research slugs now resolve to data-driven detail pages.
export default function ResearchDetailPage() {
  const { slug } = useParams();
  const item = getResearchBySlug(slug);

  if (!item) return <Navigate to="/research" replace />;

  return (
    <>
      <RouteMeta title={item.title} description={item.summary} />
      <DetailPage item={item} backTo="/research" backLabel="research" kind="research" />
    </>
  );
}
