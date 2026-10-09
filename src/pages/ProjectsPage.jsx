import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { EntryList } from '../components/EntryList.jsx';
import RouteMeta from '../components/RouteMeta.jsx';
import { projects } from '../data/projects.js';

// Enhancement: projects use the same publication-style index language as research.
export default function ProjectsPage() {
  return (
    <div className="route-fade">
      <RouteMeta title="Projects" description="Selected robotics, controls, and mechanical engineering projects by Srujan Pandya." />
      <PageIntro eyebrow="selected work" title="Projects">
        <p>
          A small set of technical projects spanning robotics, controls, simulation, and computer vision. Each detail page is generated from one shared content model.
        </p>
      </PageIntro>
      <section className="index-section">
        <EntryList items={projects} routePrefix="/projects" />
      </section>
    </div>
  );
}
