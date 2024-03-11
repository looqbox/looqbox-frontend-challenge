import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Pokemon } from "../../models/Pokemon";
import { getPokemonByName } from "../../services/PokemonService";

export default function DetailsPage() {
  const {name} = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (name) {
      getPokemonByName(name)
        .then(data => setPokemon(data))
        .catch(err => console.log(err));
    }
  }, [name]);

  return (
    <div>
      <h1>Details Page - {pokemon?.name}</h1>
    </div>
  );
}