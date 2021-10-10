import React from 'react';
import './SocialMedia.css';
import styled from 'styled-components';
import { socialMediaLinks } from '../../static/portfolio';

const IconWrapper = styled.span`
  i {
    background-color: ${({ backgroundColor }) => backgroundColor};
    transition: ease-out 0.6s;
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: ease-in 0.4s;
  }
`;

const socialMedia = () => (
  <div className="social-media-div">
    {socialMediaLinks.map(({
      link, fontAwesomeIcon, backgroundColor,
    }) => (
      <a
        href={link}
        className="icon-button"
        target="_blank"
        rel="noopener noreferrer"
        key={link}
      >
        <IconWrapper backgroundColor={backgroundColor}>
          <i className={`fab ${fontAwesomeIcon}`} />
        </IconWrapper>
      </a>
    ))}
  </div>
);

export default socialMedia;
