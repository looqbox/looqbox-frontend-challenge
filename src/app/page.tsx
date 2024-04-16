"use client";
import Navbar from "@/components/Navbar";
import PokemonCard from "@/components/PokemonCard";
import { Container, Grid, Button, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type TypeNames = [name: string];

export type Pokemon = {
  name: string;
  url: string;
};

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemons(20);
  }, []);

  const getPokemons = async (limit: number) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pokemons.length}`
    );
    setPokemons([...pokemons, ...response.data.results]);
    setIsLoading(false);
  };

  const pokemonFilter = (name: string) => {
    if (name === "") {
      getPokemons(10);
    }

    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(name.toLocaleLowerCase())
    );
    setPokemons(filteredPokemons);
    return filteredPokemons;
  };

  return (
    <>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (
            <Box
              component="main"
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{ width: "100vw", height: "90vh" }}
            >
              <CircularProgress size={100} color="warning" />
            </Box>
          ) : (
            pokemons.map((pokemon, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
                <Link href={`/profile/${index + 1}`}>
                  <PokemonCard name={pokemon.name} url={pokemon.url} />
                </Link>
              </Grid>
            ))
          )}
        </Grid>
        <Box component="section" display="flex" justifyContent="center">
          <Button
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
            color="warning"
            onClick={() => getPokemons(10)}
            disabled={isLoading}
          >
            Carregar mais pokemons...
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
