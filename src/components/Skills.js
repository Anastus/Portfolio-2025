import React from "react";

const skills = ["ReactJS", "Javascript", "HTML", "CSS", "Redux", "NodeJS", "Responsive Design", "Version Control", "Web Development"];

export default function Skills() {
  return (
    <div className="container">
      <h2 className="section-title">SKILLS</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}