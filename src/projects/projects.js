import saca from './images/saca.png';
import sanet from './images/sanet.png';
import contact from './images/contact.png';
import risk from './images/risk.png';
import rice from './images/rice.png';
import citylytics from './images/citylytics.png';
const Project = () => {
  const projects = [
      { id: 1, name: 'Risk Management System', description: 'This web application is use to track risk and opportunities of company. Helps to find some possible actions and insights about the risks.', img: risk },
      { id: 2, name: 'Rice Management System', description: 'This web application is use to track rice production and monitor agricultural parameters per month. Give insights and recommendations for improvement.', img: rice },
      { id: 3, name: 'Contact System', description: 'This system use to add , edit and delete users contacts.', img: contact },
      { id: 4, name: 'SACA App', description: 'This mobile application is use to predict crops based on the given agricultural parameters values and detect pest using CNN algorithm.', img: saca },
      { id: 5, name: 'SANET App', description: 'The SANET or Sustainable Aquatic Network for Eco-friendly Techniques is designed to assist fishing communities by providing modern, user-friendly tools for sustainable fishing practices.', img: sanet },
      { id: 6, name: 'Project CityLytics', description: 'This desktop application used to monitor, track and give insights for the projects of the  12 Point Kauswagan Agenda of Catbalogan City', img: citylytics },
  ];
  return (
      <div id="project" style={{ minHeight: '100vh', backgroundColor: '#1d3557', padding: '20px' }}>
          <h1 style={{ textAlign: 'center', color: '#fff' , fontSize: '40px' }}>My Projects</h1>
          <div style={styles.projectGrid}>
              {projects.map((project) => (
                  <div key={project.id} style={styles.projectTile}>
                      <img src={project.img} alt={project.name} style={styles.image} />
                      <div style={styles.projectContent}>
                          <h3>{project.name}</h3>
                          <p>{project.description}</p>
                      </div>
                  </div>
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
  },
};

export default Project;
