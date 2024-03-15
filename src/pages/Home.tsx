import { Helmet } from 'react-helmet-async'

import { PokemonList } from '@/components/home/pokemon-list'

export const Home = () => {
  return (
    <>
      <Helmet title="Home" />

      <PokemonList />
    </>
  )
}
