import PokemonCardList from "../components/Pokemon/PokemonCardList";
import SearchBar from "../components/SearchBar";
import PageLayout from "../components/UI/icons/PageLayout";
import { usePokemonsUrl } from "../hooks/usePokemonsUrl";
import { usePokemons } from "../hooks/usePokemons";
import useSearch from "../hooks/useSearch";
import Loading from "../components/UI/Loader/Loading";

function HomeScreen() {
  const { pokemonsUrls } = usePokemonsUrl(1);
  const { pokemons, isLoading, error } = usePokemons(pokemonsUrls);

  const search = useSearch();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageLayout>
      <SearchBar onSubmitSearch={search} placeholder="Buscar pokémon" />
      <PokemonCardList pokemons={pokemons ?? []} />
    </PageLayout>
  );
}

export default HomeScreen;
