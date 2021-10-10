import React from 'react';
import './Education.css';
import { Fade } from 'react-reveal';
import DegreeCard from '../../components/degreeCard/DegreeCard';
import { degrees } from '../../static/portfolio';

const EducationContainer = ({ theme }) => (
  <div className="main" id="educations">
    <div className="educations-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="educations-header" style={{ color: theme.text }}>
          Degrees Received
        </h1>
      </Fade>
    </div>
    <div className="educations-body-div">
      {degrees.degrees.map((degree) => <DegreeCard key={degree} degree={degree} theme={theme} />)}
    </div>
  </div>
);

export default EducationContainer;
