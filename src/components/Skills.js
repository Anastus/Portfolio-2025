import React from "react";

const skills = [
  { name: "ReactJS", level: "Advanced — 90%" },
  { name: "JavaScript", level: "Advanced — 90%" },
  { name: "HTML", level: "Advanced — 90%" },
  { name: "CSS", level: "Advanced — 90%" },
  { name: "Redux", level: "Advanced — 90%" },
  { name: "NodeJS", level: "Intermediate — 80%" },
  { name: "Responsive Design", level: "Advanced — 90%" },
  { name: "Version Control", level: "Intermediate — 80%" },
  { name: "Web Development", level: "Advanced — 90%" }
];

export default function Skills() {
  return (
    <div className="container">
      <h2 className="section-title">SKILLS</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-item">
            {s.name}

            <div className="skill-tooltip">
              {s.level}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}