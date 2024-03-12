import { createBrowserRouter } from 'react-router-dom'

// import { Error } from './pages/error'
import { Home } from './pages/Home'
import { BaseLayout } from './pages/layouts/base-layout'
import { Pokemon } from './routes/pokemon'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    // errorElement: <Error />,
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
