// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'C', icon: 'fas fa-code' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Django', icon: 'fas fa-leaf' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'jQuery', icon: 'fas fa-code' },
  { name: 'Git', icon: 'fab fa-git' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'MySQL', icon: 'fas fa-database' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section ">
      <div className="container ">
        <h2 className="text-center mb-5 hollow-text auto-show">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card auto-show">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-details">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
