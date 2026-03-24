import { Progress, Flex, Typography } from 'antd'

import { Section } from '../section'
import type { PokemonStatsProps } from './pokemon-stats.types'

import './pokemon-stats.css'

export function PokemonStats({ stats }: PokemonStatsProps) {
  const getStatus = (value: number) => {
    if (value > 80) return 'success'
    if (value > 50) return 'normal'

    return 'exception'
  }

  return (
    <Section title='Status'>
      <Flex vertical gap='small'>
        {stats.map(stat => (
          <Flex align='center' gap='middle' key={stat.baseStat}>
            <Typography.Title
              level={5}
              type='secondary'
              className='pokemon-stats-item-label'
            >
              {stat.statName}
            </Typography.Title>
            <Typography.Text strong className='pokemon-stats-item-value'>
              {stat.baseStat}
            </Typography.Text>
            <Progress
              percent={stat.baseStat}
              status={getStatus(stat.baseStat)}
              showInfo={false}
              strokeWidth={10}
            />
          </Flex>
        ))}
      </Flex>
    </Section>
  )
}
