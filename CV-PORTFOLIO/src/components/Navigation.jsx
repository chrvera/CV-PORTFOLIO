import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
  
    return (
      <nav className="nav">
        <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>About Me</Link>
        <Link to="/portfolio" className={`nav__link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
        <Link to="/contact" className={`nav__link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        <Link to="/resume" className={`nav__link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
      </nav>
    );
  };
  
  export default Navigation;