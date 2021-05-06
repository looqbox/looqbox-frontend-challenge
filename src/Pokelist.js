import React from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";

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
  }
})

const useStyles = makeStyles({
  pokelistContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  }
})

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>Hi</CardContent>
      </Card>
    </Grid>
  )
}

const Pokelist = () => {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <AppBar position='static'>
          <Toolbar />
        </AppBar>
        <Grid container spacing={2} className={classes.pokelistContainer}>
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
          {getPokemonCard()}
        </Grid>
      </MuiThemeProvider>
    </>
  )
}

export default Pokelist;