import { Card, Typography, Flex } from 'antd'

import type { InfoCardProps } from './info-card.types'

import './info-card.css'

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <Card
      size='small'
      className='info-card'
      variant='borderless'
      styles={{ body: { padding: '0' } }}
    >
      <Flex vertical align='center' justify='center' gap='small'>
        <Typography.Title level={5} className='info-card-title'>
          {title}
        </Typography.Title>
        <Typography.Text type='secondary' className='info-card-description'>
          {description}
        </Typography.Text>
      </Flex>
    </Card>
  )
}
