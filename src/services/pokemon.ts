export const getPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  const { results } = data;

  return {
    props: {
      pokemons: results,
    },
  };
};

export const getPokemonInfo = async () => {
  // const response = await fetch("https://pokeapi.co/api/v2/pokemon1");
  // const data = await response.json();
  // const { results } = data;

  // return {
  //   props: {
  //     pokemon: results,
  //   },
  // };
};
