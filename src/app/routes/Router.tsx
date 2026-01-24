import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout/AppLayout';
import { Pokemons } from '../../pages/Pokemons/Pokemons';
import { PokemonDetails } from '../../pages/PokemonDetails/PokemonDetails';
import { Home } from '../../pages/Home/Home';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pokemons', element: <Pokemons /> },
      { path: '/pokemon/:name', element: <PokemonDetails /> },
      { path: '*', element: <div>404 Not Found</div> },
    ],
  },
]);
