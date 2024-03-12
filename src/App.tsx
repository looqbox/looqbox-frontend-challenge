import Routes from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import "antd/dist/reset.css";
import "./_app.scss";
import { PokemonInformationContextProvider } from './contexts/PokemonInformation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif'
        },
        components: {
          Card: {
            paddingLG: 16,
          },
        },
      }}
    >
      <PokemonInformationContextProvider>
        <Routes/>
      </PokemonInformationContextProvider>
    </ConfigProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
