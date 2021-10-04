import React from 'react';
import { Accordion, Panel } from 'baseui/accordion';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import './ExperienceAccordion.css';

const ExperienceAccordion = ({ theme, sections }) => (
  <div className="experience-accord">
    <Accordion>
      {sections.map((section) => (
        <Panel
          className="accord-panel"
          title={section.title}
          key={section.title}
        >
          {section.experiences.map((experience) => (
            <ExperienceCard key={`${section.title}-experience-card`} experience={experience} theme={theme} />
          ))}
        </Panel>
      ))}
    </Accordion>
  </div>
);

export default ExperienceAccordion;
