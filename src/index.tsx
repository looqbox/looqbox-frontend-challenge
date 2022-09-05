import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonsProvider } from './providers/PokemonsProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </React.StrictMode>
);
