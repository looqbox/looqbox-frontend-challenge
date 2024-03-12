import React from 'react'
import { createUseStyles } from 'react-jss'
import { useNavigate, useParams } from 'react-router-dom'

import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Layout, Progress, Tag, Typography } from 'antd'

import { Container } from '@/components/container'
import { formatPokemonId } from '@/lib/utils'
import { useApDispatch, useAppSelector } from '@/store'
import { searchPokemon } from '@/store/slices/pokedex'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    paddingBottom: '8rem',
  },
  header: {
    padding: '4rem 0',

    [breakpoints.sm]: {
      padding: '3.2rem 0',
    },
  },
  content: {
    position: 'relative',
    width: '100%',

    marginTop: '4rem',
    paddingLeft: '2rem',

    [breakpoints.md]: {
      marginTop: 0,
      flexDirection: 'column',
      gap: 32,
    },
  },
  tagType: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    width: 'fit-content',
    marginTop: '1rem',
    borderRadius: 99999,
    padding: '0.2rem 0.875rem',

    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  images: {
    position: 'relative',
    width: '100%',
    height: '30rem',
    flex: 1,

    marginTop: '4rem',
  },
  cardInfo: {
    textAlign: 'center',

    [breakpoints.sm]: {
      width: '100%',
    },
  },
})

export function PokemonPage() {
  const styles = useStyles()

  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useApDispatch()
  const pokemon = useAppSelector((state) => state.pokedex.pokemons[0])

  React.useEffect(() => {
    if (params.nameOrCode) {
      dispatch(searchPokemon(params.nameOrCode))
    }
  }, [dispatch, params.nameOrCode])

  function handleBack() {
    navigate('/')
  }

  if (!pokemon) {
    return null
  }

  return (
    <Flex component="main" vertical className={styles.root}>
      <Container>
        <Layout.Header className={styles.header}>
          <Button
            type="text"
            htmlType="button"
            onClick={handleBack}
            icon={<ArrowLeftOutlined style={{ color: '#C20001' }} />}
          >
            Back
          </Button>
        </Layout.Header>

        <Flex className={styles.content}>
          <Flex vertical style={{ flexGrow: 1 }}>
            <Flex align="center" gap={16}>
              <Typography.Title
                level={1}
                style={{ textTransform: 'capitalize' }}
              >
                {pokemon.name}
              </Typography.Title>
              <Typography.Title level={4} style={{ opacity: 0.4 }}>
                {formatPokemonId(pokemon.id)}
              </Typography.Title>
            </Flex>

            <Tag
              className={styles.tagType}
              icon={
                <img
                  src={`/images/pokemon-type-icons/${pokemon.type}.svg`}
                  alt={`${pokemon.type}`}
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
              }
            >
              {pokemon.type}
            </Tag>

            <Flex
              align="center"
              justify="space-between"
              className={styles.images}
              style={{
                background: `url(/images/pokemon-type-bg/${pokemon.type}.svg) no-repeat center center`,
              }}
            >
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                style={{ width: '50%', height: '100%' }}
              />
            </Flex>
          </Flex>

          <section style={{ flexGrow: 1 }}>
            <Typography.Title level={5} style={{ marginBottom: 32 }}>
              Details
            </Typography.Title>

            <Flex align="flex-start" wrap="wrap" gap={16}>
              <Card className={styles.cardInfo}>
                <Typography.Title level={5}>Height</Typography.Title>
                <Typography.Text>{pokemon.height / 10}m</Typography.Text>
              </Card>

              <Card className={styles.cardInfo}>
                <Typography.Title level={5}>Weight</Typography.Title>
                <Typography.Text>{pokemon.weight / 10}kg</Typography.Text>
              </Card>
              <Card className={styles.cardInfo}>
                <Typography.Title level={5}>Abilities</Typography.Title>
                <Typography.Text style={{ textTransform: 'capitalize' }}>
                  {pokemon.ability}
                </Typography.Text>
              </Card>
            </Flex>

            <Flex vertical gap={40} style={{ marginTop: '2rem' }}>
              <Typography.Title level={5}>Stats</Typography.Title>

              <Flex component="ul" vertical gap={16}>
                {pokemon.stats.map((stat) => {
                  return (
                    <li key={stat.name} style={{ textTransform: 'capitalize' }}>
                      <Flex align="center" gap={16}>
                        <Typography.Text
                          strong
                          style={{ width: '24rem', opacity: 0.6 }}
                        >
                          {stat.name}
                        </Typography.Text>
                        <Progress percent={stat.value} />
                      </Flex>
                    </li>
                  )
                })}
              </Flex>
            </Flex>
          </section>
        </Flex>
      </Container>
    </Flex>
  )
}
