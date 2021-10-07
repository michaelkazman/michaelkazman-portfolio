import React from 'react';
import './Skills.css';
import { Fade } from 'react-reveal';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { skills } from '../../static/portfolio';
import DataScienceImg from './DataScienceImg';
import FullStackImg from './FullStackImg';
import CloudInfraImg from './CloudInfraImg';
import DesignImg from './DesignImg';

function GetSkillSvg({ fileName, theme }) {
  if (fileName === 'DataScienceImg') return <DataScienceImg theme={theme} />;
  if (fileName === 'FullStackImg') return <FullStackImg theme={theme} />;
  if (fileName === 'CloudInfraImg') return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
}

const SkillSection = ({ theme }) => (
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
);

export default SkillSection;
