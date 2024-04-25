import Error from '@/pages/Error';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Pokemon from '@/pages/Pokemon';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/:name',
    element: <Pokemon />,
    errorElement: <Error />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
