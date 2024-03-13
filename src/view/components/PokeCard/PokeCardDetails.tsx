import { Flex } from 'antd'
import { type PokemonData } from '../../../types/pokemon.types'
import { converter } from '../../../utils/converter'

import { PokemonTypeIcon } from '../../../assets/components/PokemonTypeIcon'
import { ColumnHeightOutlined } from '@ant-design/icons'
import WeightIcon from '../../../assets/icons/WeightIcon'

interface IPokeCardDetailsProps {
  pokemon: PokemonData
}

export default function PokeCardDetails ({ pokemon }: IPokeCardDetailsProps) {
  return (
        <Flex vertical justify="space-between" className="pokemon-card__details" gap={9}>
            <Flex gap={8}>
                <Flex gap={4}>
                    <ColumnHeightOutlined />
                    <span>{converter(pokemon.height)}m</span>
                </Flex>
                <Flex gap={4}>
                    <WeightIcon />
                    <span>{converter(pokemon.weight)}kg</span>
                </Flex>
            </Flex>
            <Flex gap={8}>
                {pokemon.types.map(({ type }) => (
                    <Flex gap={4} key={type.name}>
                        <PokemonTypeIcon type={type.name}/>
                        <span className="pokemon-card__type" data-type={type.name}>{type.name}</span>
                    </Flex>
                ))}
            </Flex>
        </Flex>
  )
}
