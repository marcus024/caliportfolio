import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import markImage from './images/mark.jpg'; // Adjust the path as needed
import fbIcon from './images/facebook.png'; // Your custom FB icon
import gmailIcon from './images/new.png'; // Your custom Gmail icon
import whatsappIcon from './images/whatsapp.png'; // Your custom WhatsApp icon
import linkedinIcon from './images/linkedin.png'; // Your custom LinkedIn icon

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
      <img 
        src={markImage}
        alt="Mark Antony Calipayan" 
        style={isHovered ? { ...styles.profileImage, ...styles.profileImageHovered } : styles.profileImage}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
      />
      
      {/* Move the Social Icons section right after the image */}
      <div style={styles.socialIcons}>
        <a href="https://www.facebook.com/marcus03242001/" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" style={styles.icon} />
        </a>
        <a href="mailto:markantonyvc0gmail.com">
          <img src={gmailIcon} alt="Gmail" style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/calipayanmav24/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
        </a>
        <a href="https://wa.me/9460822777" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" style={styles.icon} />
        </a>
      </div>

      <h1 
        style={isHovered ? { ...styles.name, ...styles.nameHovered } : styles.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Mark Antony Calipayan
      </h1>

      <TypeAnimation
        sequence={[
          'A self-sufficient and flexible freelancer', // Types 'One'
          1000, // Waits 1s
          'Equipped with skills in UX/UI Design, Embedded System/IoT, Predictive and Data Analytics, Mobile, and Web Development.', 
          2000, // Waits 2s
          'Feel free to email me or message me using the contacts above for bookings or job offers.',
          2000,
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
    marginBottom: '10px', // Reduced margin to bring social icons closer to the image
    color: '#1d3557',
    border: '2px solid #a8dadc'
  },
  profileImageHovered: {
    width: '160px', 
    height: '160px', 
    borderRadius: '50%', 
    marginBottom: '10px', 
    color: '#1d3557',
    border: '6px solid #a8dadc'
  },
  name: {
    fontSize: '3rem', 
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease', 
    marginTop: '20px', // Added margin to create space between icons and name
  },
  nameHovered: {
    transform: 'scale(1.1)', 
    color: '#a8dadc', 
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
  socialIcons: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px', // Adjust margin between icons and image
  },
  icon: {
    width: '40px', 
    height: '40px', 
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
};

export default Home;
