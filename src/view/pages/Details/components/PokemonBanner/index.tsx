import { Flex } from 'antd'
import { type IPokemonData } from '../../../../../types/Pokemon.types'
import { converter } from '../../../../../utils/converter'
import WeightIcon from '../../../../../assets/icons/WeightIcon'
import { PokemonTypeIcon } from '../../../../../assets/components/PokemonTypeIcon'
import { ColumnHeightOutlined } from '@ant-design/icons'
import { idTransformer } from '../../../../../utils/idTransformer'

import './_styles.scss'

interface IPokemonBannerProps {
  pokemon: IPokemonData
}

export function PokemonBanner ({ pokemon }: IPokemonBannerProps) {
  return (
        <section className="pokemon-banner-section">
            <Flex vertical gap={24} className="pokemon-banner">
                <Flex className="pokemon-banner__illustration" justify="center">
                    <img
                        alt={`Banner image of ${pokemon.name}`}
                        src={pokemon.sprites.other['official-artwork'].front_default}
                    />
                    <div className="pokemon-banner__circle-background" data-type={pokemon.types[0].type.name}></div>
                </Flex>

                <Flex justify="center">
                    <span className="pokemon-banner__id" data-type={pokemon.types[0].type.name}>{idTransformer(pokemon.id)}</span>
                </Flex>

                <h1 className='pokemon-banner__name'>{pokemon.name}</h1>

                <Flex vertical gap={8} className="pokemon-banner__details">
                    <Flex gap={8} align='center'>
                        <ColumnHeightOutlined />
                        <span>Height:</span>
                        <span>{converter(pokemon.height)}m</span>
                    </Flex>
                    <Flex gap={8} align='center'>
                        <WeightIcon />
                        <span>Weight:</span>
                        <span>{converter(pokemon.weight)}kg</span>
                    </Flex>
                </Flex>

                <Flex gap={24} className="pokemon-banner__types">
                    {pokemon.types.map(({ type }) => (
                        <Flex align="center" gap={16} flex={1} className="pokemon-banner__type" key={type.name} data-type={type.name}>
                            <PokemonTypeIcon type={type.name} />
                            <span>{type.name}</span>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </section>
  )
}
