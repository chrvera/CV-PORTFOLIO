import React from 'react';

const Resume = () => {
    return (
      <section className="resume">
        <h2>Resume</h2>
        <a href="/path-to-your-resume.pdf" download>
          Download My Resume
        </a>
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </section>
    );
  };
  
  export default Resume;