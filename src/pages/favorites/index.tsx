import MainLayout from "@/components/layout/main";
import ListPokemon from "@/modules/pokemon/components/ListPokemon";
import { useSelector } from "react-redux";

export default function Favorites () {
  const favorites = useSelector((state: any) => state.pokemon.pokemonFavorites);

  return (
    <MainLayout>
      <h1>Favorites</h1>
      <ListPokemon data={favorites} onSearch={() => {}} onSearchList={() => {}} />
    </MainLayout>
  );
}