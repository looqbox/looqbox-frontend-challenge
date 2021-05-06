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
  Typography,
  TextField
} from '@material-ui/core';

import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";

import SearchIcon from '@material-ui/icons/Search';

import { toFirstCharUpperCase } from './constants';

import logoImg from '../src/assets/logo.png';

const themeDefault = createMuiTheme({
  palette: {
    primary: {
      light: '#33e17e',
      main: '#00da5d',
      dark: '#00c455',
      contrastText: '#58595b',
    },
    secondary: {
      light: '#e7e9ee',
      main: '#f0f2f5',
      dark: '#6d6e71',
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

const useStyles = makeStyles(theme => ({
  toolbarImage: {
    width: '160px',
    height: '100%',
  },
  toolbarAppName: {
    fontWeight: '500',
    color: '#40da62',
  },
  toolbarAppNameSpan: {
    fontWeight: '500',
    color: '#6d6e71',
  },
  searchContainer: {
    display: 'flex',
    marginTop: '5px',
    marginBottom: '5px',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '4px',
    backgroundColor: '#f0f2f5',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
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
}));

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
      <MuiThemeProvider theme={themeDefault}>
        <AppBar position='static'>
          <Toolbar
            style={{
              justifyContent: 'space-between',
              backgroundColor: '#fff'
            }}>
            <img
              className={classes.toolbarImage}
              src={logoImg}
              alt='looqbox ~ PokéList' />

            <h1 className={classes.toolbarAppName}>Poké
              <span className={classes.toolbarAppNameSpan}>List</span>
            </h1>

            <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <TextField className={classes.searchInput} />
            </div>
          </Toolbar>
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