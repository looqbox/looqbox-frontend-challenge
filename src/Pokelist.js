import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { toFirstCharUpperCase } from './constants';

import mockData from './mockData';

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
  const [pokemonData, setPokemonData] = useState(mockData);


  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

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