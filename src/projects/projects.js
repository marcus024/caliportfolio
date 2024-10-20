import saca from './images/saca.png';
import sanet from './images/sanet.png';
import contact from './images/contact.png';
import risk from './images/risk.png';
import rice from './images/rice.png';
import citylytics from './images/citylytics.png';
import ebay from './images/ebay.png';
import cip1 from './images/cip1.png';
import cip2 from './images/cip2.png';
import herblens from './images/herb.png';

const Project = () => {
  const projects = [
    { id: 1, name: 'Risk Management System', description: 'This web application is used to track risks and opportunities for companies. Helps to find possible actions and insights about the risks.', img: risk, link: '#' },
    { id: 2, name: 'Rice Management System', description: 'This web application is used to track rice production and monitor agricultural parameters per month. Provides insights and recommendations for improvement.', img: rice, link: 'http://ricems.ricelm.site/' },
    { id: 3, name: 'Contact System', description: 'This system is used to add, edit, and delete user contacts.', img: contact, link: '#' },
    { id: 4, name: 'SACA App', description: 'This mobile application is used to predict crops based on the given agricultural parameter values and detect pests using a CNN algorithm.', img: saca, link: '#' },
    { id: 5, name: 'SANET App', description: 'The SANET or Sustainable Aquatic Network for Eco-friendly Techniques is designed to assist fishing communities by providing modern, user-friendly tools for sustainable fishing practices.', img: sanet, link: 'https://app.flutterflow.io/share/gis-map-sanet-jo62mk' },
    { id: 6, name: 'HerbLens', description: 'This mobile application was integrated by CNN model and AR technology to detect herbal plant in real-time.', img: herblens, link: 'https://www.figma.com/proto/XDrXflwHYN6OJLDs4MgIte/HerbLens?node-id=0-1&t=lRgS0PLfqsFbdXD4-1' },
    { id: 7, name: 'Project CityLytics', description: 'This desktop application is used to monitor, track, and provide insights for the projects of the 12-Point Kauswagan Agenda of Catbalogan City.', img: citylytics, link: 'https://www.figma.com/proto/80ZMO0yfPLOTnHbOiyGEQQ/Pr?node-id=0-1&t=iLJzqiKqbDMpvhGb-1' },
    { id: 8, name: 'EBay Used Car Sales March 2024 ', description: 'This project was part of Onyx Data DNA Challenge. This was made using Power BI Desktop and published using Powr Service. The source data was an excel file.', img: ebay , link: 'https://app.powerbi.com/view?r=eyJrIjoiNTk3NGM4OTMtYmM3Ni00YTExLWFiYzQtZGNlNDIxMGUxMjc1IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D' },
    { id: 9, name: 'Competitive Industrial Performance Index', description: 'This was one of my output out of my daily practice of Power BI.', img: cip2, link: 'https://app.powerbi.com/view?r=eyJrIjoiZjcxNzljZWUtMTEwNS00MWEyLThiZmEtNjZiZjlmNmNkNmM2IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D' },
    { id: 10, name: 'Competitive Industrial Performance Index version 2' , description :'This is the version 2 of Competitive Industrial Perfomance Index', img: cip1 , link: 'https://app.powerbi.com/view?r=eyJrIjoiNWQ4MzQyMTMtZjM4YS00MjZkLTk4OTItMjBhNmNlMzI5Mzg4IiwidCI6IjQ1YTc5ZTZjLWM1NzAtNGIyNi1hODFmLWM3NWJmNWFlYzA2ZSIsImMiOjEwfQ%3D%3D'}
  ];

  return (
    <div id="project" style={{ minHeight: '100vh', backgroundColor: '#1d3557', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '40px' }}>My Projects</h1>
      <div style={styles.projectGrid}>
        {projects.map((project) => (
          <a key={project.id} href={project.link} style={styles.projectLink}>
            <div style={styles.projectTile}>
              <img src={project.img} alt={project.name} style={styles.image} />
              <div style={styles.projectContent}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  projectTile: {
    backgroundColor: '#1d3557',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  projectContent: {
    padding: '15px',
    color: '#fff',
    fontSize: '12px',
  },
  projectLink: {
    textDecoration: 'none',
  },
};

export default Project;
