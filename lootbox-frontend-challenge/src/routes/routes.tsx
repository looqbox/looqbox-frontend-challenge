import { createBrowserRouter } from 'react-router-dom';
import { DetailsPage } from '../pages/[pokemon]';
import { HomePage } from '../pages/home.page';
import { NotFoundPage } from '../pages/not-found.page';

export const routes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:pokemon',
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
