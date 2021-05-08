import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/GlobalStyles';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);