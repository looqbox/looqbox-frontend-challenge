import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { PokemonDetails } from '@/components/internal/pokemon-details/index'
import { queryClient } from '@/lib/react-query'

describe('Pokémon details', () => {
  it('should render correctly', () => {
    const testData = {
      name: 'Vaporeon',
      description: 'https://pokeapi.co/api/v2/pokemon-species/134/',
      stats: [
        {
          base_stat: 130,
          effort: 2,

          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },

        {
          base_stat: 65,
          effort: 0,

          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },

        {
          base_stat: 60,
          effort: 0,

          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/',
          },
        },

        {
          base_stat: 110,
          effort: 0,

          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: 95,
          effort: 0,

          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: 65,
          effort: 0,

          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
      moves: [
        {
          move: {
            name: 'alluring-voice',
            url: 'https://pokeapi.co/api/v2/move/914/',
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: 'machine',
                url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
              },
              version_group: {
                name: 'scarlet-violet',
                url: 'https://pokeapi.co/api/v2/version-group/25/',
              },
            },
          ],
        },
      ],

      types: [
        {
          slot: 1,
          type: {
            name: 'water',
            url: 'https://pokeapi.co/api/v2/type/11/',
          },
        },
      ],

      abilities: [
        {
          ability: {
            name: 'water-absorb',
            url: 'https://pokeapi.co/api/v2/ability/11/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'hydration',
            url: 'https://pokeapi.co/api/v2/ability/93/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    }

    const imgSrc = {
      sprites: {
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png',
          },
        },
      },
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
              <PokemonDetails.Name value={testData.name} />

              <PokemonDetails.Description value={testData.description} />

              <PokemonDetails.Charts value={testData.stats} />

              <PokemonDetails.Moves value={testData.moves} />
            </div>{' '}
            <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
              <img
                src={imgSrc?.sprites.other.home.front_default}
                height={384}
                width={384}
                className="self-center object-contain"
                alt=""
              />

              <PokemonDetails.Stats value={testData.stats} />

              <PokemonDetails.Types value={testData.types} />

              <PokemonDetails.Abilities value={testData?.abilities} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonScreen = wrapper.getByTestId('pokemon-screen')
    expect(pokemonScreen).toBeInTheDocument()
  })
})
