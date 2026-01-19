import { Badge, Col, Flex, Row, Skeleton, Typography } from 'antd'
import type { PokemonTypes } from '../../../types/pokemonTypes'
import { typeColors } from '../../../utils/typeColors'

interface Props {
  data: { [key: string]: PokemonTypes[] }
  isLoading?: boolean
}

const PokeEffectiveness = ({ data, isLoading }: Props) => {
  const title = {
    double_damage_to: 'Super-effective against',
    double_damage_from: 'Super-weak against'
  }

  if (isLoading) return <LoadingPokeEffectiveness />

  return (
    <Row gutter={[0, 24]} style={{ height: '100%' }}>
      {Object.entries(data).map(([key, types]) => (
        <Col xs={24} sm={12} key={key}>
          <Typography.Title level={3}>
            {title[key as keyof typeof title]}
          </Typography.Title>

          <Flex vertical gap={16}>
            {types.map(type => (
              <Badge
                key={type}
                color={typeColors[type]}
                text={
                  <Typography.Text
                    style={{ fontSize: 20, textTransform: 'capitalize' }}
                  >
                    {type}
                  </Typography.Text>
                }
              />
            ))}
          </Flex>
        </Col>
      ))}
    </Row>
  )
}

const LoadingPokeEffectiveness = () => {
  return (
    <Row gutter={[0, 24]} style={{ height: '100%' }}>
      {Array.from({ length: 2 }).map((_, index) => (
        <Col xs={24} sm={12} key={index}>
          <Skeleton.Node style={{ height: 32, width: 320, marginBottom: 16 }} />
          <Flex vertical gap={16}>
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton.Node key={index} style={{ height: 20, width: 220 }} />
            ))}
          </Flex>
        </Col>
      ))}
    </Row>
  )
}

export default PokeEffectiveness
