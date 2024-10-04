// src/components/PokemonList/index.tsx
import React from "react";
import { Spin } from "antd";
import PokemonCard from "../PokemonCard";
import { Pokemon } from "../../../types/Pokemon";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface PokemonListProps {
  pokemons: Pokemon[];
  loading: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({pokemons, loading }) => {

  return (
    <div className="list-container">
      {loading ? (
        <Spin size="large" />
      ) : (
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            imgUrl={pokemon.imgUrl}
            name={pokemon.name}
            resume={pokemon.resume}
            id={pokemon.id}
          />
        ))
      )}
    </div>
  );
};

export default PokemonList;
