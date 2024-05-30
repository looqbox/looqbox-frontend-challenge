'use client'

import Image from 'next/image'
import PokemonTypes from '@/types/PokemonTypes'
import { Card, Input } from 'antd'
import { useState } from 'react'

interface Props {
    kantoPokedex: PokemonTypes.Pokedex
}

const PokemonList = (props: Props) => {
    const { kantoPokedex } = props

    const [searchText, setSearchText] = useState('')

    const pokemonsToShow = kantoPokedex.pokemon_entries.filter(
        (pokemonEntry) => {
            return (
                searchText === '' ||
                pokemonEntry.pokemon_species.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            )
        }
    )

    return (
        <>
            <Input.Search
                placeholder='Pesquisar'
                onSearch={(newSearchText) => {
                    setSearchText(newSearchText)
                }}
                style={{ maxWidth: 400 }}
            />

            <div className='grid grid-cols-12 w-full gap-4 mt-2'>
                {pokemonsToShow.map((pokemonEntry) => {
                    return (
                        <Card
                            key={pokemonEntry.entry_number}
                            className='col-span-12 sm:col-span-4 lg:col-span-3'
                            title={`${pokemonEntry.pokemon_species.name
                                .charAt(0)
                                .toUpperCase()}${pokemonEntry.pokemon_species.name.substring(
                                1
                            )}`}
                            extra={<a href='#'>More</a>}
                        >
                            <div className='w-full h-28 relative'>
                                <Image
                                    alt={`Imagem de ${pokemonEntry.pokemon_species.name}`}
                                    className='object-contain'
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonEntry.entry_number}.png`}
                                    fill
                                />
                            </div>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default PokemonList
