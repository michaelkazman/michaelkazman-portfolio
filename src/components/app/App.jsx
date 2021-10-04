import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Main from '../../containers/Main';
import GlobalStyles from '../../static/global';
import { selectTheme } from '../../app/theme/themeSlice';

const App = () => {
  const theme = useSelector((state) => selectTheme(state));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main theme={theme} />
    </ThemeProvider>
  );
};

export default App;
