import { PlayCircleOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Image, Row, Skeleton, Typography } from 'antd'
import { useState } from 'react'
import TypeTag from '../../../components/TypeTag'
import type { PokemonTypes } from '../../../types/pokemonTypes'
import { useAudio } from '../../../utils/useAudio'

interface Props {
  data: {
    id: number
    name: string
    types: PokemonTypes[]
    cry: string
    sprite: string
    shinySprite: string
    description: string
  }
  isLoading?: boolean
}

const PokeInfos = ({ data, isLoading }: Props) => {
  const { id, name, types, cry, sprite, shinySprite, description } = data
  const [playing, toggleAudio] = useAudio(cry)
  const [shinyVisible, setShinyVisible] = useState(false)

  const buttons = [
    {
      text: playing ? 'Stop Cry' : 'Play Cry',
      icon: <PlayCircleOutlined />,
      color: 'orange' as const,
      variant: 'solid' as const,
      onClick: toggleAudio
    },
    {
      text: 'See Shiny',
      icon: <StarOutlined />,
      color: 'default' as const,
      variant: 'outlined' as const,
      onClick: () => setShinyVisible(true)
    }
  ]

  if (isLoading) return <LoadingPokeInfos />

  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      {/* Image */}
      <Col xs={24} sm={12} lg={8}>
        <Flex
          align="center"
          justify="center"
          style={{ minHeight: 260, overflow: 'hidden', borderRadius: 16 }}
        >
          <Image
            src={sprite}
            alt={`${name} image`}
            width="100%"
            fallback="https://placehold.co/260.png?text=Image+not+found"
            style={{ imageRendering: 'pixelated', maxHeight: '100%' }}
            preview={{ style: { imageRendering: 'pixelated' }, width: 600 }}
          />
        </Flex>
      </Col>

      {/* Infos */}
      <Col
        xs={24}
        sm={12}
        lg={15}
        style={{
          gap: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {/* Buttons */}
        <Flex align="center" gap={8}>
          {buttons.map(btn => (
            <Button key={btn.text} {...btn}>
              {btn.text}
            </Button>
          ))}
          {/* Shiny Modal */}
          <Image
            width={200}
            src={shinySprite}
            style={{ display: 'none' }}
            alt={`${name} shiny image`}
            preview={{
              width: 600,
              src: shinySprite,
              visible: shinyVisible,
              style: { imageRendering: 'pixelated' },
              onVisibleChange: value => {
                setShinyVisible(value)
              }
            }}
          />
        </Flex>

        {/* Details */}
        <Flex vertical>
          <Flex vertical>
            <Typography.Text disabled>#{id}</Typography.Text>
            <Typography.Title
              level={1}
              style={{ margin: 0, textTransform: 'capitalize' }}
            >
              {name}
            </Typography.Title>
          </Flex>

          <Flex style={{ marginTop: '8px' }}>
            {types.map(type => (
              <TypeTag key={type} type={type} />
            ))}
          </Flex>

          <Typography.Paragraph type="secondary" style={{ marginTop: '16px' }}>
            {description}
          </Typography.Paragraph>
        </Flex>
      </Col>
    </Row>
  )
}

const LoadingPokeInfos = () => {
  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      {/* Image */}
      <Col xs={24} sm={12} lg={8}>
        <Flex align="center" justify="center">
          <Skeleton.Image style={{ width: 260, height: 260 }} />
        </Flex>
      </Col>

      {/* Infos */}
      <Col
        xs={24}
        sm={12}
        lg={15}
        style={{
          gap: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {/* Buttons */}
        <Flex align="center" gap={8}>
          <Skeleton.Button size="small" />
          <Skeleton.Button size="small" />
        </Flex>

        {/* Details */}
        <Skeleton />
      </Col>
    </Row>
  )
}

export default PokeInfos
