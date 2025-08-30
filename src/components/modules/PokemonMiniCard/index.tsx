import { Card, Skeleton } from '@/components/ui';
import { getIdFromUrl, getMainSprite } from '@/helpers';
import { useGetPokemon, useGetPokemonForm, useGetPokemonSpecies, useGetVersion } from '@/hooks/queries';
import { PokemonListResponse } from '@/types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface PokemonMiniCardProps {
	pokemons: PokemonListResponse['results'][number];
	onClick: () => void;
}

const PokemonMiniCard: FC<PokemonMiniCardProps> = ({ pokemons, onClick }) => {
	const { t } = useTranslation();
	const id = Number(getIdFromUrl(pokemons.url));
	const species = useGetPokemonSpecies(id);
	const version = useGetVersion(id);
	const pokemon = useGetPokemon(id);
	const form = useGetPokemonForm(id);
	const mainSprite = getMainSprite(pokemons.url);

	const infoFields = [
		{
			label: t('pokemon.experience'),
			value: pokemon.data?.base_experience ?? '',
		},
		{
			label: t('pokemon.form'),
			value: form.data?.name ?? '',
		},
		{
			label: t('pokemon.species'),
			value: species.data?.name ?? '',
		},
		{
			label: t('pokemon.version'),
			value: version.data?.name ?? '',
		},
	];

	return pokemon.isLoading ? (
		<Card.Root className='group flex flex-col items-center justify-between pt-16 p-6 gap-4 rounded-2xl border-4 border-[var(--primary)] bg-gradient-to-b from-[var(--background)] to-[var(--secondary)] shadow-xl min-w-[200px] min-h-[280px] w-44 select-none relative opacity-70'>
			<div className='absolute left-1/2 -translate-x-1/2 -top-4'>
				<Skeleton className='w-32 h-32 rounded-full ' />
			</div>
			<div className='w-full z-30 flex flex-col items-center mt-20'>
				<Skeleton className='h-6 w-24 mb-2 rounded' />
			</div>
			<div className='flex flex-col gap-1 w-full mt-2'>
				{[...Array(4)].map((_, idx) => (
					<Skeleton key={idx} className='h-4 w-full rounded mb-1' />
				))}
			</div>
			<div className='z-100 absolute top-2 right-2'>
				<Skeleton className='h-6 w-12 rounded-full' />
			</div>
		</Card.Root>
	) : (
		<Card.Root
			onClick={onClick}
			className='group flex flex-col items-center justify-between pt-16 p-6 gap-4 rounded-2xl border-4 border-[var(--primary)] bg-gradient-to-b from-[var(--background)] to-[var(--secondary)] shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer min-w-[200px] min-h-[280px] w-44 select-none relative'
		>
			{mainSprite && (
				<img
					src={mainSprite}
					alt={pokemons.name}
					className='z-20 w-32 h-32 object-contain drop-shadow-lg bg-[var(--background)] rounded-full border-4 border-[var(--secondary)] absolute left-1/2 -translate-x-1/2 -top-4 transition-transform group-hover:scale-110'
					loading='lazy'
					style={{ pointerEvents: 'none' }}
				/>
			)}
			<div className='w-full z-30 flex flex-col items-center'>
				<span className='capitalize font-extrabold text-2xl text-[var(--primary)] drop-shadow-sm tracking-wide mt-20 mb-1 text-center'>
					{pokemons.name}
				</span>
			</div>
			<div className='flex flex-col gap-1 w-full mt-2'>
				{infoFields.map(({ label, value }, idx) => (
					<div key={idx} className='flex flex-row justify-between text-xs text-muted-foreground'>
						<div>{label}</div>
						<div className='font-semibold text-primary'>{value}</div>
					</div>
				))}
			</div>
			<div className='z-30 absolute top-2 right-2 bg-[var(--card-foreground)] text-secondary text-xs px-2 py-1 rounded-full shadow font-mono '>
				{pokemon.data?.base_experience ?? ''} xp
			</div>
		</Card.Root>
	);
};

PokemonMiniCard.displayName = 'PokemonMiniCard';

export default PokemonMiniCard;
