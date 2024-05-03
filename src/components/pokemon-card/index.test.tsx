import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonCard from '.';

jest.mock('../../api/base.ts', () => ({
	VITE_APP_API_URL: 'development',
}));

describe('Pokemon Card component', () => {
	const pokemon = {
		id: 25,
		name: 'Pikachu',
		types: [{ slot: 1, type: { name: 'Electric', url: 'https://pokeapi.co/api/v2/type/13/' } }],
		sprites: {
			other: {
				'official-artwork': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' },
				'showdown': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }
			}
		}
	};

	it('should render correctly', async () => {
		const { getByText } = render(
			<MemoryRouter>
				<PokemonCard
					pokemonName={pokemon.name}
					pokemonTypes={pokemon.types}
					pokemonSprites={pokemon.sprites}
					pokemonID={pokemon.id}
					index={0}
				/>
			</MemoryRouter>
		);

		expect(getByText('Pikachu'));
		expect(getByText('Electric'));
	});

	it('should handle missing or invalid props', async () => {
		const { getByText } = render(
			<MemoryRouter>
				<PokemonCard
					pokemonName={''}
					pokemonTypes={[]}
					pokemonSprites={
						{
							other: {
								'official-artwork': { front_default: '' },
								'showdown': { front_default: '' }
							}
						}
					}
					pokemonID={pokemon.id}
					index={1}
				/>
			</MemoryRouter>
		);

		expect(getByText('Unknown Pokemon'));
		expect(getByText('Unknown Type'));
	});
});
