import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

export default function App() {
  return (
    <Routes>
      {/* Main portfolio page */}
      <Route path="/" element={<Portfolio />} />

      {/* Individual project detail page, e.g. /#/projects/1 */}
      <Route path="/projects/:id" element={<ProjectDetail />} />

      {/* Fallback: any unknown route redirects to home */}
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
}
