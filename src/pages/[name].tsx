import React from "react";

import Stats from "../components/Stats";
import Badge from "../components/Badge";
import CardInfo from "../components/CardInfo";
import BackButton from "../components/BackButton";
import AbilityCard from "../components/AbilityCard";

import * as S from "./styles";

const PokemonInfo = ({ pokemon }) => {
  const { name, types, stats, abilities } = pokemon;

  return (
    <S.Container>
      <S.HeaderInfo>
        <S.Title>{name}</S.Title>
        <div>
          {types.map((type) => {
            return <Badge type={type.type.name} />;
          })}
        </div>
      </S.HeaderInfo>

      <CardInfo pokemon={pokemon} />

      <S.GridContainer>
        <div>
          <S.Title>Stats</S.Title>
          <S.GridItem>
            <Stats stats={stats} />
          </S.GridItem>
        </div>
        <div>
          <S.Title>Abilities</S.Title>
          <S.GridItem>
            <AbilityCard abilities={abilities} />
          </S.GridItem>
        </div>
      </S.GridContainer>

      <BackButton />
    </S.Container>
  );
};

export default PokemonInfo;

export const getStaticPaths = async () => {
  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await pokemons.json();
  const { results } = data;

  return {
    paths: results.map((pokemon) => ({
      params: {
        name: pokemon.name,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const results = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );
  const data = await results.json();
  const pokemon = data;

  return {
    props: {
      pokemon,
    },
  };
};
