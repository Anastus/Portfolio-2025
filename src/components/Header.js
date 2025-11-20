import React from "react";
import { Link } from "react-scroll";

export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">PORTFOLIO</div>
        <nav className="nav">
          <Link to="home" smooth offset={-70} duration={300}>HOME</Link>
          <Link to="projects" smooth offset={-70} duration={300}>PROJECTS</Link>
          <Link to="contact" smooth offset={-70} duration={300}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}