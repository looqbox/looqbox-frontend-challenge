import { PokemonData } from "../../../types/pokemon.types";

interface IPokeCardImageProps {
    pokemon: PokemonData;
}

export default function PokeCardImage({pokemon}: IPokeCardImageProps) {
    return (
        <img 
            alt={`Image of ${pokemon.name}`}
            src={pokemon.sprites.other["dream_world"].front_default}
            width={72}
            height={72}
        />
    );
}