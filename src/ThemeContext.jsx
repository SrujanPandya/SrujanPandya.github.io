import React, { createContext, useContext, useEffect, useState } from 'react';

// Enhancement: simplified to two complementary editorial palettes: dark ink + warm paper.
export const THEMES = {
  DEEP_FLUIDITY: 'deep-fluidity',
  ACADEMIC_PARCHMENT: 'academic-parchment',
};

const ThemeContext = createContext(null);
const STORAGE_KEY = 'portfolio-theme';

function normalizeStoredTheme(value) {
  if (Object.values(THEMES).includes(value)) return value;

  // Migration: legacy "dim" and "light" themes become the new paper theme.
  if (value === 'carbon-chrome' || value === 'soft-robotics') return THEMES.ACADEMIC_PARCHMENT;
  return THEMES.DEEP_FLUIDITY;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return THEMES.DEEP_FLUIDITY;
    return normalizeStoredTheme(window.localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
