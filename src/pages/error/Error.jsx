import React from 'react';
import { Fade } from 'react-reveal';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TopButton from '../../components/topButton/TopButton';
import Button from '../../components/button/Button';
import './Error.css';

const ErrorPage = ({ theme, error }) => (
  <div className="error-main">
    <Header theme={theme} />
    <div className="error-class">
      <Fade bottom duration={2000} distance="40px">
        <h1>Whoops</h1>
        <h1 className="error-404">{error}</h1>
        <p>Huh, you seem lost...</p>
        <Button
          text="Home"
          newTab
          href={`${window.location.origin}/#/home`}
          theme={theme}
          className="error-button"
        />
      </Fade>
    </div>
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
);

export default ErrorPage;
