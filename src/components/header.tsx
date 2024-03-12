import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import { Flex, Layout, Typography } from 'antd'

import { Container } from '@/components/container'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: '11.2rem',
    zIndex: 2020,

    [breakpoints.sm]: {
      height: '8.2rem',
    },
  },
  logo: {
    '&>img': {
      [breakpoints.sm]: {
        maxWidth: 120,
      },
    },
  },
  text: {
    fontSize: '1.3rem',
    color: '#fff',
  },
})

export function Header() {
  const styles = useStyles()

  return (
    <Layout.Header className={styles.root}>
      <Flex component={Container} align="center" justify="space-between">
        <Link to="/" className={styles.logo}>
          <img src="/images/pokemon-logo.svg" alt="Logo do Pokémon" />
        </Link>

        <Typography.Text className={styles.text}>
          <Typography.Text strong>Looqbox</Typography.Text> {'->'} Pokédex
        </Typography.Text>
      </Flex>
    </Layout.Header>
  )
}
