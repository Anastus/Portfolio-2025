import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} ANASTUS JOHN'S PORTFOLIO</small>
      </div>
    </footer>
  );
}