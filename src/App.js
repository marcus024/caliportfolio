import React, { useState } from 'react';
import Home from './home/home.js';
import Project from './projects/projects.js';
import Skills from './skills/skills.js';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <nav className={`navbar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="nav-container">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="hamburger"></div>
          </div>
          <ul className={`nav-links ${isOpen ? 'mobile-show' : ''}`}>
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#project" onClick={(e) => scrollToSection(e, 'project')}>Project</a></li>
          </ul>
        </div>
      </nav>
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Project /></div>
    </div>
  );
};

export default App;
