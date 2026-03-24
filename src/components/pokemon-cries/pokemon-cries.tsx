import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'

import { Section } from '../section'
import type { PokemonCriesProps } from './pokemon-cries.types'

export function PokemonCries({ cries }: PokemonCriesProps) {
  const playCry = (audio: string) => {
    const audioPlayer = new Audio(audio)

    audioPlayer.volume = 0.25
    audioPlayer.play()
  }

  return (
    <Section title='Cries'>
      <Flex wrap gap='small'>
        {cries.map(cry => (
          <Button
            key={cry.name}
            icon={<PlayCircleOutlined />}
            shape='round'
            onClick={() => playCry(cry.audio)}
          >
            {cry.name}
          </Button>
        ))}
      </Flex>
    </Section>
  )
}
