import React from 'react';
import './Skill.css';
import { Fade } from 'react-reveal';
import { skills } from '../../static/portfolio';
import SoftwareSkill from '../../components/softwareSkill/SoftwareSkill';
import DataScienceImg from './DataScienceImg';
import FullStackImg from './FullStackImg';
import CloudInfraImg from './CloudInfraImg';
import DesignImg from './DesignImg';
import WebDeveloperImg from './WebDeveloperImg';
import UndrawCodingImg from './UndrawCodingImg';
import GitActivityImg from './GitActivityImg';

const GetSkillSvg = ({ fileName, theme }) => {
  let skillSVG = <DesignImg theme={theme} />;
  if (fileName === 'DataScienceImg') skillSVG = <DataScienceImg theme={theme} />;
  if (fileName === 'FullStackImg') skillSVG = <FullStackImg theme={theme} />;
  if (fileName === 'CloudInfraImg') skillSVG = <CloudInfraImg theme={theme} />;
  if (fileName === 'WebDeveloperImg') skillSVG = <WebDeveloperImg theme={theme} />;
  if (fileName === 'UndrawCodingImg') skillSVG = <UndrawCodingImg theme={theme} />;
  if (fileName === 'GitActivityImg') skillSVG = <GitActivityImg theme={theme} />;
  if (fileName === 'GitActivityImg') skillSVG = <GitActivityImg theme={theme} />;
  return skillSVG;
};

const SkillContainer = ({ theme }) => (
  <div className="main" id="skills">
    <div className="skills-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="skills-header" style={{ color: theme.text }}>
          {skills.title}
        </h1>
      </Fade>
    </div>
    <div>
      {skills.data.map((skill) => (
        <div className="skills-main-div" key={skill.fileName}>
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skill.title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skill.softwareSkills} theme={theme} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                <ul>
                  {skill.skills.map((skillSentence) => (
                    <p>
                      <li
                        key={skillSentence}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </li>
                    </p>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillContainer;
