import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PokemonMoviments } from '../PokemonMoviments'

vi.mock('../PokemonMoveDetails', () => ({
  PokemonMoveDetails: ({ url }: { url: string }) => (
    <div data-testid="pokemon-move-details">MockedMoveDetails - {url}</div>
  ),
}))

describe('PokemonMoviments', () => {
  const mockMoves = [
    {
      move: { name: 'tackle', url: '/move/1' },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up' },
          version_group: { name: 'red-blue' },
        },
      ],
    },
    {
      move: { name: 'vine-whip', url: '/move/2' },
      version_group_details: [
        {
          level_learned_at: 7,
          move_learn_method: { name: 'machine' },
          version_group: { name: 'yellow' },
        },
      ],
    },
  ]

  it('renders the main title with the count', () => {
    render(<PokemonMoviments moves={mockMoves} />)
    expect(screen.getByText(/Moviments \(2\)/i)).toBeInTheDocument()
  })

  it('shows the move names after expanding the main panel', () => {
    render(<PokemonMoviments moves={mockMoves} />)

    fireEvent.click(screen.getByText(/Moviments \(2\)/i))

    expect(screen.getByText(/tackle/i)).toBeInTheDocument()
    expect(screen.getByText(/vine whip/i)).toBeInTheDocument()
  })

  it('expands a subpanel and shows details', () => {
    render(<PokemonMoviments moves={mockMoves} />)

    fireEvent.click(screen.getByText(/Moviments \(2\)/i))

    fireEvent.click(screen.getByText(/vine whip/i))

    expect(
      screen.getByText(/MockedMoveDetails - \/move\/2/i),
    ).toBeInTheDocument()
  })

  it('does not break if moves is empty', () => {
    render(<PokemonMoviments moves={[]} />)
    expect(screen.getByText(/Moviments \(0\)/i)).toBeInTheDocument()
  })
})
