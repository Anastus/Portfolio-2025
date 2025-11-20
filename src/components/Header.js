// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // when user scrolls > 20px, header becomes transparent
      setScrolled(window.scrollY > 20);
    };

    // run once to set initial state (in case the page loads scrolled)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // apply class 'transparent-on-scroll' when scrolled is true
  return (
    <header className={`header ${scrolled ? "header-transparent" : "header-solid"}`}>
      <div className="container header-inner">
        <div className="logo">PORTFOLIO</div>

        <nav className="nav" aria-label="Primary">
          <Link to="home" smooth offset={-70} duration={300}>HOME</Link>
          <Link to="projects" smooth offset={-70} duration={300}>PROJECTS</Link>
          <Link to="contact" smooth offset={-70} duration={300}>CONTACT</Link>
          {/* if you have a theme toggle keep it here */}
        </nav>
      </div>
    </header>
  );
}