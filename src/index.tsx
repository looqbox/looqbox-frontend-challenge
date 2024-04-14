import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from 'global/redux/store'
import defaultTheme from 'global/styles/defaultTheme'
import { GlobalStyles } from 'global/styles/global-styles'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
