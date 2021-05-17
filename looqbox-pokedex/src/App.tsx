import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Provider from 'shared/contexts';
import { GlobalStyle } from 'shared/styles/globalStyle';

import Routes from './routes';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </Provider>
  );
}

export default App;
