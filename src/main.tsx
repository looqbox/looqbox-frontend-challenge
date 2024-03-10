import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './views/Home/index.tsx';
import DetailsPage from './views/Details/index.tsx';
import NotFoundPage from './views/NotFound/index.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/details/:name',
    element: <DetailsPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
