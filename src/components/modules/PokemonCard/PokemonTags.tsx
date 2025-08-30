import { Badge } from '@/components/ui';
import { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface PokemonTagsProps<T> {
	title: string;
	items: T[];
	getName: (item: T) => string;
	getVariant?: (item: T) => 'default' | 'outline' | 'secondary' | 'ghost';
	getExtra?: (item: T) => ReactNode;
	max?: number;
	className?: string;
	titleClassName?: string;
}

const PokemonTags = <T,>({
	title,
	items,
	getName,
	getVariant,
	getExtra,
	max,
	className,
	titleClassName,
	...rest
}: PokemonTagsProps<T>) => {
	const { t } = useTranslation();
	if (!Array.isArray(items) || items.length === 0) return null;

	const showItems = useMemo(() => (typeof max === 'number' ? items.slice(0, max) : items), [items, max]);

	return (
		<div className={`flex flex-col gap-2 ${className ?? ''}`} {...rest}>
			<span className={`font-semibold text-[var(--primary)] ${titleClassName ?? ''}`}>{title}</span>
			<div className='flex flex-wrap gap-2 max-h-16 overflow-y-auto items-center '>
				{showItems.map((item) => (
					<Badge key={getName(item)} variant={getVariant ? getVariant(item) : 'outline'} className='capitalize  '>
						{getName(item)}
						{getExtra && getExtra(item)}
					</Badge>
				))}
				{typeof max === 'number' && items.length > max && (
					<span className='text-xs text-[var(--muted-foreground)]'>
						+{items.length - max} {t('commons.more')}
					</span>
				)}
			</div>
		</div>
	);
};

PokemonTags.displayName = 'PokemonTags';

export default PokemonTags;
