/* REACT */
import React from 'react'
import { render } from 'react-dom'

/* REDUX */
import { Provider } from 'react-redux'
import store from './reducers/store'

/* APP */
import App from './components/App'
import '../scss/index.scss'

// const importAll = r => r.keys().forEach(r);
// importAll(require.context('../img/', true, /\.(jpe?g|png|gif)$/));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
