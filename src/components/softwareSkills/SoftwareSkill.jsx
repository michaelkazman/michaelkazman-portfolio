import React from 'react';
import './SoftwareSkill.css';
import Tooltip from '../tooltip/Tooltip';

const SoftwareSkill = ({ logos, theme }) => (
  <div>
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map((logo) => (
          <Tooltip key={logo.skillName} title={logo.skillName} theme={theme}>
            <li className="software-skill-inline" name={logo.skillName}>
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={logo.style}
                data-inline="false"
              />
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  </div>
);

export default SoftwareSkill;
