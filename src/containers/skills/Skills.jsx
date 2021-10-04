import React from 'react';
import './Skills.css';
import { Fade } from 'react-reveal';
import SkillSection from './SkillSection';
import { skills } from '../../static/portfolio';

const Skills = ({ theme }) => (
  <div className="main" id="skills">
    <div className="skills-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="skills-header" style={{ color: theme.text }}>
          {skills.title}
        </h1>
      </Fade>
    </div>
    <SkillSection theme={theme} />
  </div>
);

export default Skills;
