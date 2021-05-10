import React, { useEffect, useState } from 'react';

import { api } from '../../services/api.js';

import {
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CircularProgress,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';

import { toFirstCharUpperCase } from '../../constants/constants.js';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

const useStyles = makeStyles(theme => ({
  pokemonContainer: {
    paddingTop: '40px',
    paddingRight: '180px',
    paddingLeft: '180px',
  },
  pokemonBreadcumbContainer: {
    display: 'flex',
    marginTop: '24px',
    marginBottom: '24px',
    paddingLeft: '24px',
  },
  pokemonNameContainer: {
    display: 'flex',
    marginBottom: '32px',
  },
  backHomeContainer: {
    display: 'flex',
    marginTop: '48px',
    marginBottom: '48px',
  },
  card: {
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
    height: '432px',
  },
  cardDetails: {
    flex: 1,
  },
  cardContentGrid: {
    marginBottom: '5.25rem',
  },
  cardContentInfo: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#6d6e71',
  },
  cardContentData: {
    fontSize: '28px',
    fontWeight: '500',
    color: '#00da5d',
  },
  cardMedia: {
    margin: 'auto',
    width: '50%',
    height: '360px',
    backgroundSize: 'contain',
  },
  cardContent: {
    textAlign: 'center',
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
  link: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
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
    const { name, id, species, height, weight, types, abilities } = pokemon;
    const heightCentimeterToMeter = height / 10;
    const weightGramToKilogram = weight / 10;

    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <>
        <Grid
          container
          justify='flex-start'
          alignItems='center'>
          <div className={classes.pokemonBreadcumbContainer}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                className={classes.link}
                onClick={() => history.push('/')}
                color="inherit">
                  <HomeRoundedIcon className={classes.icon} />
                    PokéList
              </Link>
              <Typography color="textPrimary" className={classes.link}>
                <PetsRoundedIcon className={classes.icon} />
                  {toFirstCharUpperCase(name)}
              </Typography>
            </Breadcrumbs>
          </div>
        </Grid>

        <Grid
          container
          justify='center'
          alignItems='center'>
          <div className={classes.pokemonNameContainer}>
            <Typography className={classes.pokemonName}>
              {toFirstCharUpperCase(name)}
            </Typography>
            <Typography className={classes.pokemonNumber}>
              #<span className={classes.pokemonNumberSpan}>{`${id}`}</span>
            </Typography>
          </div>
        </Grid>

        <Container maxWidth='md'>
          <Grid
            container
            justify='flex-start'
            alignItems='center'>
            <Grid item xs={12}>
              <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={fullImageUrl} />
                  <Divider orientation='vertical' flexItem />
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Grid
                        className={classes.cardContentGrid}
                        container
                        justify='space-between'
                        alignItems='center'>
                        <Grid>
                          <Typography
                            className={classes.cardContentInfo}
                            component='h2'
                            variant='h5'>
                              Height
                          </Typography>
                          <Typography
                            className={classes.cardContentData}
                            component='h2'
                            variant='subtitle1'>
                              {heightCentimeterToMeter}m
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography
                            className={classes.cardContentInfo}
                            component='h2'
                            variant='h5'>
                              Weight
                          </Typography>
                          <Typography
                            className={classes.cardContentData}
                            component='h2'
                            variant='subtitle1'
                            color='primary'>
                              {weightGramToKilogram}kg
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className={classes.cardContentGrid}
                        container
                        justify='space-between'
                        alignItems='center'>
                        <Grid>
                          <Typography
                            className={classes.cardContentInfo}
                            component='h2'
                            variant='h5'>
                              Type
                          </Typography>
                          {types.map((typeInfo) => {
                            const { type } = typeInfo;
                            const { name } = type;
                            return (
                              <Chip
                                key={name}
                                label={`${toFirstCharUpperCase(name)}`}
                                style={{
                                  marginTop: '4px',
                                  marginRight: '8px',
                                  paddingRight: '8px',
                                  paddingLeft: '8px',
                                  fontSize: '20px',
                                  fontWeight: '500',
                                  borderRadius: '4px',
                                  backgroundColor: `#${TYPE_COLORS[name]}`,
                                  color: '#fff',
                                }}>
                              </Chip>
                            );
                          })}
                        </Grid>
                        <Grid>
                          <Typography
                            className={classes.cardContentInfo}
                            component='h2'
                            variant='h5'>
                              Species
                          </Typography>
                          <Typography
                            className={classes.cardContentData}
                            component='h2'
                            variant='h5'
                            color='primary'>
                              {toFirstCharUpperCase(species.name)}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        className={classes.cardContentGrid}
                        container
                        justify='space-between'
                        alignItems='center'>
                        <Grid item xs={12}>
                          <Typography
                            className={classes.cardContentInfo}
                            component='h2'
                            variant='h5'>
                              Abilities
                          </Typography>
                          {abilities.map((abilityInfo) => {
                            const { ability } = abilityInfo;
                            const { name } = ability;
                            return (
                            <Chip
                              key={name}
                              label={`${toFirstCharUpperCase(name)}`}
                              variant='outlined'
                              style={{
                                marginTop: '4px',
                                marginRight: '8px',
                                paddingRight: '8px',
                                paddingLeft: '8px',
                                fontSize: '20px',
                                fontWeight: '500',
                                border: '1px solid #6d6e71',
                                borderRadius: '4px',
                                backgroundColor: '#fff',
                                color: '#00da5d',
                              }}>
                            </Chip>
                            );
                          })}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon()}
      {pokemon === false && <Typography>Pokemon not found!</Typography>}
      {pokemon !== undefined && (
        <Grid
          container
          justify='center'
          alignItems='center'>
          <div className={classes.backHomeContainer}>
            <Button
              className={classes.button}
              variant='outlined'
              startIcon={<HomeRoundedIcon />}
              onClick={() => history.push('/')}>
                go back home
            </Button>
          </div>
        </Grid>
      )}
    </>
  );
}

export default Pokemon;