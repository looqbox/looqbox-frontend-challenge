// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pokemon/:id', element: <Statistics /> },
    ],
  },
]);
