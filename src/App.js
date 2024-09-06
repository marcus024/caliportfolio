import React from 'react';
import Home from './home/home.js';
import About from './about/about.js';
import Project from './projects/projects.js';
import Contacts from './contacts/contacts.js';
import Skills from './skills/skills.js';

const App = () => {
  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#333' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: '10px' }}>
          <li><a href="#home" style={{ color: '#fff' }}>Home</a></li>
          <li><a href="#skills" style={{ color: '#fff' }}>Skills</a></li>
          <li><a href="#project" style={{ color: '#fff' }}>Project</a></li>
          <li><a href="#about" style={{ color: '#fff' }}>About</a></li>
          <li><a href="#contacts" style={{ color: '#fff' }}>Contacts</a></li>
        </ul>
      </nav>
      <Home />
      <Skills />
      <About />
      <Project />
      <Contacts />
    </div>
  );
};

export default App;
