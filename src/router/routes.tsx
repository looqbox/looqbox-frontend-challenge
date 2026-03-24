import { createBrowserRouter } from 'react-router'

import { MainLayout } from '../layout'
import { Component as Details } from '../pages/Details'
import { Component as Home } from '../pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, Component: Home },
      { path: '/details/:id', Component: Details },
    ],
  },
])
