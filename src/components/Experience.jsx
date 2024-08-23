import React from 'react';
import './Experience.css'; // Import CSS for styling

const experiences = [
  {
    title: 'Python full stack',
    company: 'Ducat india',
    location: 'Noida, India',
    duration: '09/2022 - 03/2023',
    responsibilities: [
      'Learned technologies like Python, Django, mySQL, HTML, CSS, JavaScript, jQuery to built a full stack responsive project.',
      'Buil industry ready project such as Library management and Gym management system.'
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section artistic">
      <div className="container">
        <h2 className="text-center hollow-text mb-5 auto-show">Certification</h2>
        <div className="card-grid ">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  const { title, company, location, duration, responsibilities } = experience;

  return (
    <div className="experience-card auto-show">
      <div className="experience-header">
        <h3 className="title">{title}</h3>
        <div className="company-location">
          <p className="company">{company}</p>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
        </div>
        <p className="duration">{duration}</p>
      </div>
      <div className="experience-details">
        <ul className="responsibilities">
          {responsibilities.map((responsibility, i) => (
            <li key={i} className="responsibility">
              <span className="achievement">+ </span>
              
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;