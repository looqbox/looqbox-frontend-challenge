import '@/global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from './lib/react-query';
import { router } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PokeWiki" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
