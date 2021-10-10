/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Fade } from 'react-reveal';
import ProjectLanguage from '../projectLanguage/ProjectLanguage';
import './GithubRepoCard.css';

const openRepoinNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

const GithubRepoCard = ({ repo, theme }) => (
  <div>
    <Fade bottom duration={2000} distance="40px">
      <div
        className="repo-card-div"
        key={repo.id}
        onClick={() => openRepoinNewTab(repo.url)}
        style={{ backgroundColor: theme.highlight }}
      >
        <div className="repo-name-div">
          <i className="fas fa-code-branch" style={{ marginRight: 16, fontSize: 22, color: theme.text }} />
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className="repo-details">
          <p
            className="repo-creation-date subTitle"
            style={{ color: theme.secondaryText }}
          >
            {repo.createdAt.split('T')[0]}
          </p>
          <ProjectLanguage
            className="repo-languages"
            logos={repo.languages}
            theme={theme}
          />
        </div>
      </div>
    </Fade>
  </div>
);

export default GithubRepoCard;
