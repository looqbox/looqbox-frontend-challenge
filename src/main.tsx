import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import { router } from './router/routes'
import { Provider } from 'react-redux'
import { reduxStore } from './config/redux-store'

import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
