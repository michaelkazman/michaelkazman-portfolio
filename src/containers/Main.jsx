/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Splash from '../pages/splash/Splash';
import Education from '../pages/education/Education';
import Experience from '../pages/experience/Experience';
import Contact from '../pages/contact/Contact';
import Project from '../pages/project/Project';
import { settings } from '../static/portfolio';
import Error from '../pages/error/Error';

const Main = ({ theme }) => (
  <div>
    <HashRouter basename="/">
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            settings.isSplash
              ? <Splash {...props} theme={theme} />
              : <Home {...props} theme={theme} />
          )}
        />
        <Route
          path="/home"
          render={(props) => <Home {...props} theme={theme} />}
        />
        <Route
          path="/experience"
          exact
          render={(props) => (
            <Experience {...props} theme={theme} />
          )}
        />
        <Route
          path="/education"
          render={(props) => (
            <Education {...props} theme={theme} />
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <Contact {...props} theme={theme} />
          )}
        />
        <Route
          path="/splash"
          render={(props) => (
            <Splash {...props} theme={theme} />
          )}
        />
        <Route
          path="/projects"
          render={(props) => (
            <Project {...props} theme={theme} />
          )}
        />
        <Route
          path="*"
          render={(props) => (
            <Error {...props} theme={theme} error={404} />
          )}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default Main;
