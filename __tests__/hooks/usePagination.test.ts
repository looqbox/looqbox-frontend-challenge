import { act, renderHook } from '@testing-library/react';
import { usePagination } from '../../src/hooks/usePagination';

describe('usePagination', () => {
	const data = Array.from({ length: 50 }, (_, i) => i + 1);

	it('deve paginar corretamente', () => {
		const { result } = renderHook(() => usePagination(data, 10));
		expect(result.current.page).toBe(1);
		expect(result.current.totalPages).toBe(5);
		expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('deve mudar de página corretamente', () => {
		const { result } = renderHook(() => usePagination(data, 10));
		act(() => {
			result.current.handlePageChange(2);
		});
		expect(result.current.page).toBe(2);
		expect(result.current.paginatedData).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	});

	it('não deve permitir página inválida', () => {
		const { result } = renderHook(() => usePagination(data, 10));
		act(() => {
			result.current.handlePageChange(0);
		});
		expect(result.current.page).toBe(1);
	});
});
