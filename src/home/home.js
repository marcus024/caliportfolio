import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import markImage from './images/mark.jpg'; // Adjust the path as needed

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="home" style={styles.homeContainer}>
      <div style={styles.sticker}>g</div> {/* Floating sticker */}
      <img 
        src={markImage}
        alt="Mark Antony Calipayan" 
        style={isHovered ? { ...styles.profileImage, ...styles.profileImageHovered } : styles.profileImage}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
      />
      <h1 
        style={isHovered ? { ...styles.name, ...styles.nameHovered } : styles.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Mark Antony Calipayan
      </h1>
      <TypeAnimation
        sequence={[
          'A self-sufficient and flexible computer engineer.', // Types 'One'
          1000, // Waits 1s
          'Equipped with skills in UX/UI Design, Embedded System/IoT, Predictive and Data Analytics, Mobile, and Web Development.', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em', color: '#a8dadc', display: 'inline-block' }}
      />
      <button
        style={styles.button}
        onMouseOver={e => {
          e.target.style.backgroundColor = '#1d3557';
          e.target.style.color = '#fff';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = '#fff';
          e.target.style.color = '#1d3557';
        }}
        onClick={() => scrollToSection('project')}
      >
        View My Projects
      </button>
    </div>
  );
};

const styles = {
  homeContainer: {
    height: '70vh', 
    backgroundColor: '#1d3557', 
    textAlign: 'center', 
    padding: '100px 20px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: '160px', 
    height: '160px', 
    borderRadius: '50%', 
    marginBottom: '20px',
    color: '#1d3557',
    border: '2px solid #a8dadc'
  },
  profileImageHovered: {
    width: '160px', 
    height: '160px', 
    borderRadius: '50%', 
    marginBottom: '20px',
    color: '#1d3557',
    border: '6px solid #a8dadc'
  },
  name: {
    fontSize: '3rem', 
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease', 
  },
  nameHovered: {
    transform: 'scale(1.1)', // Slightly enlarges the text
    color: '#a8dadc', // Change text color on hover
  },
  description: {
    fontSize: '1.5rem', 
    color: 'white', 
    maxWidth: '800px', 
    margin: '20px auto',
    padding: '0 20px' // Adds padding for mobile view
  },
  button: {
    display: 'inline-block', 
    padding: '10px 20px', 
    backgroundColor: '#fff', 
    color: '#1d3557', 
    textDecoration: 'none', 
    borderRadius: '5px', 
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    cursor: 'pointer',
    border: 'none'
  },
  sticker: {
    fontSize: '2rem', // Size of the sticker
    position: 'absolute',
    top: '20px', // Position of the sticker
    right: '20px',
    animation: 'float 3s ease-in-out infinite' // Animation for the floating effect
  }
};

export default Home;
