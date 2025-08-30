import { act, renderHook } from '@testing-library/react';
import { useThemeToggle } from '../../src/hooks/useThemeToggle';

describe('useThemeToggle', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
			})),
		});
	});
	beforeEach(() => {
		localStorage.clear();
		document.documentElement.classList.remove('dark');
	});

	it('deve detectar tema escuro pelo localStorage', () => {
		localStorage.setItem('theme', 'dark');
		const { result } = renderHook(() => useThemeToggle());
		expect(result.current.isDark).toBe(true);
		expect(document.documentElement.classList.contains('dark')).toBe(true);
	});

	it('deve alternar o tema corretamente', () => {
		const { result } = renderHook(() => useThemeToggle());
		act(() => {
			result.current.toggleTheme();
		});
		expect(result.current.isDark).toBe(true);
		expect(localStorage.getItem('theme')).toBe('dark');
		act(() => {
			result.current.toggleTheme();
		});
		expect(result.current.isDark).toBe(false);
		expect(localStorage.getItem('theme')).toBe('light');
	});
});
