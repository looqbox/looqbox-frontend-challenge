import { Meta } from '@storybook/react';
import ListPokemon from './index';

export default {
  title: 'Components/Pokemon/ListPokemon',
  component: ListPokemon
} as Meta;

export const Default = {
  data: {
    results: [
      {
        id: 1,
        name: 'bulbasaur',
        types: ['grass', 'poison'],
        image: {
          pixel: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          vector: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
        }
      },
      {
        id: 2,
        name: 'ivysaur',
        types: ['grass', 'poison'],
        image: {
          pixel: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          vector: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
        }
      },
      {
        id: 3,
        name: 'venusaur',
        types: ['grass', 'poison'],
        image: {
          pixel: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
          vector: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'
        }
      }
    ]
  }
};