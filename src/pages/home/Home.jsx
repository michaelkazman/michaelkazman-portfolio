import React from 'react';
import Header from '../../components/header/Header';
import Greeting from '../../containers/greeting/Greeting';
import Skills from '../../containers/skill/Skill';
import Footer from '../../components/footer/Footer';
import TopButton from '../../components/topButton/TopButton';

const HomePage = ({ theme }) => (
  <div>
    <Header theme={theme} />
    <Greeting theme={theme} />
    <Skills theme={theme} />
    <Footer theme={theme} />
    <TopButton theme={theme} />
  </div>
);

export default HomePage;
