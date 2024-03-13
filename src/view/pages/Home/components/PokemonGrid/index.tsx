import { usePokemonInformationContext } from '../../hooks/usePokemonInformationContext'
import { idTransformer } from '../../../../../utils/idTransformer'

import { Button, Flex } from 'antd'
import { PokeCard } from '../../../../components/PokeCard'
import { ScreenLoader } from '../../../../components/ScreenLoader'
import { ScreenError } from '../../../../components/ScreenError'

import { DeleteOutlined } from '@ant-design/icons'
import Pokeball from '../../../../../assets/icons/PokeBall'

import './_styles.scss'

export function PokemonGrid () {
  const {
    pokemonListData,
    ref,
    filteredPokemonList,
    isFetching,
    isError,
    isFetchingNextPage,
    handleSearchClear
  } = usePokemonInformationContext()

  const pokemonData = filteredPokemonList.length
    ? filteredPokemonList
    : (pokemonListData ? pokemonListData.pages.flatMap(page => page.pokemons) : [])

  if (isError) {
    return <ScreenError><h1>We coudnt get the list of pokemons.</h1></ScreenError>
  }

  return (
    <>
        {(isFetching && !isFetchingNextPage) && (
            <ScreenLoader />
        )}

        {Boolean(pokemonData.length) && (
            <>
                {Boolean(filteredPokemonList.length) && (
                    <Button
                        type="primary"
                        onClick={handleSearchClear}
                        icon={<DeleteOutlined />}
                        style={{ marginTop: 24 }}
                    >
                        Clean search
                    </Button>
                )}
                <Flex vertical align="center" style={{ marginTop: 24 }}>
                    <Flex gap={16} wrap="wrap" justify="start" style={{ marginBottom: 24 }}>
                        <>
                            {pokemonData.map((pokemon) => (
                                <PokeCard.Root type={pokemon.types[0].type.name} pokemon={pokemon} key={pokemon.id}>
                                    <PokeCard.Id>{idTransformer(pokemon.id)}</PokeCard.Id>
                                        <Flex vertical justify="space-between" flex={1} gap={24}>
                                            <PokeCard.Title>{pokemon.name}</PokeCard.Title>
                                            <PokeCard.Details pokemon={pokemon}/>
                                        </Flex>
                                    <PokeCard.Image pokemon={pokemon} />
                                </PokeCard.Root>
                            ))}
                        </>
                    </Flex>
                    {!filteredPokemonList.length && (
                        <div className="pokeball-loading" ref={ref}><Pokeball /></div>
                    )}
                </Flex>
            </>
        )}
    </>
  )
}
