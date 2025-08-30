import { TextTooltip } from '@/components/modules';
import { Button } from '@/components/ui';
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from 'lucide-react';
import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export type SortDirection = 'asc' | 'desc';

export interface SortComponentProps {
	value: SortDirection;
	onSortChange: (direction: SortDirection) => void;
}

const SortComponent: FC<SortComponentProps> = ({ value, onSortChange }) => {
	const { t } = useTranslation();
	const [direction, setDirection] = useState<SortDirection>('desc');

	useEffect(() => {
		setDirection(value);
	}, [value]);

	const handleClick = useCallback(() => {
		const newDirection = direction === 'desc' ? 'asc' : 'desc';
		setDirection(newDirection);
		onSortChange(newDirection);
	}, [direction, onSortChange]);

	return (
		<TextTooltip content={direction === 'desc' ? t('commons.filters.sort.asc') : t('commons.filters.sort.desc')}>
			<Button variant='outline' size='icon' onClick={handleClick}>
				{direction === 'desc' ? <ArrowDownNarrowWide className='h-4 w-4' /> : <ArrowUpNarrowWide className='h-4 w-4' />}
			</Button>
		</TextTooltip>
	);
};

SortComponent.displayName = 'SortComponent';

export default SortComponent;
