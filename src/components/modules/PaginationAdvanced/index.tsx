import { Pagination } from '@/components/ui';

export interface PaginationAdvancedProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const PaginationAdvanced = ({ page, totalPages, onPageChange, ...rest }: PaginationAdvancedProps) => {
	return (
		<Pagination.Root {...rest}>
			<Pagination.Previous
				onClick={() => {
					if (page !== 1) onPageChange(page - 1);
				}}
				isActive={page !== 1}
			/>
			<Pagination.Content>
				{page > 3 && ![1, 2, 3, 4, 5].includes(page) && (
					<Pagination.Item>
						<Pagination.Link isActive={page === 1} onClick={() => onPageChange(1)}>
							1
						</Pagination.Link>
					</Pagination.Item>
				)}
				{page > 4 && (
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				)}
				{Array.from({ length: totalPages }, (_, idx) => idx + 1)
					.filter(
						(p) =>
							p === page ||
							(page <= 3 && p <= 5) ||
							(page >= totalPages - 2 && p > totalPages - 5) ||
							(p >= page - 2 && p <= page + 2)
					)
					.map((p) => (
						<Pagination.Item key={p}>
							<Pagination.Link isActive={page === p} onClick={() => onPageChange(p)}>
								{p}
							</Pagination.Link>
						</Pagination.Item>
					))}
				{page < totalPages - 3 && (
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				)}
				{page < totalPages - 2 &&
					![totalPages, totalPages - 1, totalPages - 2, totalPages - 3, totalPages - 4].includes(page) && (
						<Pagination.Item>
							<Pagination.Link isActive={page === totalPages} onClick={() => onPageChange(totalPages)}>
								{totalPages}
							</Pagination.Link>
						</Pagination.Item>
					)}
			</Pagination.Content>
			<Pagination.Next
				onClick={() => {
					if (page !== totalPages) onPageChange(page + 1);
				}}
				isActive={page !== totalPages}
			/>
		</Pagination.Root>
	);
};

PaginationAdvanced.displayName = 'PaginationAdvanced';

export default PaginationAdvanced;
