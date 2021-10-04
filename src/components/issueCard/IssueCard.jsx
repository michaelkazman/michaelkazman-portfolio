import React from 'react';
import './IssueCard.css';
import { Fade } from 'react-reveal';
import Tooltip from '../tooltip/Tooltip';

const IssueCard = ({ theme, issue }) => {
  let iconPR;
  let bgColor;
  if (issue.closed === false) {
    iconPR = {
      iconifyClass: 'octicon:issue-opened',
      style: { color: '#28a745' },
    };
    bgColor = '#dcffe4';
  } else {
    iconPR = {
      iconifyClass: 'octicon:issue-closed',
      style: { color: '#d73a49' },
    };
    bgColor = '#ffdce0';
  }

  const subtitleString = `#${issue.number} opened on ${issue.createdAt.split('T')[0]}`;
  let assignee;
  if (issue.assignees.nodes.length > 0) {
    const { name } = issue.assignees.nodes[0];
    assignee = (
      <Tooltip title={`Assigned to ${name}`} theme={theme}>
        <a
          href={issue.assignees.nodes[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="assigned-to-img"
            src={issue.assignees.nodes[0].avatarUrl}
            alt=""
          />
        </a>
      </Tooltip>
    );
  } else {
    assignee = <noscript />;
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="issue-card"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${iconPR.style.color}`,
        }}
      >
        <div className="issue-top">
          <div className="issue-header">
            <span
              className="iconify issue-icons"
              data-icon={iconPR.iconifyClass}
              style={iconPR.style}
              data-inline="false"
            />
            <div className="issue-title-header">
              <p className="issue-title">
                <a
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {issue.title}
                </a>
              </p>
              <p className="issue-subtitle">{subtitleString}</p>
            </div>
          </div>
        </div>
        <div className="issue-down">
          <div className="assignee-repo">
            <p className="parent-repo">
              Repository:
              {' '}
              <a
                style={{ color: iconPR.style.color }}
                href={issue.repository.url}
              >
                {issue.repository.owner.login}
                /
                {issue.repository.name}
              </a>
            </p>
            <div className="assignee-info">
              {assignee}
            </div>
          </div>
          <div className="owner-img-div">
            <a
              href={issue.repository.owner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="owner-img"
                src={issue.repository.owner.avatarUrl}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IssueCard;
