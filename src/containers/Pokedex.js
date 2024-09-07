import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Pagination } from '@mui/material';
import axios from 'axios';
import { POKEMON_URL, IMAGE_URL } from '../config';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex({ searchTerm }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;

  useEffect(() => {
    axios.get(POKEMON_URL + "?limit=1000").then((response) => {
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

  const totalPages = Math.ceil(filterPokemon.length / itemsPerPage);

  const currentPokemons = filterPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '20px 10px', sm: '80px 10px' }, backgroundColor: "#fafafa" }}>
      {pokemonData.length ? (
        <>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={4} justifyContent="center">
              {currentPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url} />
              ))}
            </Stack>
          </Box>
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
              />
            </Box>
          )}
        </>
      ) : (
        <CircularProgress sx={{ marginTop: 100 }} />
      )}
    </Box>
  );
}