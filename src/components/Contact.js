// src/components/Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Animated Contact section with:
 * - animated contact cards
 * - small contact form that opens mailto
 * - copy-to-clipboard for email with toast
 * - resume view & download buttons
 *
 * Make sure the resume PDF is in public/: /Anastus John A Resume 2025.pdf
 * You also have the uploaded local file at: /mnt/data/Anastus John A Resume 2025.pdf
 */


export default function Contact() {
  const [toast, setToast] = useState(null);

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(null), 2200);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("johnanastus25@gmail.com");
      showToast("Email copied ");
    } catch (e) {
      showToast("Copy failed — use the email link");
    }
  };

  

  return (
    <section id="contact" className="section container section-separated">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="section-title">CONTACT</h2>

        <div className="contact-grid">
          {/* Left: Contact cards */}
          <div className="contact-cards">
            <motion.div
              className="contact-card"
              whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <div className="card-emoji">📫</div>
              <div className="card-body">
                <div className="card-title">Email</div>
                <div className="card-desc">johnanastus25@gmail.com</div>
                <div className="card-actions">
                  <button className="resume-btn mini" onClick={copyEmail} aria-label="Copy email">Copy</button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-card"
              whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <div className="card-emoji">📞</div>
              <div className="card-body">
                <div className="card-title">Phone</div>
                <div className="card-desc">+91 6384023485</div>
                <div className="card-actions">
                  <a className="resume-btn mini" href="tel:+916384023485" >Call</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-card"
              whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.12 }}
            >
              <div className="card-emoji">🔗</div>
              <div className="card-body">
                <div className="card-title">Social</div>
                <div className="card-desc">Connect on LinkedIn</div>
                <div className="card-actions">
                  <a className="resume-btn mini" href="http://www.linkedin.com/in/anastusjohn25" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="contact-card"
              whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.12 }}
            >

            <div className="card-emoji">🛠️</div> 
            <div className="card-body">
                <div className="card-title">Workspace</div>
                <div className="card-desc">View my GitHub</div>
                <div className="card-actions">
                <a className="resume-btn mini" href="https://github.com/Anastus" target="_blank" rel="noreferrer">GitHub</a>
                </div>

               </div>
            </motion.div>
          </div>

          

          {/* Right: Contact form */}

         
        </div>
      </motion.div>

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="toast"
        >
          {toast}
        </motion.div>
      )}
    </section>
  );
}