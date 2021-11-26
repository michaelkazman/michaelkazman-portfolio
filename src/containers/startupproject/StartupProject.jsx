/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './StartupProjects.css';
import { bigProjects } from '../../static/portfolio';

const openProjectInNewWindow = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

const StartupProjectContainer = () => (
  <div className="main" id="projects">
    <div>
      <h1 className="skills-heading">{bigProjects.title}</h1>
      <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
      <div className="startup-projects-main">
        <div className="startup-project-text">
          {bigProjects.projects.map((project) => (
            <div
              className="saaya-health-div"
              onClick={() => openProjectInNewWindow(project.link)}
            >
              <img alt="Saad Working" src={project.image} />
            </div>
          ))}
        </div>
        <div className="starup-project-image" />
      </div>
    </div>
  </div>
);

export default StartupProjectContainer;
