import MainLayout from "@/components/layout/main";
import PokemonService from "@/modules/pokemon/service";
import { GetServerSideProps } from "next";
import { PokemonList } from "@/modules/pokemon/types";
import ListPokemon from "@/modules/pokemon/components/ListPokemon";
import { useSelector } from "react-redux";

type Props = {
  data: PokemonList;
}

export default function Home({data}: Props) {
  const pokemon = useSelector((state: any) => state.pokemon.pokemonDetail);
  const list = useSelector((state: any) => state.pokemon.pokemonList);

  const hasPokemon = pokemon && pokemon.name !== undefined;
  const hasList = list && list.results > 0;

  if (hasPokemon) return (
    <MainLayout>
      <div>
        <h1>{pokemon.name}</h1>
      </div>
    </MainLayout>
  );

  return (
    <MainLayout>
      <h1>Pokemon List</h1>
      <ListPokemon data={hasList ? list : data} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const service = new PokemonService();
  const data: PokemonList | null = await service.get(1);

  return {
    props: {
      data
    }
  };
};