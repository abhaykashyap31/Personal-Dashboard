// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'; // example icons

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-logos">
        <FaReact size={50} />
        <FaNodeJs size={50} />
        <FaPython size={50} />
        {/* Add more logos */}
      </div>
    </section>
  );
};

export default Skills;
