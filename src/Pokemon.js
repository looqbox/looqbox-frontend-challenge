import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CircularProgress, Button, Link, Typography } from '@material-ui/core';
import { toFirstCharUpperCase } from './constants';

const Pokemon = props => {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(function (response) {
      const { data } = response;
      setPokemon(data);
    })
    .catch(function (error) {
      setPokemon(false);
    });
  }, [pokemonId]);

  const generatePokemon = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUpperCase(name)}
          <img
            src={front_default}
            alt={pokemon.name}
          />
        </Typography>

        <img
          src={fullImageUrl}
          alt={pokemon.name}
          style={{ width: "200px", height: "200px" }}
        />

        <Typography variant="h3">Pokemon Info</Typography>

        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>

        <Typography >Height: {height}</Typography>
        <Typography >Weight: {weight}</Typography>

        <Typography variant="h6">Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`} </Typography>
        })}
      </>
    )
  }

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon()}
      {pokemon === false && <Typography>Pokemon not found!</Typography>}
      {pokemon !== undefined && (
        <Button variant='contained' onClick={() => history.push('/')}>
          Back to PokeList
        </Button>
      )}
    </>
  );
}

export default Pokemon;