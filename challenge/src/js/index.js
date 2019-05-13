/* REACT */
import React from 'react'
import { render } from 'react-dom'

/* REDUX */
import { Provider } from 'react-redux'
import store from './reducers/store'

/* APP */
import App from './components/App'

/* SCSS */
import '../scss/index.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
