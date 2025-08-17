import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { pokemonService } from '@/services/pokemon'
import { QueryKeys } from '@/constants/query-keys'

type PokemonListData = {
    listResponse: PokemonListResponse;
    pokemonDetails: Pokemon[]
}

export function useFilteredPokemonList(page: number, pageSize: number, filters: PokemonFilters) {
    const type = filters.type?.toLowerCase() || undefined
    const baseQuery = useQuery<PokemonListData>({
        queryKey: [type ? QueryKeys.LIST_BY_TYPE : QueryKeys.POKEMON_LIST, type, page, pageSize],
        queryFn: async () => {
            const offset = (page - 1) * pageSize
            const listResponse = type
                ? await pokemonService.listByType(type, offset, pageSize)
                : await pokemonService.list(offset, pageSize)
            const pokemonDetails = await Promise.all(
                listResponse.results.map(async (p: PokemonListItem) => {
                    const id = p.url.split('/').slice(-2, -1)[0]
                    return pokemonService.get(+id)
                })
            )
            return { listResponse, pokemonDetails }
        }
    })

    const filtered = useMemo(() => {
        if (!baseQuery.data) return undefined
        const items = baseQuery.data.pokemonDetails.filter((pk: Pokemon) => {
            if (filters.minHeight && pk.height < filters.minHeight) return false
            if (filters.maxHeight && pk.height > filters.maxHeight) return false
            if (filters.minWeight && pk.weight < filters.minWeight) return false
            if (filters.maxWeight && pk.weight > filters.maxWeight) return false
            return true
        })
        return { ...baseQuery.data, pokemonDetails: items, listResponse: { ...baseQuery.data.listResponse, results: baseQuery.data.listResponse.results } }
    }, [baseQuery.data, filters])

    return { ...baseQuery, data: filtered ?? baseQuery.data }
}

export const usePokemonTypes = () => {
    return useQuery({
        queryKey: [QueryKeys.TYPES],
        queryFn: pokemonService.listTypes
    })
} 