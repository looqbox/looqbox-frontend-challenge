import { createBrowserRouter } from 'react-router-dom'

import { Root } from '@/root'
import { HomePage } from '@/routes/home'
import { PokemonPage } from '@/routes/pokemon'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/pokemon/:nameOrCode',
        element: <PokemonPage />,
      },
    ],
  },
])
