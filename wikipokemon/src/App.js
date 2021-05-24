import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App;
