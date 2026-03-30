import React, { createContext, useContext, useEffect, useState } from 'react';

// The three palette IDs available in the toggle
export const THEMES = {
  DEEP_FLUIDITY: 'deep-fluidity',
  CARBON_CHROME: 'carbon-chrome',
  SOFT_ROBOTICS: 'soft-robotics',
};

export const THEME_META = {
  [THEMES.DEEP_FLUIDITY]: {
    label: 'Dark — Deep Fluidity',
    shortLabel: 'Dark',
    swatches: ['#111110', '#C4973C', '#F2EFE8'],
  },
  [THEMES.CARBON_CHROME]: {
    label: 'Dim — Carbon & Chrome',
    shortLabel: 'Dim',
    swatches: ['#161819', '#A8B8C8', '#EAEEF2'],
  },
  [THEMES.SOFT_ROBOTICS]: {
    label: 'Light — Soft Robotics',
    shortLabel: 'Light',
    swatches: ['#E8EBE4', '#4A6A43', '#1A2018'],
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || THEMES.DEEP_FLUIDITY;
    }
    return THEMES.DEEP_FLUIDITY;
  });

  // Apply data-theme attribute and persist to localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Apply on mount so SSR/hydration flash is avoided
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES, themeMeta: THEME_META }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
