import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout/AppLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Pokemons = lazy(() => import('../../pages/Pokemons/Pokemons'));
const PokemonDetails = lazy(() => import('../../pages/PokemonDetails/PokemonDetails'));

const withSuspense = (node: React.ReactNode) => <Suspense fallback={<div></div>}>{node}</Suspense>;

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: withSuspense(<Home />) },
      { path: '/pokemons', element: withSuspense(<Pokemons />) },
      { path: '/pokemon/:name', element: withSuspense(<PokemonDetails />) },
    ],
  },
]);
