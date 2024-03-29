import { Pokemon } from "@/modules/pokemon/types";
import { Card } from 'antd/lib';
import Image from "next/image";
import TypesBadge from "../TypesBadge";
import { useDispatch } from 'react-redux';
import PokemonService from '@modules/pokemon/service';
import { setPokemon, removePokemon } from '@/modules/pokemon/store';
import { pastelColors } from "@modules/pokemon/styles/colors";

type PokemonProps = {
    pokemon: Pokemon;
}

export default function CardPokemon({pokemon}: PokemonProps) {
  const id = pokemon.id.toString().padStart(3, '0');
  const imageUrl = pokemon.image.vector ?? pokemon.image.pixel;
  const dispatch = useDispatch();

  async function handleClick() {
    const service = new PokemonService();
    try{
      if (!pokemon.id) return;
      const detail = await service.getDetails(pokemon.id);
      dispatch(setPokemon(detail));
    }catch(e) {
      dispatch(removePokemon());
    }
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      style={{ padding: 10, width: 240, backgroundColor: pastelColors[pokemon.types[0]]}}
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