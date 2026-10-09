import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DetailPage from '../components/DetailPage.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { getProjectBySlug } from '../data/projects.js';

// Enhancement: each project slug resolves to its own verified content instead of one shared placeholder page.
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const item = getProjectBySlug(slug);

  if (!item) return <Navigate to="/projects" replace />;

  return (
    <>
      <RouteMeta title={item.title} description={item.summary} />
      <DetailPage item={item} backTo="/projects" backLabel="projects" kind="project" />
    </>
  );
}
