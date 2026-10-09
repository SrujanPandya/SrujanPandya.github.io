import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

// Enhancement: one shared shell guarantees consistent spacing, navigation, and footer across routes.
export default function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-column">
        <SiteHeader />
        <main className="site-main">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
