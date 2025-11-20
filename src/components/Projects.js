import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    desc: "Responsive e-commerce UI built with React, Redux and custom hooks.",
    tags: ["React", "Redux", "Responsive"], 
  },
  {
    title: "Project Two",
    desc: "Dashboard with charts and lazy-loading components.",
    tags: ["React", "Charts", "Performance"], 
  },
  
];

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((p,i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
}