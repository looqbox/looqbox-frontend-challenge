import React, { CSSProperties, useEffect, useState } from 'react'
import { Card, Flex, Tooltip } from 'antd'
import useLoading from '../../hook/useLoading'
import { getPokemonData, getPokemonDescription } from '../../services/pokemon'
import { colorTypeGradients } from '../../utils/colors'
import '../../styles/pokemon.css'
import fetchGenderRate from './fetchGenderRate'

interface CardProps {
  pokemon: any
}

function DetailsPokemon({ pokemon }: CardProps) {
  const { loading, hideLoading, showLoading } = useLoading()
  const [pokemonData, setPokemonData] = useState<any>({})

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

  async function getDetails() {
    try {
      const res = await getPokemonDescription(pokemon.name)
      setPokemonData(res)
      console.log('res', res)
      console.log('pokemon', pokemon)
    } catch (error) {}
  }

  useEffect(() => {
    if (pokemon) {
      getDetails()
    }
  }, [pokemon])

  if (loading || !pokemonData) return <></>

  return (
    <Flex
      justify='space-between'
      style={{
        ...styles.card,
        background: finalColor()
      }}
    >
      <Flex
        vertical
        align='center'
        style={{
          minWidth: '250px',
          backgroundColor: '#ffffff7b',
          borderRadius: '15px',
          marginRight: '40px'
        }}
      >
        <p>{`#${String(pokemon?.id).padStart(3, '0')}`}</p>
        <p>{pokemon?.name}</p>
        <img
          style={{ ...styles.img }}
          alt='example'
          src={pokemon?.sprites?.other['dream_world'].front_default}
        />

        <Flex justify={'center'} style={{ marginBottom: '20px' }}>
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

        <p style={styles.info}>
          {`Height: ${pokemon.height / 10} m/${`${Math.floor(
            (pokemon.height / 10) * 3.28
          )}'${Math.round((((pokemon.height / 10) * 3.28) % 1) * 12)}"`} `}
        </p>
        <p style={styles.info}>
          {`Weight: ${(pokemon.weight / 10).toFixed(1)} kg/${(
            pokemon.weight * 0.2205
          ).toFixed(1)} lbs`}
        </p>
        <div style={{ fontSize: '10px', marginTop: '5px' }}>
          {pokemonData.genderRate === -1
            ? 'Genderless'
            : fetchGenderRate(pokemonData.gender_rate)}
        </div>
      </Flex>
      <Flex vertical align='left' style={{ width: '100%' }}>
        <p>About</p>
        <p style={{ ...styles.info, lineHeight: '20px' }}>
          {pokemonData?.flavor_text_entries &&
            pokemonData?.flavor_text_entries[0]?.flavor_text}
        </p>
        <p>Abilities</p>
        <p style={styles.info}>
          {pokemon.abilities.map((value: any) => `• ${value?.ability.name} `)}
        </p>
      </Flex>
    </Flex>
  )
}

export default DetailsPokemon

const styles = {
  card: {
    cursor: 'pointer',
    backgroundColor: '#fff',
    margin: '20px',
    border: 'none',
    borderRadius: '15px',
    transition: '0.5s ease-in-out',
    height: 430,
    padding: '20px'
  },
  img: {
    height: '150px',
    width: '150px',

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
  },
  info: {
    fontSize: '9px'
  }
}
