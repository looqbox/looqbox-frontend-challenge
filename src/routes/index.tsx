import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/pages/_layouts/App';
import { NotFound } from '@/pages/404';
import { Home } from '@/pages/home';
import { PokemonPage } from '@/pages/pokemon';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pokemons/:pokemonName', element: <PokemonPage /> },
    ],
  },
]);
