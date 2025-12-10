import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({project}){
  return (
    <motion.a
      
      className="project-card"
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      href={project.href} 
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        
      </div>
      <div className="project-tags">
        {project.tags.map((t, idx) => <span key={idx} className="tag">{t}</span>)}
      </div>
    </motion.a>
  );
}