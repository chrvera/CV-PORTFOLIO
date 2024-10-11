import React from 'react';
import Project from '../components/Project';
import blogImg from '../../public/Blog.jpg';
import readerImg from '../../public/Reader.jpeg';
import cinephileImg from '../../public/cinephile.jpg';
import mdbImg from '../../public/MDB.jpg';

const Portfolio = () => {
  const projects = [
        {
          title: 'by-the-blog',
          image: blogImg,
          deployedUrl: '',
          githubUrl: 'https://github.com/chrvera/by-the-blog',
        },
        {
          title: 'Reader-Reply',
          image: readerImg,
          deployedUrl: 'https://reader-reply.onrender.com/',
          githubUrl: 'https://github.com/JacqMcQ/Reader-Reply',
        },
        {
          title: 'Certified-Cinephile',
          image: cinephileImg,
          deployedUrl: '',
          githubUrl: 'https://github.com/A-Morones/Certified-Cinephile',
        },
        {
          title: 'Project-JATE',
          image: mdbImg,
          deployedUrl: 'https://project-jate.onrender.com',
          githubUrl: 'https://github.com/chrvera/Project-JATE',
        },
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;