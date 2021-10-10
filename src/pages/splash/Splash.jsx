import React, { useState, useEffect, useRef } from 'react';
import './Splash.css';
import { Redirect } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

const AnimatedSplash = ({ theme }) => (
  <div className="logo_wrapper">
    <div className="screen" style={{ backgroundColor: theme.text }}>
      <Loader className="logo" theme={theme} />
    </div>
  </div>
);

const SplashPage = ({ theme }) => {
  const [redirect, setRedirect] = useState(false);
  const splashDuration = 5500;
  const redirectTimer = useRef();

  useEffect(() => {
    if (!redirect) {
      redirectTimer.current = setTimeout(() => setRedirect(true), splashDuration);
    } else {
      clearTimeout(redirectTimer.current);
    }
  }, [redirect]);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={theme} />
  );
};

export default SplashPage;
