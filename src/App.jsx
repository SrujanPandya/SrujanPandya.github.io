import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import SiteLayout from './components/SiteLayout.jsx';
import CVPage from './pages/CVPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ResearchDetailPage from './pages/ResearchDetailPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import WritingPage from './pages/WritingPage.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Enhancement: portfolio sections are now shareable/bookmarkable routes instead of local tab state. */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<ResearchDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
