import React from 'react';
import { Fade } from 'react-reveal';
import PullRequestChart from '../../components/pullRequestChart/PullRequestChart';
import IssueChart from '../../components/issueChart/IssueChart';
import './OpensourceCharts.css';

const OpensourceCharts = ({ theme }) => (
  <div>
    <div className="os-charts-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="os-charts-header" style={{ color: theme.text }}>
          Contributions
        </h1>
      </Fade>
    </div>
    <div className="os-charts-body-div">
      <PullRequestChart />
      <IssueChart />
    </div>
  </div>
);

export default OpensourceCharts;
