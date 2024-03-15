import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { Home } from './pages/Home'
import { BaseLayout } from './pages/layouts/base-layout'
import { Pokemon } from './pages/pokemon'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pokemon/:id',
        element: <Pokemon />,
      },
    ],
  },
])
