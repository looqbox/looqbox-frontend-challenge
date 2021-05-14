import React from "react";
import Link from "next/link";

import Badge from "../Badge";

import * as S from "./styles";

const CardPokemon = ({ pokemons }) => {
  return (
    <>
      <S.GridContainer>
        {pokemons.map((pokemon, index) => {
          return (
            <Link href={`/${pokemon.name}`}>
              <a>
                <S.GridItem key={index}>
                  <span>{`#${index + 1}`}</span>
                  <br />
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`${pokemon.name} image`}
                  />
                  <p>{pokemon.name}</p>
                  {pokemon.types.map((type) => {
                    return <Badge type={type.type.name} />;
                  })}
                </S.GridItem>
              </a>
            </Link>
          );
        })}
      </S.GridContainer>
    </>
  );
};

export default CardPokemon;
