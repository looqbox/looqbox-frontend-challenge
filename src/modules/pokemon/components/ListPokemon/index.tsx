import CardPokemon from "../CardPokemon";
import { PokemonList } from "../../types";
import { Flex } from 'antd/lib';
import Searchbar from "@components/ui/Searchbar";

type ListPokemonProps = {
    data: PokemonList;
}

export default function ListPokemon({data}: ListPokemonProps) {

  return(
    <div style={{width: '90%', margin: '0 auto'}}>
      <Searchbar placeholder="Search by name or ID" />
      <Flex wrap="wrap" gap="large" style={{justifyContent: 'center' }}>
        {data.results.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
    </div>
  );
}