import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ theme, experience }) => (
  <div
    className="experience-card"
    style={{ border: `1px solid ${experience.color}`, backgroundColor: theme.highlight }}
  >
    <div className="experience-card-logo-div">
      <img
        className="experience-card-logo"
        src={require(`../../assets/images/${experience.logo_path}`)}
        alt=""
        style={experience.imgStyle}
      />
    </div>
    <div className="experience-card-body-div">
      <div className="experience-card-header-div">
        <div className="experience-card-heading-left">
          <h3
            className="experience-card-title"
            style={{ color: theme.text }}
          >
            {experience.title}
          </h3>
          <p
            className="experience-card-company"
          >
            <a
              href={experience.company_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.dark }}
            >
              {experience.company}
            </a>
          </p>
        </div>
        <div className="experience-card-heading-right">
          <p
            className="experience-card-duration"
            style={{ color: theme.dark }}
          >
            {experience.duration}
          </p>
          <p
            className="experience-card-location"
            style={{ color: theme.dark }}
          >
            {experience.location}
          </p>
        </div>
      </div>
      <p
        className="experience-card-description"
        style={{ color: theme.text }}
      >
        {experience.description}
      </p>
      <ul
        className="experience-card-description"
        style={{ color: theme.text }}
      >
        {experience.tasks.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceCard;
