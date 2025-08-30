import { useMemo } from 'react';

type FilterFn<T> = (item: T) => boolean;

interface UseProcessedDataProps<T> {
	data: T[];
	searchFilter?: string;
	searchFields?: (keyof T)[];
	customFilterFns?: FilterFn<T>[];
	sortBy?: keyof T;
	sortDirection?: 'asc' | 'desc';
}
export function useProcessedData<T>({
	data,
	searchFilter,
	searchFields = [],
	customFilterFns = [],
	sortBy,
	sortDirection = 'asc',
}: UseProcessedDataProps<T>) {
	const processed = useMemo(() => {
		let result = [...data];

		if (searchFilter && searchFields.length > 0) {
			const searchValue = searchFilter.toLowerCase();
			result = result.filter((item) =>
				searchFields.some((field) =>
					String(item[field] ?? '')
						.toLowerCase()
						.includes(searchValue)
				)
			);
		}

		for (const filterFn of customFilterFns) {
			result = result.filter(filterFn);
		}

		if (sortBy) {
			result = result.sort((a, b) => {
				const aValue = a[sortBy];
				const bValue = b[sortBy];
				if (aValue == null || bValue == null) return 0;
				if (typeof aValue === 'number' && typeof bValue === 'number') {
					return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
				}
				return sortDirection === 'asc'
					? String(aValue).localeCompare(String(bValue))
					: String(bValue).localeCompare(String(aValue));
			});
		}

		return result;
	}, [data, searchFilter, searchFields, customFilterFns, sortBy, sortDirection]);

	return {
		data: processed,
	};
}
