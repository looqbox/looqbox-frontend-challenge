import { Button, Card, Flex, Typography } from 'antd'
import { Link } from 'react-router'

import type { PokecardProps } from './pokecard.types'

import './pokecard.css'

export function Pokecard({ image, title, url }: PokecardProps) {
  return (
    <Link className='pokecard-link' to={url}>
      <Card className='pokecard' hoverable>
        <Flex vertical align='center' justify='center'>
          <div className='pokecard-image-container'>
            <div className='pokecard-bg-circle' />
            <img src={image} alt={title} className='pokecard-img' />
          </div>
          <Typography.Title level={4} className='pokecard-title' style={{ marginTop: 0 }}>
            {title}
          </Typography.Title>
          <Button shape='round'>+ Information</Button>
        </Flex>
      </Card>
    </Link>
  )
}
