import { createBrowserRouter } from 'react-router'

import { MainLayout } from '../layout'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

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
