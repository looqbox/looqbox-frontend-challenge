import { describe, it, expect, vi } from 'vitest'
import { PokemonCard } from '@/components/pokemon/pokemon-card'
import { renderWithProviders } from '@/@tests/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
 
vi.mock('react-router-dom', async (orig) => {
    const actual = await orig() as Record<string, unknown>
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    }
})

const samplePokemon: Pokemon = {
    id: 25,
    name: 'pikachu',
    base_experience: 112,
    height: 4,
    weight: 60,
    abilities: [],
    types: [
        { slot: 1, type: { name: 'electric', url: '' } },
    ],
    stats: [
        { base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } },
        { base_stat: 55, effort: 0, stat: { name: 'attack', url: '' } },
        { base_stat: 40, effort: 0, stat: { name: 'defense', url: '' } },
    ],
    sprites: {
        front_default: 'front.png',
        other: { 'official-artwork': { front_default: 'official.png' } }
    }
} as unknown as Pokemon

describe('PokemonCard', () => {
    it('renders name, id and types', () => {
        renderWithProviders(
            <MemoryRouter>
                <PokemonCard pokemon={samplePokemon} />
            </MemoryRouter>
        )

        expect(screen.getByText(/pikachu/i)).toBeInTheDocument()
        expect(screen.getByText('#25')).toBeInTheDocument()
        expect(screen.getByText(/electric/i)).toBeInTheDocument()
    })
})
