import React from 'react';
import meImg from '../../public/me.jpg';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <img src= { meImg } alt="Christopher Vera" className="about__image" />
      <p>
        I'm a passionate software engineer with a strong background in building dynamic, responsive, and user-friendly web applications. My journey in coding began when I was just a child as my father was a computer programmer. Since then, I've been driven by the desire to solve problems through technology.
      </p>
      <p>
        I specialize in full-stack development, with expertise in JavaScript, React, Node.js, Express, SQL, and MongoDB. Over the years, I've built a variety of projects ranging from simple landing pages to more complex web applications, and I've always enjoyed seeing ideas come to life through code.
      </p>
      <p>
        In addition to technical skills, I value collaboration and teamwork, having contributed to open-source projects, where I worked with developers from diverse backgrounds. I'm always eager to learn and adapt to new technologies, which helps me stay current in the fast-evolving world of software engineering.
      </p>
      <p>
        When I'm not coding, you'll find me traveling, mountain biking, fishing or spending time with my daughter. I'm constantly looking for ways to grow and am excited to take on new challenges in my career as a software engineer.
      </p>
    </section>
  );
};

export default About;