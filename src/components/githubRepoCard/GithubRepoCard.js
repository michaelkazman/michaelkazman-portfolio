import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="repo-name-div">
            <i className={`fas fa-code-branch`} style={{ marginRight: 16, fontSize: 22, color: theme.text }}></i>
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
              Created on {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
              theme={theme}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
