// src/components/About.js
import React from 'react';
import profilePicture from './profile.jpg';
import TypingEffect from './TypingEffect';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Content on the Left */}
        <div className="about-content">
          <h2>About Me</h2>
          <TypingEffect />
          <p>
            Write your bio here... Describe who you are, your background, interests, etc.
          </p>
        </div>

        {/* Profile Picture and Links on the Right */}
        <div className="about-profile">
          <img src={profilePicture} alt="Profile" className="profile-picture" />

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub size={25} /></a>
            <a href="mailto:your-email@example.com"><FaEnvelope size={25} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
