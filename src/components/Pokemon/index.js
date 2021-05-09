import React, { useEffect, useState } from 'react';

import { api } from '../../services/api.js';

import {
  Button,
  // Card,
  // CardActionArea,
  // CardMedia,
  // CardContent,
  Container,
  CircularProgress,
  Grid,
  // Hidden,
  // Link,
  // TextField,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// import { toFirstCharUpperCase } from '../../constants/constants.js';

const useStyles = makeStyles(theme => ({
  pokemonContainer: {
    paddingTop: '40px',
    paddingRight: '180px',
    paddingLeft: '180px',
  },
  card: {
    display: 'flex',
    cursor: 'pointer',
    // width: '100%',
    // height: '432px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    // margin: 'auto',
    width: 160,
    // width: '100%',
    // height: '360px',
    // backgroundSize: 'contain',
  },
  cardContent: {
    textAlign: 'center',
  },
  pokemonNameContainer: {
    display: 'flex',
    marginTop: '32px',
    marginBottom: '64px',
  },
  pokemonName: {
    marginRight: '16px',
    fontSize: '48px',
    fontWeight: '600',
  },
  pokemonNumberSpan: {
    textDecoration: 'underline',
  },
  pokemonNumber: {
    fontSize: '48px',
    fontWeight: '400',
  },
}));

const Pokemon = props => {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  const classes = useStyles();

  useEffect(() => {
    api
    .get(`/pokemon/${pokemonId}`)
    .then(function (response) {
      const { data } = response;
      setPokemon(data);
    })
    .catch(function (error) {
      setPokemon(false);
    });
  }, [pokemonId]);

  const generatePokemon = () => {
    // const { name, id, species, height, weight, types } = pokemon;
    // const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'>

          <div className={classes.pokemonNameContainer}>
            <Typography className={classes.pokemonName}>
              {/* {toFirstCharUpperCase(name)} */}
            </Typography>
            <Typography className={classes.pokemonNumber}>
              {/* #<span className={classes.pokemonNumberSpan}>{`${id}`}</span> */}
            </Typography>
          </div>
        </Grid>

        <Container maxWidth='md'>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={6}>

            {/* <Grid item xs={12}>
              <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                  <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={fullImageUrl} />
                  </Hidden>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        TITULO
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        DATA
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        DESCT
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        CONTINUE
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid> */}

            {/* <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={fullImageUrl}
                />
              </Card>
            </Grid> */}

            {/* <Grid item xs={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={fullImageUrl}
                />

                <CardContent className={classes.cardContent}>
                  <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
                </CardContent>
              </Card>
            </Grid> */}
          </Grid>
        </Container>

          {/* <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={fullImageUrl}
              />

              <CardContent className={classes.cardContent}>
                <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
         */}


          {/* <img
            src={fullImageUrl}
            alt={pokemon.name}
            style={{ width: "200px", height: "200px" }}
          />

          <Typography variant="h3">Pokemon Info</Typography>

          <Typography>
            {"Species: "}
            <Link href={species.url}>{species.name}</Link>
          </Typography>

          <Typography >Height: {height}</Typography>
          <Typography >Weight: {weight}</Typography>

          <Typography variant="h6">Types:</Typography>
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}> {`${name}`} </Typography>
          })} */}

      </>
    )
  }

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon()}
      {pokemon === false && <Typography>Pokemon not found!</Typography>}
      {pokemon !== undefined && (
        <Button variant='contained' onClick={() => history.push('/')}>
          Back to PokeList
        </Button>
      )}
    </>
  );
}

export default Pokemon;