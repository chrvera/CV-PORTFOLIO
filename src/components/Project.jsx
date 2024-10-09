import React from 'react';
import PropTypes from 'prop-types';


const Project = ({ title, image, deployedUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project__image" />
      <div className="project__details">
        <h3 className="project__title">{title}</h3>
        <div className="project__links">
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="project__link">
            View Deployed App
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project__link">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  };
  
export default Project;