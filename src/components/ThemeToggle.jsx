import React from 'react';
import { useTheme, THEMES, THEME_META } from '../ThemeContext';

/**
 * ThemeToggle — a 3-way pill button for switching between:
 *   Deep Fluidity | Carbon & Chrome | Soft Robotics
 *
 * Designed to sit inline in the site navigation.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themeOrder = [
    THEMES.DEEP_FLUIDITY,
    THEMES.CARBON_CHROME,
    THEMES.SOFT_ROBOTICS,
  ];

  return (
    <div className="theme-toggle-wrap" role="group" aria-label="Color theme">
      <div className="theme-toggle-pill">
        {themeOrder.map((t) => {
          const meta = THEME_META[t];
          const isActive = theme === t;
          return (
            <button
              key={t}
              onClick={() => setTheme(t)}
              aria-pressed={isActive}
              aria-label={`Switch to ${meta.label} theme`}
              className={`theme-toggle-btn${isActive ? ' active' : ''}`}
              title={meta.label}
            >
              {/* Three decorative swatches */}
              <span className="theme-toggle-swatches" aria-hidden="true">
                {meta.swatches.map((color, i) => (
                  <span
                    key={i}
                    className="theme-swatch"
                    style={{ background: color }}
                  />
                ))}
              </span>
              <span className="theme-toggle-label">{meta.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
