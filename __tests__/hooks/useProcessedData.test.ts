import { renderHook } from '@testing-library/react';
import { useProcessedData } from '../../src/hooks/useProcessedData';

describe('useProcessedData', () => {
	const data = [
		{ id: 1, name: 'Bulbasaur', type: 'grass', score: 10 },
		{ id: 2, name: 'Charmander', type: 'fire', score: 20 },
		{ id: 3, name: 'Squirtle', type: 'water', score: 15 },
	];

	it('filtra por searchFilter e searchFields', () => {
		const { result } = renderHook(() =>
			useProcessedData({
				data,
				searchFilter: 'char',
				searchFields: ['name'],
			})
		);
		expect(result.current.data).toEqual([{ id: 2, name: 'Charmander', type: 'fire', score: 20 }]);
	});

	it('aplica customFilterFns', () => {
		const { result } = renderHook(() =>
			useProcessedData({
				data,
				customFilterFns: [(item) => item.type === 'water'],
			})
		);
		expect(result.current.data).toEqual([{ id: 3, name: 'Squirtle', type: 'water', score: 15 }]);
	});

	it('ordena por score desc', () => {
		const { result } = renderHook(() =>
			useProcessedData({
				data,
				sortBy: 'score',
				sortDirection: 'desc',
			})
		);
		expect(result.current.data[0].score).toBe(20);
	});
});
