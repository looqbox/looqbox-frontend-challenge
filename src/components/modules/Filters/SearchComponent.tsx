import { Input } from '@/components/ui';
import { Search } from 'lucide-react';
import { ChangeEvent, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface SearchComponentProps {
	value: string;
	onFilterChange: (value: string) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ value, onFilterChange }) => {
	const { t } = useTranslation();

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			onFilterChange(event.target.value);
		},
		[onFilterChange]
	);

	return (
		<div className={'flex items-center gap-2  relative w-full py-4'}>
			<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
			<Input
				value={value}
				onChange={handleChange}
				className='pl-9'
				placeholder={t('commons.filters.searchPlaceholder')}
			/>
		</div>
	);
};

SearchComponent.displayName = 'SearchComponent';

export default SearchComponent;
