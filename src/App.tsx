import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import router from './lib/router';
import { andtConfig } from './lib/antd';
import { queryClient } from './lib/query';
import { PokemonListProvider } from './contexts/PokemonListContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={andtConfig}>
        <PokemonListProvider>
          <RouterProvider router={router} />
        </PokemonListProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
