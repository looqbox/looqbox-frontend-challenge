import '@/global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from './lib/react-query';
import { router } from './routes';
import { store } from './store';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PokeWiki" />
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
