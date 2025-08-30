import { renderHook } from '@testing-library/react';
import { useIsMobile } from '../../src/hooks/useMobile';

describe('useIsMobile', () => {
	beforeAll(() => {
		// Mock window.matchMedia
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: query.includes('max-width: 767px'),
				media: query,
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
			})),
		});
	});

	it('deve retornar true se a largura for menor que 768', () => {
		// Simula largura mobile
		Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
		const { result } = renderHook(() => useIsMobile());
		expect(result.current).toBe(true);
	});

	it('deve retornar false se a largura for maior ou igual a 768', () => {
		Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
		const { result } = renderHook(() => useIsMobile());
		expect(result.current).toBe(false);
	});
});
