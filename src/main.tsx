import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/Router.tsx';

createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
