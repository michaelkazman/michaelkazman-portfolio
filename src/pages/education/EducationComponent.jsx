import React from 'react';
import { Fade } from 'react-reveal';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TopButton from '../../components/topButton/TopButton';
import Educations from '../../containers/education/Educations';
import Certifications from '../../containers/certifications/Certifications';
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import EducationImg from './EducationImg';
import { competitiveSites } from '../../static/portfolio';
import './EducationComponent.css';

const Education = ({ theme }) => (
  <div className="education-main">
    <Header theme={theme} />
    <div className="basic-education">
      <Fade bottom duration={2000} distance="40px">
        <div className="heading-div">
          <div className="heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Academics &amp; Certifications
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} theme={theme} />
          </div>
        </div>
      </Fade>
      <Educations theme={theme} />
      <Certifications theme={theme} />
    </div>
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
);

export default Education;
