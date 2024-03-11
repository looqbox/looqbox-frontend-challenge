import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './views/Home/index.tsx';
import DetailsPage from './views/Details/index.tsx';
import NotFoundPage from './views/NotFound/index.tsx';
import './index.css'
import { ConfigProvider } from 'antd';

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
    <ConfigProvider theme={{token: { fontFamily: 'Montserrat' }}}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
