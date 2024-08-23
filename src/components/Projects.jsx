import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Library Management System',
    link: '', // Add a link if you have one, otherwise leave it as an empty string
    description: [
      'Designed GUI using tkinter library and developed a library management system to streamline library operations and enhance user experience.',
      'Led backend development using Python, optimizing database interactions with MySQL and improving data retrieval efficiency by 20%.',
      'Implemented core functionalities such as book catalog management, user borrowing, and return tracking, resulting in improved operational accuracy.'
    ],
    technologies: 'Python, MySQL, tkinter library',
  },
  {
    name: 'Gym Management System',
    link: '', // Add a link if you have one, otherwise leave it as an empty string
    description: [
      'Developed a gym management system to efficiently handle gym assets and member details.',
      'Utilized HTML, CSS, and JavaScript to create an intuitive user interface and manage data effectively.',
      'Implemented responsive design with Bootstrap, ensuring optimal user experience across various devices.'
    ],
    technologies: 'HTML, CSS, JavaScript, Bootstrap',
  },
];


const Project = ({ name, link, description, technologies }) => {
  return (
    <div className="project-card auto-show">
      <div className="project-image">
       
      </div>
      <div className="project-details">
        <h3 className="project-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <ul>
          <p className="project-description">{description.map((str,index)=>{
            return (
              
                <li key={index}>{str}</li>
              
              );
            })}
          </p>
        </ul>
        <div className="project-technologies">
          <span>Technologies:</span>
          <ul className="tech-list">
            {technologies.split(',').map((tech, i) => (
              <li key={i} className="tech-item">
                {tech.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center hollow-text auto-show">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              link={project.link}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;