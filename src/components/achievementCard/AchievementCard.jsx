/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const openUrlInNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

const AchievementCard = ({ cardInfo }) => (
  <div className="certificate-card">
    <div className="certificate-image-div">
      <img src={cardInfo.image} alt="PWA" className="card-image" />
    </div>
    <div className="certificate-detail-div">
      <h5 className="card-title">{cardInfo.title}</h5>
      <p className="card-subtitle">{cardInfo.description}</p>
    </div>
    <div className="certificate-card-footer">
      {cardInfo.footer.map((v) => <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>)}
    </div>
  </div>
);

export default AchievementCard;
