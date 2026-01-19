import { Col, Flex, Row, Skeleton, Statistic } from 'antd'
import DonutChart from '../../../components/DonutChart'

interface Props {
  data: {
    height: number
    weight: number
    stats: {
      hp: number
      attack: number
      defense: number
      specialAttack: number
      specialDefense: number
      speed: number
    }
  }
  isLoading?: boolean
}

const PokeStats = ({ data, isLoading }: Props) => {
  const measurements = [
    { title: 'Weight', value: data.weight, suffix: 'kg' },
    { title: 'Height', value: data.height, suffix: 'm' }
  ]
  const stats = [
    { name: 'Base Health', value: data.stats.hp },
    { name: 'Base Attack', value: data.stats.attack },
    { name: 'Base Defense', value: data.stats.defense },
    { name: 'Base Speed', value: data.stats.speed },
    { name: 'Special Attack', value: data.stats.specialAttack },
    { name: 'Special Defense', value: data.stats.specialDefense }
  ]

  if (isLoading) return <LoadingPokeStats />

  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      {/* Measurements */}
      <Col xs={24} md={12}>
        <Flex vertical justify="center" gap={80} style={{ height: '100%' }}>
          {measurements.map(measurement => (
            <Statistic
              key={measurement.title}
              {...measurement}
              style={{ textAlign: 'center' }}
            />
          ))}
        </Flex>
      </Col>

      {/* Stats */}
      <Col xs={24} md={12}>
        <Row style={{ height: '100%' }}>
          {stats.map(stat => (
            <Col xs={12} sm={8} lg={12} xl={8} key={stat.name}>
              <DonutChart data={stat} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

const LoadingPokeStats = () => {
  return (
    <Row gutter={[24, 24]} style={{ height: '100%' }}>
      <Col xs={24} md={12}>
        <Flex vertical justify="center" gap={80} style={{ height: '100%' }}>
          {Array.from({ length: 2 }).map((_, index) => (
            <Flex
              key={'measurement-skeleton-' + index}
              vertical
              align="center"
              gap={8}
            >
              <Skeleton.Node style={{ height: 16, width: 80 }} />
              <Skeleton.Node style={{ height: 32, width: 120 }} />
            </Flex>
          ))}
        </Flex>
      </Col>

      {/* Stats */}
      <Col xs={24} md={12}>
        <Row style={{ height: '100%' }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col xs={12} sm={8} lg={12} xl={8} key={'stat-skeleton-' + index}>
              <Skeleton.Avatar size={80} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default PokeStats
