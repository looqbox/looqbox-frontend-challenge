import { createUseStyles } from 'react-jss'

import { Card, Flex, Typography } from 'antd'
import clsx from 'clsx'

import { formatPokemonId } from '@/lib/utils'
import { type Pokemon } from '@/store/slices/pokedex'

interface PokemonCardItemProps {
  pokemon: Pokemon
}

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '30.4rem',
    backgroundColor: '#fff',
    boxShadow: '0px 10px 51px -5px rgba(183, 189, 193, 0.3)',
    borderRadius: 12,
    zIndex: 1,

    transition: 'all .2s',

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 12px 40px -5px rgba(90, 96, 100, 0.3)',
    },
  },
  image: {
    position: 'relative',
    width: 200,
    height: 200,
    margin: '0 auto',
    marginBottom: '1.4rem',
    zIndex: 2,

    '&>img': {
      maxWidth: '55%',
      maxHeight: 200,
    },

    '&::before': {
      content: '""',
      width: '16.5rem',
      height: '16.5rem',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: -1,
    },

    // Type colors
    '&.grass': {
      '&::before': {
        backgroundColor: 'rgba(114, 184, 97, 0.2)',
      },
    },
    '&.bug': {
      '&::before': {
        backgroundColor: 'rgba(156, 186, 72, 0.2)',
      },
    },
    '&.dark': {
      '&::before': {
        backgroundColor: 'rgba(89, 87, 97, 0.2)',
      },
    },
    '&.dragon': {
      '&::before': {
        backgroundColor: 'rgba(44, 106, 193, 0.2)',
      },
    },
    '&.electric': {
      '&::before': {
        backgroundColor: 'rgba(238, 218, 103, 0.2)',
      },
    },
    '&.fairy': {
      '&::before': {
        backgroundColor: 'rgba(226, 150, 225, 0.2)',
      },
    },
    '&.fighting': {
      '&::before': {
        backgroundColor: 'rgba(196, 77, 97, 0.2)',
      },
    },
    '&.ground': {
      '&::before': {
        backgroundColor: 'rgba(206, 128, 86, 0.2)',
      },
    },
    '&.ice': {
      '&::before': {
        backgroundColor: 'rgba(139, 206, 193, 0.2)',
      },
    },
    '&.normal': {
      '&::before': {
        backgroundColor: 'rgba(160, 162, 159, 0.2)',
      },
    },
    '&.poison': {
      '&::before': {
        backgroundColor: 'rgba(172, 106, 202, 0.2)',
      },
    },
    '&.psychic': {
      '&::before': {
        backgroundColor: 'rgba(235, 140, 133, 0.2)',
      },
    },
    '&.rock': {
      '&::before': {
        backgroundColor: 'rgba(139, 206, 193, 0.2)',
      },
    },
    '&.ghost': {
      '&::before': {
        backgroundColor: 'rgba(97, 110, 183, 0.2);',
      },
    },
    '&.steel': {
      '&::before': {
        backgroundColor: 'rgba(101, 148, 161, 0.2)',
      },
    },
    '&.water': {
      '&::before': {
        backgroundColor: 'rgba(136, 163, 212, 0.2)',
      },
    },
    '&.fire': {
      '&::before': {
        backgroundColor: 'rgba(246, 109, 109, 0.2)',
      },
    },
    '&.flying': {
      '&::before': {
        backgroundColor: 'rgba(166, 187, 232, 0.2)',
      },
    },
  },
  info: {
    padding: '0 2.8rem',
    textTransform: 'capitalize',
  },
  code: {
    fontWeight: 500,
    fontSize: '1.3rem',
    color: '#7A7D80',

    marginBottom: '0.6rem',
  },
  iconType: {
    width: '2.8rem',
    height: '2.8rem',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',

    '&>img': {
      marginBottom: '0.5rem',
    },
  },
})

export function PokemonCardItem({ pokemon }: PokemonCardItemProps) {
  const styles = useStyles()

  return (
    <Card hoverable styles={{ body: { padding: 0 } }} className={styles.root}>
      <Flex
        align="center"
        justify="center"
        className={clsx(styles.image, pokemon.type)}
      >
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </Flex>

      <Flex align="flex-end" justify="space-between" className={styles.info}>
        <Flex vertical align="start">
          <Typography.Text className={styles.code}>
            {formatPokemonId(pokemon.id)}
          </Typography.Text>
          <Typography.Text strong style={{ fontSize: '1.8rem' }}>
            {pokemon.name}
          </Typography.Text>
        </Flex>

        <Flex align="center" justify="center" className={styles.iconType}>
          <img
            src={`/images/pokemon-type-icons/${pokemon.type}.svg`}
            alt={pokemon.type}
          />
        </Flex>
      </Flex>
    </Card>
  )
}
