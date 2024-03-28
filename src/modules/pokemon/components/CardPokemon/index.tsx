import { Pokemon } from "@/modules/pokemon/types";
import { Card } from 'antd/lib';
import Image from "next/image";
import TypesBadge from "../TypesBadge";

type PokemonProps = {
    pokemon: Pokemon;
}

const colors: {[key: string]: string} = {
  bug: '#C4E8A1',
  dark: '#94AFC6',
  dragon: '#A6C5E1',
  electric: '#FDF4C1',
  fairy: '#F9D9DF',
  fighting: '#F6D3AC',
  fire: '#EFAAAA',
  flying: '#D8F2F8',
  ghost: '#BAAEB9',
  grass: '#A6D7B8',
  ground: '#D8CAB3',
  ice: '#C2EAF7',
  normal: '#E8DFD5',
  poison: '#E3C9FF',
  psychic: '#FBB7CC',
  rock: '#BFBFBF',
  steel: '#EDEDED',
  water: '#A9E1ED'
};

export default function CardPokemon({pokemon}: PokemonProps) {

  const id = pokemon.id.toString().padStart(3, '0');
  const imageUrl = pokemon.image.vector ?? pokemon.image.pixel;

  return (
    <Card
      hoverable
      style={{ padding: 10, width: 240, backgroundColor: colors[pokemon.types[0]]}}
      cover={(
        <>
          <h3 style={{textTransform: 'capitalize', display: 'flex', justifyContent: 'center'}}>{`#${id} - ${pokemon.name}`}</h3>
          <Image alt={pokemon.name} src={imageUrl} width={100} height={170} style={{padding: '10px'}} />
        </>
      )}
    >
      <TypesBadge types={pokemon.types} />
    </Card>
  );
}