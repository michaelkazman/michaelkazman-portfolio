import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import TopButton from '../../../components/topButton/TopButton';
import './Error.css';

const Error = ({ theme }) => (
  <div className="error-main">
    <Header theme={theme} />
    <div className="error-class">
      <Fade bottom duration={2000} distance="40px">
        <h1>Woops</h1>
        <h1 className="error-404">404</h1>
        <p>The requested page is unavailable at the moment!</p>
        <Link
          className="main-button"
          to="/home"
          style={{
            color: theme.body,
            backgroundColor: theme.text,
            border: `solid 1px ${theme.text}`,
            display: 'inline-flex',
          }}
        >
          Go Home
        </Link>
      </Fade>
    </div>
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
);

export default Error;
