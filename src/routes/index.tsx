import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const PokemonDetail = lazy(() => import('../pages/PokemonDetail'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Layout = lazy(() => import('../pages/Layout'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pokemon/:id', element: <PokemonDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
