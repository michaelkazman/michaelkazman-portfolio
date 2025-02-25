import React from 'react';
import './Achievement.css';
import AchievementCard from '../../components/achievementCard/AchievementCard';
import { achievementSection } from '../../static/portfolio';

const AchievementContainer = () => (
  <div className="main" id="achievements">
    <div className="achievement-main-div">
      <div className="achievement-header">
        <h1 className="heading achievement-heading">
          {achievementSection.title}
        </h1>
        <p className="subTitle achievement-subtitle">
          {achievementSection.subtitle}
        </p>
      </div>
      <div className="achievement-cards-div">
        {achievementSection.achivementsCards.map((card) => (
          <AchievementCard
            cardInfo={{
              title: card.title,
              description: card.subtitle,
              image: card.image,
              footer: card.footerLink,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default AchievementContainer;
