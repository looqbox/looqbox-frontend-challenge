import CardPokemon from "../CardPokemon";
import { PokemonList } from "../../types";
import { Flex } from 'antd/lib';
import Searchbar from "@components/ui/Searchbar";

type ListPokemonProps = {
    data: PokemonList;
    // eslint-disable-next-line
    onSearch: (_name: string) => void;
}

export default function ListPokemon({data, onSearch}: ListPokemonProps) {

  return(
    <div style={{width: '90%', margin: '0 auto'}}>
      <Searchbar placeholder="Search by name or ID" onSearch={onSearch} />
      <Flex wrap="wrap" gap="large" style={{justifyContent: 'center' }}>
        {data.results.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
    </div>
  );
}