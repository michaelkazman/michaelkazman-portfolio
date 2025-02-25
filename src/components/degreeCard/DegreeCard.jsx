import React from 'react';
import './DegreeCard.css';
import { Fade, Flip } from 'react-reveal';

const DegreeCard = ({ theme, degree }) => (
  <div className="degree-card">
    <Flip left duration={2000}>
      <div className="card-img">
        <img
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'scale(90%, 90%)',
          }}
          src={require(`../../assets/images/${degree.logo_path}`)}
          alt={degree.alt_name}
        />
      </div>
    </Flip>
    <Fade right duration={2000} distance="40px">
      <div className="card-body">
        <div
          className="body-header"
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: theme.text }}>
              {degree.title}
            </h2>
            <h3 className="card-subtitle" style={{ color: theme.text }}>
              {degree.subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: theme.text }}>
              {degree.duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          <ul>
            {degree.descriptions.map((sentence) => (
              <p key={sentence} className="content-list" style={{ color: theme.text }}>
                <li>
                  {sentence}
                </li>
              </p>
            ))}
          </ul>
          <a
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="visit-btn"
              style={{ backgroundColor: theme.headerColor }}
            >
              <p className="btn" style={{ color: theme.text }}>
                Learn More
              </p>
            </div>
          </a>
        </div>
      </div>
    </Fade>
  </div>
);

export default DegreeCard;
