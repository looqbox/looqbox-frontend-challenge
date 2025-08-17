import { api } from '@/lib/api'

export const pokemonService = {
    async list(offset = 0, limit = 20) {
        const data = await api<PokemonListResponse>({ endpoint: '/pokemon', data: { params: { offset, limit } } })
        return data
    },
    async get(id: number) {
        const data = await api<Pokemon>({ endpoint: `/pokemon/${id}` })
        return data
    },
    async listTypes() {
        const data = await api<PokemonTypeList>({ endpoint: '/type' })
        return data.results.filter(t => !['unknown', 'shadow'].includes(t.name))
    },
    async listByType(type: string, offset = 0, limit = 20) {
        const data = await api<PokemonByTypeResponse>({ endpoint: `/type/${type}` })
        const items = data.pokemon.map(p => p.pokemon)
        const slice = items.slice(offset, offset + limit)
        return { count: items.length, results: slice } as PokemonListResponse
    }
}
