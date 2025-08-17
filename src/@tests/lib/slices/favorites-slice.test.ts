import { describe, it, expect } from 'vitest'
import reducer, { toggleFavorite, clearFavorites } from '@/lib/slices/favorites-slice'

const p1 = { id: 1, name: 'bulbasaur' } as Pokemon
const p2 = { id: 2, name: 'ivysaur' } as Pokemon

describe('favorites-slice', () => {
    it('add favorite when it doesnt exist', () => {
        const state = reducer(undefined, toggleFavorite(p1))
        expect(state.items).toHaveLength(1)
        expect(state.items[0].id).toBe(1)
    })

    it('remove favorite when it already exists', () => {
        const intermediate = reducer(undefined, toggleFavorite(p1))
        const state = reducer(intermediate, toggleFavorite(p1))
        expect(state.items).toHaveLength(0)
    })

    it('clear favorites', () => {
        const withItems = reducer({ items: [p1, p2] }, clearFavorites())
        expect(withItems.items).toHaveLength(0)
    })
})
