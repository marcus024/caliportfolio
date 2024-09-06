import React, { useState } from 'react';
import Home from './home/home.js';
import About from './about/about.js';
import Project from './projects/projects.js';
import Contacts from './contacts/contacts.js';
import Skills from './skills/skills.js';
import Certifications from './cert/certs.js';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="nav-container">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="hamburger"></div>
          </div>
          <ul className={`nav-links ${isOpen ? 'mobile-show' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#certs">Certifications</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </nav>
      <Home />
      <Skills />
      <Project />
      <Certifications />
      <About />
      <Contacts />
    </div>
  );
};

export default App;
