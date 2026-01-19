import { Tag } from 'antd'
import type { PokemonTypes } from '../types/pokemonTypes'
import { typeColors } from '../utils/typeColors'

interface TypeTagProps {
  type: PokemonTypes
}

const TypeTag = ({ type }: TypeTagProps) => {
  return (
    <Tag color={typeColors[type]} style={{ textTransform: 'capitalize' }}>
      {type}
    </Tag>
  )
}

export default TypeTag
