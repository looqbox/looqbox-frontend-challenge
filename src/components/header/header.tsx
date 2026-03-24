import { Layout, Typography } from 'antd'
import { Link } from 'react-router'

import { Container } from '../container'

import './header.css'

export function Header() {
  return (
    <Layout.Header className='app-header'>
      <Container>
        <Link to='/'>
          <div className='app-header-brand'>
            <img src='/images/pokemon-logo.png' alt='Pokémon Logo' />
            <div className='app-header-brand-divider' />
            <Typography.Title level={4} className='app-header-brand-title'>
              Pokedex
            </Typography.Title>
          </div>
        </Link>
      </Container>
    </Layout.Header>
  )
}
