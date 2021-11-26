import React from 'react';
import './Footer.css';
import { Fade } from 'react-reveal';
import { greeting } from '../../static/portfolio';

const Footer = ({ theme }) => (
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

export default Footer;
