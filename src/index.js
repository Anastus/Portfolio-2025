// src/index.js

// 1) KEEP imports at the very top (ESLint requirement)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // your global styles

// 2) Immediately initialize theme (after imports)
//    This prevents a flash of wrong theme while satisfying import/first.
(function initTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  } catch (e) {
    // ignore
  }
})();

// 3) Optional: unregister service workers to avoid stale cached assets during development
//    Keeps favicon/CSS issues from persisting while you iterate.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(r => r.unregister());
    if (caches) {
      caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
    }
  }).catch(()=>{});
}

// 4) Render app
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);