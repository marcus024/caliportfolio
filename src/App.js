import React from 'react';
import Home from './home/home.js';
import About from './about/about.js';
import Project from './projects/projects.js';
import Contacts from './contacts/contacts.js';
import Skills from './skills/skills.js';
import './App.css';
const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home" >Home</a></li>
          <li><a href="#skills" >Skills</a></li>
          <li><a href="#project" >Project</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <Home />
      <Skills />
      <Project />
      <About />
      <Contacts />
    </div>
  );
};

export default App;
