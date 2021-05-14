import React from "react";

import Stats from "../components/Stats";
import Badge from "../components/Badge";
import CardInfo from "../components/CardInfo";
import BackButton from "../components/BackButton";
import AbilityCard from "../components/AbilityCard";

import styles from "../styles/PokemonInfo.module.css";

const PokemonInfo = ({ pokemon }) => {

  const { name, types, stats, abilities } = pokemon;

  return (
    <div className={styles.container}>
      <div className={styles.headerInfo}>
        <h2>{name}</h2>
        <div className={styles.badgeGroup}>
          {types.map((type) => {
            return <Badge type={type.type.name} />;
          })}
        </div>
      </div>

      <CardInfo pokemon={pokemon} />

      <div className={styles.gridContainer}>
        <div>
          <h2>Stats</h2>
          <div className={styles.gridItem}>
            <Stats stats={stats} />
          </div>
        </div>
        <div>
          <h2>Abilities</h2>
          <div className={styles.gridItem}>
            <AbilityCard abilities={abilities} />
          </div>
        </div>
      </div>

      <BackButton />
    </div>
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
