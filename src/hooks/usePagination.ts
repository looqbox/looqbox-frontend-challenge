import { useMemo, useState } from 'react';

export function usePagination<T>(data: T[], pageSize = 20) {
	const [page, setPage] = useState(1);

	const totalPages = useMemo(() => Math.ceil(data.length / pageSize) || 1, [data.length, pageSize]);

	const paginatedData = useMemo(() => {
		const start = (page - 1) * pageSize;
		return data.slice(start, start + pageSize);
	}, [data, page, pageSize]);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
	};

	return { page, setPage, totalPages, paginatedData, handlePageChange };
}
