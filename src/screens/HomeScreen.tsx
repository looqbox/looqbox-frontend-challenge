import PokemonCardList from "../components/PokemonCardList";
import SearchBar from "../components/SearchBar";
import PageLayout from "../components/UI/icons/PageLayout";
import { usePokemonsUrl } from "../hooks/usePokemonsUrl";
import { usePokemons } from "../hooks/usePokemons";

function HomeScreen() {
  const { pokemonsUrls } = usePokemonsUrl(1);
  const { pokemons, isLoading, error } = usePokemons(pokemonsUrls);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <SearchBar />
      <PokemonCardList pokemons={pokemons ?? []} />
    </PageLayout>
  );
}

export default HomeScreen;
