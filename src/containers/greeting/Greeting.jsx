import React from 'react';
import './Greeting.css';
import { Fade } from 'react-reveal';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { greeting } from '../../static/portfolio';
import FeelingProud from './FeelingProud';

const GreetingContainer = ({ theme }) => (
  <Fade bottom duration={2000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
              {' '}
              <span className="wave-emoji" role="img" aria-label="wave emoji">👋</span>
            </h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              <span>I&apos;m </span>
              <span style={{ color: theme.imageHighlight }}>
                {greeting.name}
              </span>
              {'. '}
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div style={{ display: 'flex' }} className="portfolio-repo-btn-div">
              <Button
                text="CONTACT ME"
                newTab
                href={`${window.location.origin}/#/contact`}
                theme={theme}
                style={{ margin: '0px 8px' }}
              />
              <Button
                text="RESUME"
                newTab
                href="https://github.com/michaelkazman/michaelkazman-portfolio/blob/master/images/michaelkazman_resume.pdf"
                theme={theme}
                style={{ margin: '0px 8px' }}
              />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </div>
  </Fade>
);

export default GreetingContainer;
