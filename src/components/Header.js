// src/components/Header.js
import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import ResumeButtons from "./ResumeButtons";
import ThemeToggle from "./ThemeToggle"; // in same folder

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu when resizing larger than mobile
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 520 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${scrolled ? "header-transparent" : "header-solid"} liquid-glass`}>
      <div className="container header-inner">
        <div className="logo">PORTFOLIO</div>

        {/* center nav — left commented out links for now */}
        <nav className="nav" aria-label="Primary">
          {/* Uncomment and use react-scroll Links if desired */}
          {/*
          <Link to="home" smooth offset={-70} duration={300}>HOME</Link>
          <Link to="projects" smooth offset={-70} duration={300}>PROJECTS</Link>
          <Link to="contact" smooth offset={-70} duration={300}>CONTACT</Link>
          */}

          {/* keep resume-buttons in header for larger screens */}
          <div className="resume-controls" role="group" aria-label="Resume actions">
            <ResumeButtons />
          </div>
        </nav>

        {/* right side controls */}
        <div className="header-controls">
          <ThemeToggle />

          {/* mobile-only hamburger — visibility is controlled via CSS (media queries) */}
          <button
            type="button"
            className={`mobile-resume-toggle ${mobileMenuOpen ? "open" : ""}`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close resume menu" : "Open resume menu"}
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            {/* hamburger icon (do not alter) */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect y="1" width="20" height="2" rx="1" fill="currentColor"/>
              <rect y="6" width="20" height="2" rx="1" fill="currentColor"/>
              <rect y="11" width="20" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>

          {/* mobile dropdown menu (only visible when hamburger toggled) */}
          <div className={`mobile-resume-menu ${mobileMenuOpen ? "visible" : ""}`} role="menu" aria-hidden={!mobileMenuOpen}>
            <ResumeButtons />
          </div>
        </div>
      </div>
    </header>
  );
}