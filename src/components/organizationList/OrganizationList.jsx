import React from 'react';
import './OrganizationList.css';
import { Fade } from 'react-reveal';
import Tooltip from '../tooltip/Tooltip';

const OrganizationList = ({ logos }) => (
  <div className="organizations-main-div">
    <ul className="dev-icons-orgs">
      {logos.map((logo) => (
        <Tooltip key={logo.login} title={logo.login}>
          <li className="organizations-inline" name={logo.login}>
            <Fade bottom duration={2000} distance="40px">
              <img
                className="organizations-img"
                src={logo.avatarUrl}
                alt={logo.login}
              />
            </Fade>
          </li>
        </Tooltip>
      ))}
    </ul>
  </div>
);

export default OrganizationList;
