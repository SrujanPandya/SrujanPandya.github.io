import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { navItems, site } from '../data/site.js';

// Enhancement: the name acts as the Home link; primary navigation now uses real routes.
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="masthead">
        <Link to="/" className="masthead-name editorial-link" aria-label="Srujan Pandya — home">
          {site.name}
        </Link>
        <p className="masthead-meta">{site.roleLine}</p>
      </div>

      <div className="nav-row">
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
