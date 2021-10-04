import React from 'react';
import './Issues.css';
import { Fade } from 'react-reveal';
import IssueCard from '../../components/issueCard/IssueCard';
import issuesData from '../../static/opensource/issues.json';

const Issues = ({ theme }) => (
  <div>
    <div className="issues-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="issues-header" style={{ color: theme.text }}>
          Issues
        </h1>
      </Fade>
    </div>
    <div className="issues-body-div">
      {issuesData.data.map((issue) => <IssueCard key={issue.url} issue={issue} theme={theme} />)}
    </div>
  </div>
);

export default Issues;
