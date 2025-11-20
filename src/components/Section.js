// src/components/Section.js
import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section section-separated ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}