import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      ThemeProvider wraps everything so theme state (stored in localStorage
      and applied as data-theme on <html>) is shared across all pages.

      HashRouter is used instead of BrowserRouter because GitHub Pages is a
      static host — it cannot handle server-side URL rewriting. HashRouter
      puts the route after a '#' (e.g. /#/projects/1), which works natively
      on any static file server without a 404.html hack.
    */}
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
