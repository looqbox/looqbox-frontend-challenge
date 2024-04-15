import React from 'react'

import { PokemonStatsProps } from './defs'

import * as S from './PokemonStats.styles'

export function PokemonStats({ pokemonType, stats }: PokemonStatsProps) {
  const generatePercentage = (value: number) => {
    const maxValue = 100

    const progressValue = (value * maxValue) / 100

    return progressValue > maxValue ? maxValue : progressValue
  }

  return (
    <S.Wrapper>
      <S.StatWrapper>
        {stats.map((stat) => (
          <S.StatRow key={`${stat.stat}-${stat.value}`}>
            <S.StatLabel $pokemonType={pokemonType} key={stat.stat}>
              {stat.stat}
            </S.StatLabel>
            <S.StatValue>{stat.value}</S.StatValue>
            <S.StatBar $pokemonType={pokemonType}>
              <S.StatBarFill
                $pokemonType={pokemonType}
                $progressValue={generatePercentage(stat.value)}
              />
            </S.StatBar>
          </S.StatRow>
        ))}
      </S.StatWrapper>
    </S.Wrapper>
  )
}
