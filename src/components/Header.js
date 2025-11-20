// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle"; // in same folder

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-transparent" : "header-solid"} liquid-glass`}>
      <div className="container header-inner">
        <div className="logo">PORTFOLIO</div>

        {/* center nav — we center with CSS below */}
        <nav className="nav" aria-label="Primary">
          <Link to="home" smooth offset={-70} duration={300}>HOME</Link>
          <Link to="projects" smooth offset={-70} duration={300}>PROJECTS</Link>
          <Link to="contact" smooth offset={-70} duration={300}>CONTACT</Link>
        </nav>

        {/* right side controls */}
        <div className="header-controls">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}