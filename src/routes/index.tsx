import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/components/layouts/MainLayout';
import { PokemonDetails } from '@/features/pokemon/pages/Details';
import { PokemonHomePage } from '@/features/pokemon/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PokemonHomePage />,
      },
    ],
  },
  {
    path: '/details/:name',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PokemonDetails />,
      },
    ],
  },
]);
