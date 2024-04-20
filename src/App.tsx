import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './router';

import './styles/index.css';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const App = () => {

	return (
		<QueryClientProvider client={queryClient}>
      <Router />
		</QueryClientProvider>
	);
};

export default App;