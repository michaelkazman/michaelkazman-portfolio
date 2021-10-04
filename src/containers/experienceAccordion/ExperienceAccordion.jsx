import React from 'react';
import { Accordion } from '@mui/material/';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import './ExperienceAccordion.css';

const ExperienceAccordion = ({ theme, sections }) => (
  <div className="experience-accord">
    <Accordion>
      {sections.map((section) => (
        <div
          className="accord-panel"
          title={section.title}
          key={section.title}
        >
          {section.experiences.map((experience) => (
            <ExperienceCard key={`${experience.title}`} experience={experience} theme={theme} />
          ))}
        </div>
      ))}
    </Accordion>
  </div>
);

export default ExperienceAccordion;
