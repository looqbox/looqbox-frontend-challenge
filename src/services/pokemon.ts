export const getPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const data = await response.json();

  const aux = data.results.map((ind) => {
    return ind;
  });
};

export const getPokemonInfo = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon1"
  );
  const data = await response.json();

  const aux = data.results.map((ind) => {
    return ind;
  });

};