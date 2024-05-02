import { render, waitFor } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
	it('should render correctly', async () => {
		await waitFor(() => {
			render(<App />);
		});
	});
});