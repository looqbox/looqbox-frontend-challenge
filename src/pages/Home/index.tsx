import { Container, Pokecard } from '@/components'
import { Flex, Input } from 'antd'

export const Component = () => {
  return (
    <Container>
      <Flex vertical gap={16}>
        <Flex justify='flex-end'>
          <Input placeholder='Search Pokémon...' style={{ width: 300 }} />
        </Flex>
        <Flex gap={16} wrap>
          <Pokecard
            image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
            title='Pikachu'
            url='/details/25'
          />
          <Pokecard
            image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
            title='Pikachu'
            url='/details/25'
          />
        </Flex>
      </Flex>
    </Container>
  )
}

Component.displayName = 'Home'
