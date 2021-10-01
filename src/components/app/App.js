import React from "react";
import "./App.css";
import Main from "../../containers/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../static/global";
import { useSelector } from 'react-redux'
import { selectTheme } from '../../app/theme/themeSlice'

function App() {
  const theme = useSelector(state => selectTheme(state))

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
