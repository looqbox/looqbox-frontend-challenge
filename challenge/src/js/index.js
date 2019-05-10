import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/index';

import { Router } from 'react-router-dom';
import history from './router/history';

import App from './components/App';
import '../scss/index.scss';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

// const importAll = r => r.keys().forEach(r);
// importAll(require.context('../img/', true, /\.(jpe?g|png|gif)$/));

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
