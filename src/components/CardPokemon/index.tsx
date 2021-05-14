import React from "react";
import Link from "next/link";

import Badge from "../Badge";

import styles from "../../styles/CardPokemon.module.css";

const CardPokemon = ({ pokemons }) => {
  return (
    <>
      <div className={styles.gridContainer}>
        {pokemons.map((pokemon, index) => {
          return (
            <Link href={`/${pokemon.name}`}>
              <a>
                <div className={styles.gridItem} key={index}>
                  <span>{`#${index + 1}`}</span>
                  <br />
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`${pokemon.name} image`}
                    className={styles.image}
                  />
                  <p>{pokemon.name}</p>
                  {pokemon.types.map((type) => {
                    return <Badge type={type.type.name} />;
                  })}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CardPokemon;
