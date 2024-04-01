import MainLayout from "@/components/layout/main";
import ListPokemon from "@/modules/pokemon/components/ListPokemon";
import { setPokemon } from "@/modules/pokemon/store";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd/lib";
import { PokemonList } from "@/modules/pokemon/types";
import InfoPokemon from "@/modules/pokemon/components/InfoPokemon";

export default function Favorites () {
  const favorites: PokemonList = useSelector((state: any) => state.pokemonFavorites);
  const pokemon = useSelector((state: any) => state.pokemonDetail);
  const dispatch = useDispatch();

  const hasPokemon = pokemon && pokemon.name !== undefined;

  async function handleSearch(name: string) {
    const pokemon = favorites.results.find((p: any) => p.name === name);

    if(!pokemon) {
      Modal.warning({
        title: 'Warning',
        content: 'No favorite pokemon found with this name.'
      });
      return;
    };

    dispatch(setPokemon(pokemon));
  }

  if (hasPokemon) return (
    <MainLayout title={`${pokemon.name} - Pokédex`}>
      <InfoPokemon pokemon={pokemon}  />
    </MainLayout>
  );

  return (
    <MainLayout title="Favorites - Pokédex">
      <h1>Favorites</h1>
      <ListPokemon data={favorites} onSearch={handleSearch} onSearchList={() => {}} />
    </MainLayout>
  );
}