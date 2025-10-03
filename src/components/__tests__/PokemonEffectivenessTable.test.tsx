import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PokemonEffectivenessTable } from '../PokemonEffectivenessTable'
import type { TypeDetail } from '../../api/types'

const createTypeDetail = (
  name: string,
  {
    double = [] as string[],
    half = [] as string[],
    none = [] as string[],
  } = {},
): TypeDetail => ({
  id: 1,
  name,
  damage_relations: {
    double_damage_from: double.map((n) => ({ name: n, url: '' })),
    double_damage_to: [],
    half_damage_from: half.map((n) => ({ name: n, url: '' })),
    half_damage_to: [],
    no_damage_from: none.map((n) => ({ name: n, url: '' })),
    no_damage_to: [],
  },
})

describe('PokemonEffectivenessTable', () => {
  it('renders all types from getTypes list', () => {
    render(<PokemonEffectivenessTable types={[createTypeDetail('normal')]} />)
    expect(screen.getAllByText(/1x/).length).toBeGreaterThan(0)
  })

  it('calculates double damage (2x) correctly', () => {
    const fireWeakToWater = createTypeDetail('fire', { double: ['water'] })
    render(<PokemonEffectivenessTable types={[fireWeakToWater]} />)
    expect(screen.getByText(/2x/)).toBeInTheDocument()
  })

  it('calculates half damage (0.5x) correctly', () => {
    const fireResistsGrass = createTypeDetail('fire', { half: ['grass'] })
    render(<PokemonEffectivenessTable types={[fireResistsGrass]} />)
    expect(screen.getByText(/0.5x/)).toBeInTheDocument()
  })

  it('calculates immunity (0x) correctly', () => {
    const ghostImmuneToNormal = createTypeDetail('ghost', { none: ['normal'] })
    render(<PokemonEffectivenessTable types={[ghostImmuneToNormal]} />)
    expect(screen.getByText(/0x/)).toBeInTheDocument()
  })

  it('shows diagonal stripe for 4x', () => {
    const type = createTypeDetail('rock', { double: ['water', 'water'] })
    render(<PokemonEffectivenessTable types={[type]} />)

    expect(
      screen.getByText((c) => c.replace(/\s+/g, '') === '4x'),
    ).toBeInTheDocument()

    const bar = document.querySelector('.bg-\\[\\#7c0000\\]')
    expect(bar).toBeTruthy()
  })

  it('calculates quarter damage (0.25x) and shows light green stripe', () => {
    const type = createTypeDetail('steel', { half: ['grass', 'grass'] })
    render(<PokemonEffectivenessTable types={[type]} />)

    expect(
      screen.getByText((c) => c.replace(/\s+/g, '') === '0.25x'),
    ).toBeInTheDocument()

    const bar = document.querySelector('.bg-\\[\\#73d216\\]')
    expect(bar).toBeTruthy()
  })

  it('does not render a stripe when multiplier is 1x (default)', () => {
    render(<PokemonEffectivenessTable types={[createTypeDetail('normal')]} />)

    const oneX = screen.getAllByText((c) => c.replace(/\s+/g, '') === '1x')[0]
    expect(oneX).toBeInTheDocument()

    expect(
      document.querySelector('.absolute.-bottom-6'),
    ).not.toBeInTheDocument()
  })
})
