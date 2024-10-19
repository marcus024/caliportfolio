import React, { useState } from 'react';
import mobile from './images/mobile.png';
import web from './images/web.png';
import ai from './images/AI.png';
import ui from './images/UI.png';
import embed from './images/data.png';

const skillsData = [
  {
    title: 'Mobile Development',
    tech: [
      { name: 'Flutter', img: mobile },
      { name: 'Dart', img: mobile },
      { name: 'Firebase', img: mobile },
    ],
    img: mobile,
    link: '#projects',
  },
  {
    title: 'Web Development',
    tech: [
      { name: 'ReactJS', img: web },
      { name: 'Native PHP', img: web },
      { name: 'Bootstrap', img: web },
      { name: 'MySQL', img: web },
      { name: 'Cpanel', img: web },
    ],
    img: web,
    link: '#projects',
  },
  {
    title: 'AI and Data Analytics',
    tech: [
      { name: 'Python', img: ai },
      { name: 'PowerBI', img: ai },
      { name: 'SQL', img: ai },
      { name: 'Apache Airflow', img: ai },
      { name: 'Google Sheets', img: ai },
    ],
    img: ai,
    link: '#projects',
  },
  {
    title: 'Embedded Systems',
    tech: [
      { name: 'Arduino', img: embed },
      { name: 'Thinkspeak', img: embed },
      { name: 'TinkerCAD', img: embed },
    ],
    img: embed,
    link: '#projects',
  },
  {
    title: 'UI/UX Design',
    tech: [
      { name: 'Figma', img: ui },
      { name: 'Adobe XD', img: ui },
    ],
    img: ui,
    link: '#projects',
  },
];

const SkillsGrid = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div id="skills" style={styles.skillsContainer}>
      <h1 style={styles.heading}>Skills</h1>
      <div style={styles.gridContainer}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`tile ${hoverIndex === index ? 'hovered' : ''}`}
            style={styles.tile}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ ...styles.imageContainer, backgroundImage: `url(${skill.img})` }}>
              {/* Upper part with image */}
            </div>
            <div style={styles.titleContainer}>
              <h2 style={styles.title}>{skill.title}</h2>
            </div>
            {hoverIndex === index && (
              <div style={styles.hoverOverlay}>
                <h3 style={styles.overlayTitle}>Technologies</h3>
                <ul style={styles.techList}>
                  {skill.tech.map((tech, idx) => (
                    <li key={idx} style={styles.techItem}>
                      {tech.name}
                    </li>
                  ))}
                </ul>
                <a href={skill.link} style={styles.projectButton}>
                  View Projects
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .tile {
          animation: float 3s ease-in-out infinite;
        }

        .hovered .hoverOverlay {
          opacity: 1;
        }

        .hoverOverlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

const styles = {
  skillsContainer: {
    backgroundColor: '#1d3557',
    padding: '50px 20px',
    textAlign: 'center',
    minHeight: '100vh',
  },
  heading: {
    color: 'white',
    fontSize: '40px',
    marginBottom: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridGap: '20px',
    justifyItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  tile: {
    position: 'relative',
    backgroundColor: '#457b9d',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    width: '100%',
    maxWidth: '400px',
    cursor: 'pointer',
  },
  imageContainer: {
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  titleContainer: {
    padding: '15px',
    backgroundColor: '#f1faee',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    color: '#1d3557',
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#f1faee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  overlayTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  techList: {
    listStyle: 'none',
    padding: 0,
  },
  techItem: {
    fontSize: '16px',
    margin: '5px 0',
  },
  projectButton: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#f1faee',
    color: '#1d3557',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default SkillsGrid;
