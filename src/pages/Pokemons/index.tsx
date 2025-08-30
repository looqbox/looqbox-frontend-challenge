import {
	PaginationAdvanced,
	PokemonCard,
	PokemonMiniCard,
	SearchComponent,
	SortComponent,
	SortDirection,
	TableGeneric,
	ViewComponent,
} from '@/components/modules';
import { Button, Separator } from '@/components/ui';
import { usePagination, useProcessedData } from '@/hooks';
import { useGetPokemon, useListPokemons } from '@/hooks/queries';
import { PokemonListItem } from '@/types';
import { EyeIcon } from 'lucide-react';

import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface PokemonsPageProps {}

const PokemonsPage: FC<PokemonsPageProps> = ({ ...rest }) => {
	const { t } = useTranslation();
	const pokemons = useListPokemons({ limit: 2000, offset: 0 });
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const pokemon = useGetPokemon(selectedId ?? '');
	const [dialogOpen, setDialogOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [viewMode, setViewMode] = useState<'card' | 'table'>('card');
	const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
	const [sortBy] = useState<keyof PokemonListItem>('name');

	const processed = useProcessedData({
		data: pokemons.data?.results || [],
		searchFilter: search,
		searchFields: ['name'],
		sortBy,
		sortDirection,
	});

	const { page, totalPages, paginatedData, handlePageChange } = usePagination(processed.data, 20);

	const columns: { key: keyof PokemonListItem; header: string }[] = [
		{ key: 'id', header: 'ID' },
		{ key: 'name', header: t('pokemons.name', 'Nome') },
	];

	const handleCardClick = useCallback((id: number) => {
		setSelectedId(id);
		setDialogOpen(true);
	}, []);

	return (
		<div className='flex flex-col gap-4 p-4 md:p-6' {...rest}>
			<h1 className='text-3xl font-bold'>{t('pokemons.title')}</h1>
			<div>{t('pokemons.description')}</div>

			<Separator />

			{pokemons.isLoading && <div>{t('commons.states.loading')}</div>}
			{pokemons.isError && <div>{t('commons.states.error')}</div>}

			<div className='flex flex-col gap-6'>
				<div className='flex flex-row justify-between gap-2 items-center'>
					<ViewComponent
						value={viewMode}
						options={[
							{ value: 'card', label: t('pokemons.view.cards') },
							{ value: 'table', label: t('pokemons.view.table') },
						]}
						onChange={(value) => setViewMode(value as 'card' | 'table')}
					/>

					<SearchComponent value={search} onFilterChange={setSearch} />
					<SortComponent value={sortDirection} onSortChange={setSortDirection} />
				</div>

				<PaginationAdvanced page={page} totalPages={totalPages} onPageChange={handlePageChange} />

				{viewMode === 'card' ? (
					<div className='flex flex-wrap py-6 gap-6 justify-center'>
						{paginatedData.map((pokemon) => (
							<PokemonMiniCard key={pokemon.id} pokemons={pokemon} onClick={() => handleCardClick(pokemon.id)} />
						))}
					</div>
				) : (
					<TableGeneric
						data={paginatedData}
						columns={columns}
						renderActions={(row) => (
							<Button
								size='icon'
								variant='secondary'
								onClick={() => handleCardClick(row.id)}
								title={t('pokemons.viewDetails')}
							>
								<EyeIcon className='w-4 h-4' />
							</Button>
						)}
					/>
				)}

				<PaginationAdvanced page={page} totalPages={totalPages} onPageChange={handlePageChange} />
			</div>
			{pokemon.data && <PokemonCard isOpen={dialogOpen} onOpenChange={setDialogOpen} pokemon={pokemon.data} />}
		</div>
	);
};

PokemonsPage.displayName = 'PokemonsPage';

export default PokemonsPage;
