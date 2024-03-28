import CardPokemon from ".";

export default {
  title: 'Components/Pokemon/CardPokemon',
  component: CardPokemon
};

export const Default = {
  args: {
    pokemon: {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      image: {
        pixel: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        vector: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
      }
    }
  }
};