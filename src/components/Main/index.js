import React, { useState, useEffect } from 'react';

import { api } from '../../services/api.js';

import {
  Breadcrumbs,
  Card,
  CardMedia,
  CardContent,
  Container,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import { toFirstCharUpperCase } from '../../constants/constants.js';

const useStyles = makeStyles(theme => ({
  pokemonBreadcumbContainer: {
    display: 'flex',
    marginTop: '24px',
    marginBottom: '24px',
    paddingLeft: '24px',
  },
  searchContainer: {
    display: 'flex',
    marginBottom: '64px',
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
  searchInput: {
    width: '400px',
    margin: '5px',
  },
  pokelistContainer: {
    paddingTop: '40px',
    paddingRight: '180px',
    paddingLeft: '180px',
  },
  card: {
    cursor: 'pointer',
  },
  cardMedia: {
    margin: 'auto',
    width: '140px',
    height: '140px',
    backgroundSize: 'contain',
  },
  cardContent: {
    textAlign: 'center',
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Main = (props) => {
  const { history } = props;

  const classes = useStyles();

  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    api
    .get('/pokemon?limit=898/')
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
      <Grid item xs={4} key={pokemonId}>
        <Card
          onClick={() => history.push(`/${pokemonId}/`)}
          className={classes.card}>

          <CardMedia
            className={classes.cardMedia}
            image={sprite}
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
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'>
        <div className={classes.pokemonBreadcumbContainer}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" className={classes.link}>
              <HomeRoundedIcon className={classes.icon} />
                PokéList
            </Typography>
          </Breadcrumbs>
        </div>
      </Grid>

      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'>
        <div className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            className={classes.searchInput}
            onChange={handleSearchChange}
            variant='standard'
            label='Search'
          />
        </div>
      </Grid>

      {pokemonData ? (
        <Container>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={6}>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name.includes(filter) &&
                getPokemonCard(pokemonId)
            )}
          </Grid>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default Main;