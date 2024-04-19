import PokemonCardList from "../components/PokemonCardList";
import SearchBar from "../components/SearchBar";
import PageLayout from "../components/UI/icons/PageLayout";
import { usePokemonsUrl } from "../hooks/usePokemonsUrl";
import { usePokemons } from "../hooks/usePokemons";

function HomeScreen() {
  const { pokemonsUrls } = usePokemonsUrl(1);
  const pokemons = usePokemons(pokemonsUrls);

  return (
    <PageLayout>
      <SearchBar />
      <PokemonCardList pokemons={pokemons} />
    </PageLayout>
  );
}

export default HomeScreen;
