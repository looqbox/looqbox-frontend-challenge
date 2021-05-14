import { useState } from "react";
import CardPokemon from "../components/CardPokemon";
import SearchBar from "../components/SearchBar";

export default function Home({ pokemons }) {
  const [filtered, setFiltered] = useState<string[]>(pokemons);

  const handleSearch = async (value) => {
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.name.includes(value);
    });

    setFiltered(filtered);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CardPokemon pokemons={filtered} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const { results } = data;

  let pokemons = [];

  for (let pokeInfo of results) {
    let response: any = await fetch(pokeInfo.url);
    response = await response.json();

    let { sprites, types } = response;

    pokemons.push({ ...pokeInfo, sprites, types });
  }

  return {
    props: {
      pokemons,
    },
  };
};
