import { Card, Flex } from 'antd'
import { useNavigate } from 'react-router-dom'
import { type IPokemonData } from '../../../types/Pokemon.types'

interface IPokeCardRootProps {
  children: React.ReactNode
  type: string
  pokemon: IPokemonData
}

export default function PokeCardRoot ({ children, type, pokemon }: IPokeCardRootProps) {
  const navigate = useNavigate()

  function handleClickCard () {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } })
  }

  return (
    <Card
        className="pokemon-card"
        data-type={type}
        style={{ position: 'relative' }}
        onClick={handleClickCard}
    >
      <Flex gap={8} align="center">
          {children}
      </Flex>
    </Card>
  )
}
