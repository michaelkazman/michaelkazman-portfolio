import React from 'react';
import Tooltip from '../tooltip/Tooltip';
import './ProjectLanguages.css';

const ProjectLanguages = ({ theme, logos }) => (
  <div>
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {logos.map((logo) => (
          <Tooltip key={logo.name} title={logo.name} theme={theme}>
            <li
              className="software-skill-inline-languages"
              name={logo.skillName}
            >
              <span
                className="iconify"
                data-icon={logo.iconifyClass}
                data-inline="false"
                style={logo.style}
              />
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectLanguages;
