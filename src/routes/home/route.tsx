import React from 'react'
import { createUseStyles } from 'react-jss'

import { Flex, Typography } from 'antd'

import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { useApDispatch } from '@/store'
import { fetchPokemons } from '@/store/slices/pokedex'
import { breakpoints } from '@/styles/theme'

import { Hero } from './components/hero'
import { Pagination } from './components/pagination'
import { PokemonList } from './components/pokemon-list'
import { PokemonTotal } from './components/pokemon-total'
import { SearchForm } from './components/search-form'

const useStyles = createUseStyles({
  root: {
    flex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,

    marginTop: '-28.8rem',
    paddingTop: '11.9rem',

    [breakpoints.md]: {
      marginTop: '-25.8rem',
    },
    [breakpoints.sm]: {
      marginTop: '-30.5rem',
      paddingTop: '12rem',
      paddingBottom: '4rem',
    },
  },
  searchSection: {
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: '9.1rem',

    [breakpoints.md]: {
      marginBottom: '9.7rem',
    },
    [breakpoints.sm]: {
      display: 'block',
      marginBottom: '9.7rem',
    },

    '&>h2': {
      fontWeight: 'bold',
      fontSize: '3.2rem',
      lineHeight: '3.9rem',
      letterSpacing: '-0.01em',
      maxWidth: '26.5rem',

      [breakpoints.sm]: {
        maxWidth: '100%',
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '4rem',
      },
    },
  },
  listSection: {
    flex: 1,

    paddingTop: '4rem',
    paddingLeft: '2.5rem',
    paddingBottom: '4rem',

    [breakpoints.sm]: {
      padding: 0,
    },
  },
})

export function HomePage() {
  const styles = useStyles()

  const dispatch = useApDispatch()

  React.useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  return (
    <Flex component="main" vertical className={styles.root}>
      <Header />
      <Hero />

      <div className={styles.content}>
        <Container>
          <Flex component="section" className={styles.searchSection}>
            <Typography.Title level={2}>Search your Pokémon</Typography.Title>
            <SearchForm />
          </Flex>

          <Flex component="section" vertical className={styles.listSection}>
            <PokemonTotal />
            <PokemonList />

            <div style={{ margin: '6.8rem auto' }}>
              <Pagination />
            </div>
          </Flex>
        </Container>
      </div>
    </Flex>
  )
}
