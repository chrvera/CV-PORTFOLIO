import React from 'react';
import Project from '../components/Project';


const Portfolio = () => {
  const projects = [
        {
          title: 'by-the-blog',
          image: './public/Blog.jpg',
          deployedUrl: '',
          githubUrl: 'https://github.com/chrvera/by-the-blog',
        },
        {
          title: 'Reader-Reply',
          image: './public/Reader.jpeg',
          deployedUrl: 'https://reader-reply.onrender.com/',
          githubUrl: 'https://github.com/JacqMcQ/Reader-Reply',
        },
        {
          title: 'Certified-Cinephile',
          image: './public/cinephile.jpg',
          deployedUrl: '',
          githubUrl: 'https://github.com/A-Morones/Certified-Cinephile',
        },
        {
          title: 'Project-JATE',
          image: './MDB.jpg',
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