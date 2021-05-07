import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import customTheme from './customtheme';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
