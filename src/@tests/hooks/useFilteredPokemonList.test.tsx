import { describe, it, expect, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useFilteredPokemonList } from '@/hooks/queries'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

vi.mock('@/services/pokemon', () => {
    return {
        pokemonService: {
            list: vi.fn(async () => ({
                count: 2,
                results: [
                    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
                ]
            })),
            listByType: vi.fn(),
            get: vi.fn(async (id: number) => ({
                id,
                name: id === 1 ? 'bulbasaur' : 'ivysaur',
                height: 7,
                weight: 69,
                base_experience: 0,
                abilities: [],
                stats: [
                    { base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } },
                ],
                types: [{ slot: 1, type: { name: 'grass', url: '' } }],
                sprites: { front_default: '', other: { 'official-artwork': { front_default: '' } } }
            }))
        }
    }
})

function wrapper({ children }: { children: React.ReactNode }) {
    const client = new QueryClient()
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

describe('useFilteredPokemonList', () => {
    it('loads basic list of pokemons', async () => {
        const { result } = renderHook(() => useFilteredPokemonList(1, 20, {}), { wrapper })
        await waitFor(() => expect(result.current.data?.pokemonDetails.length).toBe(2))
    })
})
