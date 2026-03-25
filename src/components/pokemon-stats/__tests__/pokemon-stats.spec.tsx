import { render, screen } from '@testing-library/react'

import { PokemonStats } from '../pokemon-stats'
import type { PokemonStat } from '../pokemon-stats.types'

const stats: PokemonStat[] = [
  {
    statName: 'HP',
    baseStat: 100,
  },
  {
    statName: 'Attack',
    baseStat: 50,
  },
  {
    statName: 'Defense',
    baseStat: 55,
  },
]

describe('PokemonStats', () => {
  it('should render pokemon stats', () => {
    render(<PokemonStats stats={stats} />)

    expect(screen.getByText('HP')).toBeInTheDocument()
    expect(screen.getByText('Attack')).toBeInTheDocument()
    expect(screen.getByText('Defense')).toBeInTheDocument()
  })

  it('should render pokemon stats values', () => {
    render(<PokemonStats stats={stats} />)

    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('should render pokemon progress bar by base stat value', () => {
    render(<PokemonStats stats={stats} />)

    const progressWrappers = document.querySelectorAll('.ant-progress')

    expect(progressWrappers[0]).toHaveClass('ant-progress-status-success')
    expect(progressWrappers[1]).toHaveClass('ant-progress-status-exception')
    expect(progressWrappers[2]).toHaveClass('ant-progress-status-normal')
  })
})
