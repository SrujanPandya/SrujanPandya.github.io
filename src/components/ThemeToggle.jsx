import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { THEMES, useTheme } from '../ThemeContext.jsx';

// Enhancement: replaced the permanent three-way pill with a quieter two-state control.
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === THEMES.DEEP_FLUIDITY;
  const nextTheme = isDark ? THEMES.ACADEMIC_PARCHMENT : THEMES.DEEP_FLUIDITY;

  return (
    <button
      type="button"
      className="theme-switch editorial-link"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${isDark ? 'paper' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'paper' : 'dark'} theme`}
    >
      {isDark ? <Sun size={14} strokeWidth={1.6} /> : <Moon size={14} strokeWidth={1.6} />}
      <span>{isDark ? 'paper' : 'dark'}</span>
    </button>
  );
}
