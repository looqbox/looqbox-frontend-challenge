import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";

import Popover from '@material-ui/core/Popover';

import { toFirstCharUpperCase } from '../../constants/constants.js';

const useStyles = makeStyles(theme => ({
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
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Pokelist = (props) => {
  const { history } = props;

  const [pokemonData, setPokemonData] = useState({});

  // const [filter, setFilter] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  // const handleSearchChange = (e) => {
  //   setFilter(e.target.value);
  // };

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=10/`)
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
      <Grid item sm={4} key={pokemonId}>
        <Card
          onClick={() => history.push(`/${pokemonId}/`)}
          className={classes.card}

          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}>

          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}

            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}

            onClose={handlePopoverClose}
            disableRestoreFocus >
            <Typography>Click to open Pokemon page.</Typography>
          </Popover>

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
      {pokemonData ? (
        <Grid className={classes.pokelistContainer} container spacing={2}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              // pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default Pokelist;