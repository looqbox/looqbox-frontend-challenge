import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

import { antdTheme } from './config/antd-theme'
import { reduxStore } from './config/redux-store'
import { router } from './router/routes'

import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <Provider store={reduxStore}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </StrictMode>
)
