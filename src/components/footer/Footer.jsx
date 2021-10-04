import React from 'react';
import './Footer.css';
import { Fade } from 'react-reveal';
import { greeting } from '../../static/portfolio';

export default function Footer({ theme }) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with
          {' '}
          <span role="img" aria-label="heart emoji">❤️</span>
          {' '}
          by
          {' '}
          {greeting.name}
        </p>
      </Fade>
    </div>
  );
}
