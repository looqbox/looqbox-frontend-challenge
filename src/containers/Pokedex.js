import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import { POKEMON_URL, IMAGE_URL } from '../config';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        axios.get(POKEMON_URL + "?limit=800").then((response) => {
            if (response.status >= 200 && response.status < 300) {
                const { results } = response.data;
                let newPokemonData = [];
                results.forEach((pokemon, index) => {
                    index++;
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_URL + index + ".png",
                        name: pokemon.name
                    };
                    newPokemonData.push(pokemonObject);
                });
                setPokemonData(newPokemonData);
            }
        });
    }, []);

    return (
        <Box sx={{ textAlign: 'center', padding: '80px 10px 0px 60px', backgroundColor: "#fafafa" }}>
            {pokemonData ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Stack direction="row" useFlexGap flexWrap="wrap" spacing={4} justifyContent="center">
                        {pokemonData.map((pokemon) => (
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
