import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Section id="home" className="hero-outer">
          <Hero />
        </Section>

        <Section id="about">
          <About />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>
        
        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;