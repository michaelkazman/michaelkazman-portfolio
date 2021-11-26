/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../pages/home/HomeComponent';
import Splash from '../pages/splash/Splash';
import Education from '../pages/education/EducationComponent';
import Experience from '../pages/experience/Experience';
import Opensource from '../pages/opensource/Opensource';
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';
import { settings } from '../static/portfolio';
import Error404 from '../pages/errors/error404/Error';

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
            <Projects {...props} theme={theme} />
          )}
        />
        <Route
          path="*"
          render={(props) => (
            <Error404 {...props} theme={theme} />
          )}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default Main;
