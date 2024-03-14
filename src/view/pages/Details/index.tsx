import { Flex } from 'antd'

import { PokemonBanner } from './components/PokemonBanner'
import { PokemonAdditionalInfo } from './components/PokemonAdditionalInfo'
import { ScreenLoader } from '../../components/ScreenLoader'

import usePokemonDetailsController from './hooks/usePokemonDetailsController'

import './_styles.scss'

export default function Details () {
  const { pokemon, pokemonSpecie, isFetching, isFetchingSpecies } = usePokemonDetailsController()

  return (
    <main style={{ maxWidth: '1200px', margin: '24px auto 0' }}>
        {isFetching && (
            <ScreenLoader />
        )}
        {pokemon && !isFetching && (
            <Flex gap={48} vertical className='pokemon-details-wrapper'>
                <PokemonBanner pokemon={pokemon}/>
                <PokemonAdditionalInfo
                    specieInfo={pokemonSpecie}
                    isFetchingSpecies={isFetchingSpecies}
                    baseStats={pokemon.stats}
                />
            </Flex>
        )}
    </main>
  )
}
