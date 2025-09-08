import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../pages/layout/AppLayout';
import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pokemon/:id', element: <PokemonDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
