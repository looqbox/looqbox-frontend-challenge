import MainLayout from "@/components/layout/main";
import CardPokemon from "@/modules/pokemon/components/CardPokemon";
import PokemonService from "@/modules/pokemon/service";
import { Flex } from 'antd/lib';
import { PokemonList } from "@/modules/pokemon/types";
import { GetServerSideProps } from "next";

type Props = {
  data: PokemonList;
}

export default function Home({data}: Props) {
  return (
    <MainLayout>
      <h1>Pokemon List</h1>
      <Flex wrap="wrap" gap="small">
        {data.results.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
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