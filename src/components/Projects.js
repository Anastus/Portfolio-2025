import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    desc: "This is my Photography Portfolio",
    href: "https://photography-portfolio-pi-dun.vercel.app",
    tags: ["React", "Redux", "Responsive Design", "Javascript", "HTML", "CSS", "NodeJs"], 
  },
  {
    title: "Project Two",
    desc: "This is a Habit Tracker",
    href:"https://habit-tracker-nine-kohl.vercel.app/",
    tags: ["React", "Redux", "Responsive Design", "Javascript", "HTML", "CSS", "NodeJs"], 
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