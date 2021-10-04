import React from 'react';
import './CompetitiveSites.css';
import Tooltip from '../tooltip/Tooltip';

const CompetitiveSites = ({ theme, logos }) => (
  <div className="competitive-sites-main-div">
    <ul className="dev-icons">
      {logos.map((logo) => (
        <Tooltip key={logo.siteName} title={logo.siteName} theme={theme}>
          <li className="competitive-sites-inline" name={logo.siteName}>
            <a
              href={logo.profileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="iconify"
                data-icon={logo.iconifyClassname}
                style={logo.style}
                data-inline="false"
              />
            </a>
          </li>
        </Tooltip>
      ))}
    </ul>
  </div>
);

export default CompetitiveSites;
