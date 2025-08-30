import { Card, Dialog } from '@/components/ui';
import { Pokemon } from '@/types';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PokemonCries from './PokemonCries';
import PokemonProfileInfo from './PokemonProfileInfo';
import PokemonStats from './PokemonStats';
import PokemonTags from './PokemonTags';

export interface PokemonCardProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon, isOpen, onOpenChange }) => {
	const { t } = useTranslation();
	if (!pokemon) return null;

	const mainSprite = useMemo(
		() => pokemon.sprites?.other?.['official-artwork']?.front_default || '',
		[pokemon.sprites]
	);

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Content
				aria-description={pokemon.name}
				aria-describedby={undefined}
				className='max-w-md p-0 bg-[var(--card)] rounded-2xl shadow-2xl border-4 border-[var(--primary)]'
			>
				<VisuallyHidden>
					<Dialog.Title>{pokemon.name}</Dialog.Title>
				</VisuallyHidden>

				<Card.Root className='bg-transparent shadow-none border-none p-0'>
					<Card.Header className='flex flex-col items-center gap-2 bg-[var(--secondary)]/20 rounded-t-2xl pb-2'>
						<img
							src={mainSprite}
							alt={pokemon.name}
							className='w-32 h-32 object-contain drop-shadow-lg -mt-8 mb-2 bg-[var(--background)] rounded-full border-4 border-[var(--primary)]'
						/>

						<Card.Title className='text-3xl font-bold text-[var(--primary)] flex items-center gap-2 capitalize'>
							{pokemon.name}
						</Card.Title>

						<PokemonTags
							title={t('pokemon.types')}
							titleClassName='text-center'
							items={pokemon.types}
							getName={(item) => item.type.name}
						/>

						<Card.Description className='text-sm text-[var(--muted-foreground)] mt-1 capitalize'>
							{pokemon.species?.name && `${t('pokemon.species')} ${pokemon.species.name}`}
						</Card.Description>
					</Card.Header>

					<Card.Content className='flex flex-col gap-4 mt-2'>
						<PokemonProfileInfo
							items={[
								{
									label: t('pokemon.height'),
									value: `${pokemon.height / 10} ${t('commons.meter')}`,
									color: 'text-[var(--chart-1)]',
								},
								{
									label: t('pokemon.weight'),
									value: `${pokemon.weight / 10} ${t('commons.weightUnit')}`,
									color: 'text-[var(--chart-2)]',
								},
								{
									label: t('pokemon.experience'),
									value: `${pokemon.base_experience} ${t('commons.experience')}`,
									color: 'text-[var(--chart-3)]',
								},
							]}
						/>
						<PokemonTags
							title={t('pokemon.abilities')}
							items={pokemon.abilities}
							getName={(item) => item.ability.name}
							getVariant={(item) => (item.is_hidden ? 'outline' : 'ghost')}
						/>
						<PokemonStats stats={pokemon.stats} />
						<PokemonTags
							title={t('pokemon.moves')}
							items={pokemon.moves}
							getName={(item) => item.move.name}
							getVariant={() => 'ghost'}
							max={5}
						/>
					</Card.Content>

					<Card.Footer className='flex flex-col items-start pb-2 gap-2'>
						{pokemon.cries && (
							<PokemonCries
								title={t('pokemon.cries')}
								playLatest={t('commons.button.playLatest')}
								playLegacy={t('commons.button.playLegacy')}
								cries={pokemon.cries}
							/>
						)}
					</Card.Footer>
				</Card.Root>
			</Dialog.Content>
		</Dialog.Root>
	);
};

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;
