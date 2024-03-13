import { Card, Flex, Skeleton } from 'antd'
import { type IPokemonStats, type IPokemonSpecie } from '../../../../../types/Pokemon.types'

import './_styles.scss'

interface IPokemonAdditionalInfo {
  specieInfo?: IPokemonSpecie
  baseStats?: IPokemonStats[]
  isFetchingSpecies: boolean
}

export function PokemonAdditionalInfo ({ specieInfo, baseStats, isFetchingSpecies }: IPokemonAdditionalInfo) {
  const statsMap = {
    hp: {
      label: 'hp'
    },
    attack: {
      label: 'atk'
    },
    defense: {
      label: 'def'
    },
    'special-attack': {
      label: 'spa'
    },
    'special-defense': {
      label: 'spd'
    },
    speed: {
      label: 'sp'
    }
  }

  return (
    <section className="pokemon-additional-section">
      <Flex vertical gap={24} flex={1} justify='flex-end' className="pokemon-additional">
      {isFetchingSpecies && (
        <Card title={<h1>About:</h1>} className="pokemon-additional__card">
          <Skeleton loading={isFetchingSpecies} active paragraph={{ rows: 2 }} title={false}></Skeleton>
        </Card>
      )}
      {!isFetchingSpecies && (
        <Card title={<h1>About:</h1>} className="pokemon-additional__card" loading={isFetchingSpecies}>
          {specieInfo?.flavor_text_entries[0] && (
            <p>{specieInfo.flavor_text_entries[0]?.flavor_text}</p>
          )}
          {!specieInfo?.flavor_text_entries[0] && (
            <p>No about information available.</p>
          )}
        </Card>
      )}

        {baseStats && (
          <Card title={<h1>Base stats:</h1>} className="pokemon-additional__card pokemon-additional__stats">
            <Flex vertical gap={8}>
              {baseStats.map(stat => {
                const statsBar = (stat.base_stat / 250) * 100
                const barColor = statsBar >= 50
                  ? '#3C5AA6'
                  : statsBar >= 30
                    ? '#FFCB05'
                    : '#CC6666'

                return (
                  <Flex gap={4} justify="space-between" align="center" key={stat.stat.name}>
                      <Flex gap={4} className="pokemon-additional__stats__label">
                          <span>{statsMap[stat.stat.name].label}</span>
                          <span>{stat.base_stat}</span>
                      </Flex>
                      <div className="pokemon-additional__stats__bar">
                          <div style={{ backgroundColor: `${barColor}`, width: `${statsBar}%` }}></div>
                      </div>
                  </Flex>
                )
              })}
            </Flex>
          </Card>
        )}
      </Flex>
    </section>
  )
}
