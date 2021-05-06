import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography
} from '@material-ui/core';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";

import { toFirstCharUpperCase } from './constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e7e9ee',
      main: '#f0f2f5',
      dark: '#6d6e71',
      contrastText: '#40da62',
    },
    secondary: {
      light: '#53D893',
      main: '#40da62',
      dark: '#2c9844',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
})

const useStyles = makeStyles({
  pokelistContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  }
})

const Pokelist = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=100/`)
    .then(function (response) {
      const { data } = response;
      const { results } = data;
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        };
      });
      setPokemonData(newPokemonData);
    });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "120px", height: "120px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <AppBar position='static'>
          <Toolbar />
        </AppBar>
        {pokemonData ? (
          <Grid container spacing={2} className={classes.pokelistContainer}>
            {Object.keys(pokemonData).map(pokemonId =>
              getPokemonCard(pokemonId)
            )}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </MuiThemeProvider>
    </>
  )
}

export default Pokelist;