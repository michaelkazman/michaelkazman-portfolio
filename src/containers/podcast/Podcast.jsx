import React from 'react';
import './Podcast.css';
import { podcastSection } from '../../static/portfolio';

const PodcastContainer = () => (
  <div className="main">
    <div className="podcast-header">
      <h1 className="podcast-header-title">{podcastSection.title}</h1>
      <p className="subTitle podcast-header-subtitle">
        {podcastSection.subtitle}
      </p>
    </div>
    <div className="podcast-main-div">
      {podcastSection.podcast.map((podcastLink) => (
        <div>
          <iframe
            title="podcast"
            className="podcast"
            src={podcastLink}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      ))}
    </div>
  </div>
);

export default PodcastContainer;
