import { createUseStyles } from 'react-jss'

import { Flex, Typography } from 'antd'

import { useAppSelector } from '@/store'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    marginBottom: '7.5rem',

    [breakpoints.xl]: {
      marginBottom: '4rem',
    },

    [breakpoints.sm]: {
      marginBottom: '3.2rem',
      justifyContent: 'center',
      textAlign: 'center',
    },

    '&>img': {
      marginRight: '1.8rem',
    },

    '&>span': {
      fontSize: '1.8rem',
      color: '#4D5053',
    },
  },
})

export function PokemonTotal() {
  const styles = useStyles()

  const total = useAppSelector((state) => state.pokedex.total)

  return (
    <Flex align="center" className={styles.root}>
      <img src="/images/icon-red-ball.svg" alt="Pokéball" />
      <Typography.Text strong>{total} Pokémon</Typography.Text>
    </Flex>
  )
}
