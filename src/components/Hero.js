import React from "react";
import { motion } from "framer-motion";
// import ResumeButtons from "./ResumeButtons";

export default function Hero(){
  return (
    <motion.section
      id="home"
      className="hero-hero"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="hero-inner container">
        <div className="hero-left">
          <h1 className="hero-title">ANASTUS JOHN A</h1>
          <p className="hero-sub">Front-End Developer - React JS</p>
            <div className="hero-right">
            <div><strong>LOCATION: </strong><span>Chennai, India</span></div>
            </div>
          {/* <div className="hero-actions">
                      <p> <strong>RESUME :</strong><ResumeButtons /></p> 
                      
          </div> */}
        </div>

        <div className="hero-photo-wrap">
  <div className="photo-frame">
    <img src="/profile.jpg" alt="Profile" className="hero-photo" />
  </div>
</div>
        
      </div>
    </motion.section>
  );
}