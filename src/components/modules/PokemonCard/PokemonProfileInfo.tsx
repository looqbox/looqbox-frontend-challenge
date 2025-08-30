import { FC, ReactNode } from 'react';

export interface ProfileInfoItem {
	label: ReactNode;
	value: ReactNode;
	color?: string;
}

interface PokemonProfileInfoProps {
	items: ProfileInfoItem[];
	className?: string;
}

const PokemonProfileInfo: FC<PokemonProfileInfoProps> = ({ items, className, ...rest }) => {
	if (!items || items.length === 0) return null;
	return (
		<div className={`flex justify-between gap-2 ${className ?? ''}`} {...rest}>
			{items.map((item, idx) => (
				<div className='flex flex-col items-center' key={idx}>
					<span className='text-xs text-[var(--muted-foreground)]'>{item.label}</span>
					<span className={`font-semibold text-lg ${item.color ?? ''}`}>{item.value}</span>
				</div>
			))}
		</div>
	);
};

PokemonProfileInfo.displayName = 'PokemonProfileInfo';

export default PokemonProfileInfo;
