import { createUseStyles } from 'react-jss'

import { Flex, Tag } from 'antd'

import { Container } from '@/components/container'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '99.4rem',

    [breakpoints.md]: {
      height: '95.4rem',
    },

    [breakpoints.sm]: {
      overflow: 'hidden',
      height: '104.5rem',
    },

    '&::after': {
      content: '""',
      width: '100%',
      height: '28.8rem',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: '#EFF3F6',
      zIndex: 0,
      pointerEvents: 'none',
    },
  },
  bgArea: {
    position: 'relative',
    width: '100%',
    height: '70.6rem',
    background: 'url(/images/red-bg.svg) no-repeat center center',
    backgroundSize: 'cover !important',
    paddingTop: '14.3rem',

    [breakpoints.sm]: {
      paddingTop: '12rem',
    },
  },
  content: {
    position: 'relative',
    height: '100%',
    zIndex: 1,
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    fontWeight: 600,
    fontSize: '1.3rem',
    letterSpacing: '-0.01em',

    backgroundColor: '#fff',
    borderRadius: 244,
    padding: '4px 18px 6px 4px',
    margin: 0,
    marginBottom: '2.9rem',
    border: 0,

    '&>span': {
      color: '#C20001',
    },
  },
  tagIcon: {
    width: '2.6rem',
    height: '2.6rem',
    backgroundColor: 'rgba(194, 0, 0, 0.15)',
    borderRadius: '50%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '6.4rem',
    lineHeight: '7.8rem',
    letterSpacing: '-0.01em',
    marginBottom: '0.8rem',
    color: '#fff',

    [breakpoints.sm]: {
      fontSize: '4.8rem',
      lineHeight: '5.9rem',
      marginBottom: '2.4rem',
    },
  },
  paragraph: {
    fontWeight: 500,
    fontSize: '1.8rem',
    lineHeight: '150%',
    textAlign: 'center',
    color: '#fff',
  },
  images: {
    position: 'relative',
    width: '100%',
    maxWidth: '79.8rem',
    margin: '0 auto',
    marginTop: '16.2rem',

    [breakpoints.md]: {
      marginTop: '8.2rem',
    },
    [breakpoints.sm]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  lightingImg: {
    position: 'absolute',
    top: '-4.9rem',
    left: '50%',
    zIndex: 2,
    marginLeft: '-8.5rem',
  },
  pokeballImg: {
    position: 'relative',
    objectFit: 'contain',

    [breakpoints.sm]: {
      maxWidth: 720,
    },
  },
})

export function Hero() {
  const styles = useStyles()

  return (
    <section id="hero" className={styles.root}>
      <div className={styles.bgArea}>
        <Container>
          <Flex vertical align="center" className={styles.content}>
            <Tag
              icon={
                <Flex
                  align="center"
                  justify="center"
                  className={styles.tagIcon}
                >
                  🎒
                </Flex>
              }
              className={styles.tag}
            >
              pokédex
            </Tag>

            <h2 className={styles.title}>Who is that Pokémon?</h2>
            <p className={styles.paragraph}>
              The perfect guide for those who want to hunt Pokémon around the
              world
            </p>

            <div className={styles.images}>
              <img
                src="/images/lighting.svg"
                alt='Lighting "Pokéball"'
                className={styles.lightingImg}
              />
              <img
                src="/images/monster-ball.png"
                alt="Monster Ball"
                className={styles.pokeballImg}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </section>
  )
}
