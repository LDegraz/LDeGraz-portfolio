import React from 'react';
import './App.css'; // Import main CSS file

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        I am a passionate web developer with experience in building dynamic and responsive web applications using React, JavaScript, and other modern web technologies. I have a strong foundation in front-end development and a keen eye for design, aiming to create user-friendly interfaces.
      </p>
      <a 
        href="/path/to/your/resume.pdf" 
        download 
        className="resume-link"
      >
        Download My Resume
      </a>
    </section>
  );
};

export default Resume;