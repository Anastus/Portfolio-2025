// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const THEME_VARS = {
  light: {
    "--bg": "#ffffff",
    "--surface": "#ffffff",
    "--muted": "#6b7280",
    "--accent": "#0f1724",
    "--text": "#0f1724",
    "--card-border": "#f3f4f6",
  },
  dark: {
    "--bg": "#0b1220",
    "--surface": "#0f1724",
    "--muted": "#9aa6b2",
    "--accent": "#60a5fa",
    "--text": "#e6eef8",
    "--card-border": "rgba(255,255,255,0.06)",
  },
};

function applyVars(theme) {
  const root = document.documentElement;
  const vars = THEME_VARS[theme] || THEME_VARS.light;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s === "dark" || s === "light") return s;
    } catch {}
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    // apply immediately on mount
    applyVars(theme);
  }, []); // eslint-disable-line

  const toggle = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch {}
      applyVars(next);
      return next;
    });
  };

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  };

  return (
    <div
      className={`theme-toggle ${theme}`}
      role="switch"
      aria-checked={theme === "dark"}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKey}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="toggle-track"><div className="toggle-thumb" /></div>
    </div>
  );
}