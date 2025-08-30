import { LoadingComponent } from '@/components/modules';
import { Pagination, Table as TableUI } from '@/components/ui';
import { usePagination, useProcessedData } from '@/hooks';
import { ArrowDownNarrowWideIcon, ArrowUpNarrowWideIcon } from 'lucide-react';

import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface Column<T> {
	key: keyof T;
	header: string;
	render?: (value: any, row: T) => ReactNode;
}

export interface TableGenericProps<T extends Record<string, any>> {
	data: T[];
	columns: Column<T>[];
	isLoading?: boolean;
	onRowClick?: (item: T) => void;
	searchFilter?: string;
	statusFilter?: string;
	renderActions?: (row: T) => ReactNode;
	children?: (row: T) => ReactNode;
}

function TableGeneric<T extends Record<string, any>>({
	data,
	columns,
	isLoading,
	onRowClick,
	searchFilter = '',
	statusFilter = '',
	renderActions,
	children,
}: TableGenericProps<T>) {
	const { t } = useTranslation();

	const [page, setPage] = useState(1);

	useEffect(() => {
		setPage(1);
	}, [searchFilter, statusFilter]);

	const [sortBy, setSortBy] = useState<keyof T>(columns[0]?.key);
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

	const processedData = useProcessedData({
		data,
		searchFilter,
		searchFields: columns.map((col) => col.key as string),
		customFilterFns: [(item) => !statusFilter || statusFilter === 'all' || item.status === statusFilter],
		sortBy,
		sortDirection,
	});

	const { page: currentPage, totalPages, paginatedData, handlePageChange } = usePagination(processedData.data);

	useEffect(() => {
		if (currentPage !== page) setPage(currentPage);
	}, [currentPage, page]);

	if (isLoading) {
		return (
			<div className='w-full h-32 flex items-center justify-center'>
				<LoadingComponent message={t('commons.states.loading')} />
			</div>
		);
	}

	return (
		<div className='w-full'>
			<div className=' w-full overflow-x-auto'>
				<TableUI.Root>
					<TableUI.Header>
						<TableUI.Row>
							{columns.map((column) => (
								<TableUI.Head
									className={`font-semibold cursor-pointer ${sortBy === column.key ? 'underline' : ''}`}
									key={String(column.key)}
									onClick={() => {
										if (sortBy === column.key) {
											setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
										} else {
											setSortBy(column.key);
											setSortDirection('asc');
										}
									}}
								>
									<div className='flex flex-row gap-2'>
										<div className='capitalize'>{column.header}</div>
										<div>
											{sortBy === column.key && sortDirection === 'asc' ? (
												<ArrowDownNarrowWideIcon />
											) : sortBy === column.key && sortDirection === 'desc' ? (
												<ArrowUpNarrowWideIcon />
											) : null}
										</div>
									</div>
								</TableUI.Head>
							))}
							{renderActions && <TableUI.Head className='w-auto font-semibold text-center'>Ações</TableUI.Head>}
						</TableUI.Row>
					</TableUI.Header>
					<TableUI.Body>
						{paginatedData.map((row, rowIndex) => (
							<TableUI.Row
								key={rowIndex + (page - 1) * 20}
								className={onRowClick ? 'cursor-pointer hover:bg-muted/50' : ''}
								onClick={() => onRowClick?.(row)}
							>
								{columns.map((column) => (
									<TableUI.Cell
										key={`${rowIndex}-${String(column.key)}`}
										title={String(row[column.key])}
										className='capitalize'
									>
										{column.render ? column.render(row[column.key], row) : row[column.key]}
									</TableUI.Cell>
								))}
								{(children || renderActions) && (
									<TableUI.Cell className='flex flex-row justify-around gap-2'>
										{children ? children(row) : renderActions?.(row)}
									</TableUI.Cell>
								)}
							</TableUI.Row>
						))}
					</TableUI.Body>
				</TableUI.Root>

				{totalPages > 1 && (
					<div className='flex justify-center mt-4'>
						<Pagination.Root>
							<Pagination.Previous onClick={() => handlePageChange(page - 1)} />
							<Pagination.Content>
								{Array.from({ length: totalPages }).map((_, idx) => (
									<Pagination.Item key={idx}>
										<Pagination.Link isActive={page === idx + 1} onClick={() => handlePageChange(idx + 1)}>
											{idx + 1}
										</Pagination.Link>
									</Pagination.Item>
								))}
							</Pagination.Content>
							<Pagination.Next onClick={() => handlePageChange(page + 1)} />
						</Pagination.Root>
					</div>
				)}
			</div>
		</div>
	);
}

TableGeneric.displayName = 'TableGeneric';

export default TableGeneric;
