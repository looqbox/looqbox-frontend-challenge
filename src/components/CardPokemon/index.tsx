import React, { CSSProperties, useEffect, useState } from 'react'
import { Card, Flex, Tooltip } from 'antd'
import useLoading from '../../hook/useLoading'
import { getPokemonData } from '../../services/pokemon'
import { colorTypeGradients } from '../../utils/colors'
import '../../styles/pokemon.css'

interface CardProps {
  pokemon: any
}

function CardPokemon({ pokemon }: CardProps) {
  const { loading } = useLoading()

  function finalColor() {
    const type = pokemon?.types

    if (!type) return ''
    let finalColor

    if (type.length === 2) {
      finalColor = colorTypeGradients({
        type1: type[0].type.name,
        type2: type[1].type.name,
        length: type.length
      })
    } else {
      finalColor = colorTypeGradients({
        type1: type[0].type.name,
        type2: type[0].type.name,
        length: type.length
      })
    }
    return `linear-gradient(${finalColor[0]}, ${finalColor[1]})`
  }

  if (loading) return <></>

  return (
    <Card
      hoverable
      style={{
        ...styles.card,
        background: finalColor()
      }}
      title={`#${String(pokemon?.id).padStart(3, '0')}`}
      cover={
        <img
          style={styles.img}
          alt='example'
          src={pokemon?.sprites?.other['dream_world'].front_default}
        />
      }
    >
      <div style={{ textAlign: 'center' }}>{pokemon?.name}</div>
      <Flex justify='center'>
        {pokemon?.types.map((type: any, key: number) => (
          <Tooltip
            overlayStyle={{ fontSize: '8px' }}
            key={key}
            title={type.type.name}
            placement='bottom'
          >
            <div style={styles.areaIcon} className={`${type.type.name}`}>
              <img
                style={{ ...styles.icon }}
                src={`${type.type.name}.png`}
                alt='poke-type'
              ></img>
            </div>
          </Tooltip>
        ))}
      </Flex>
    </Card>
  )
}

export default CardPokemon

const styles = {
  card: {
    width: 200,
    height: 350,
    backgroundColor: '#fff',
    margin: '20px',
    border: 'none'
  },
  img: {
    height: '150px',
    margin: 'auto',
    padding: '15px 5px 5px 5px'
  },
  areaIcon: {
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: '20px'
  }
}
