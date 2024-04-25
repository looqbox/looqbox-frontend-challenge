import { ErrorBoundary } from 'react-error-boundary';
import Router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './pages/Error';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
