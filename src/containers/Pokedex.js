import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import { POKEMON_URL, IMAGE_URL } from '../config';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex({ searchTerm }) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_URL + "?limit=800").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = results.map((pokemon, index) => ({
          id: index + 1,
          url: IMAGE_URL + (index + 1) + ".png",
          name: pokemon.name,
        }));
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  const filterPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ textAlign: 'center', padding: '80px 10px 0px 60px', backgroundColor: "#fafafa" }}>
      {pokemonData.length ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={4} justifyContent="center">
            {filterPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url} />
            ))}
          </Stack>
        </Box>
      ) : (
        <CircularProgress sx={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
