import React from "react";


export default function ResumeButtons() {
  const path = "/Anastus John A Resume 2025.pdf";

  return (
    <span className="resume-buttons">
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View Resume
      </a>

      <a
        href={path}
        download="Anastus John A Resume 2025.pdf"
        className="resume-btn"
      >
        Download Resume
      </a>
    </span>
  );
}