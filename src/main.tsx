import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { ConfigProvider } from 'antd'

import { router } from '@/router'
import { store } from '@/store'
import { theme } from '@/styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
