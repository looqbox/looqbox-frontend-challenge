import { useNavigate } from "react-router-dom";

function useSearch() {
  const navigate = useNavigate();
  const searchForPokemon = function (pokemonName: string) {
    navigate(`/pokemons/${pokemonName}`);
  };

  return searchForPokemon;
}

export default useSearch;
