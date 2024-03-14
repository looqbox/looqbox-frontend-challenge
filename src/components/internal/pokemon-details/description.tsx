import { useQuery } from '@tanstack/react-query'

import { getPokemon } from '@/api/getPokemon'

type PokemonDescriptionProps = {
  value?: string
}

/**
 * => Fetching flavor texts from specific games.
 *
 * Fire Red and Emerald were my first Pokémon games, therefore I set the descriptions to start with them (and follow up with games after).
 *
 * However, a getFlavorTextEntry(8) could return different games depending on the pokémon.
 * For example: if a pokémon was introduced in Gen. IV, it would have less entries of flavor text than those introduced in Gen. I.
 *
 * Therefore, I set a fallback value using the first available flavor text, if the assigned one isn't available.
 */
export const PokemonDetailsDescription = ({
  value,
}: PokemonDescriptionProps) => {
  const flavorTextRoute = value?.split('v2')[1]

  const { data: pokemonDescription } = useQuery({
    queryKey: ['pokemonDescription', flavorTextRoute],
    queryFn: () => getPokemon(flavorTextRoute),
  })

  const getFlavorTextEntry = (index: number) => {
    const entry = pokemonDescription?.data.flavor_text_entries[index]

    return {
      flavorText:
        entry?.flavor_text ||
        pokemonDescription?.data.flavor_text_entries[0]?.flavor_text,

      version:
        entry?.version.name ||
        pokemonDescription?.data.flavor_text_entries[0]?.version.name,
    }
  }

  const pokemonFlavorText = [getFlavorTextEntry(8), getFlavorTextEntry(9)]

  return (
    <div className="flex flex-col gap-2">
      {pokemonFlavorText.map((descriptionItem) => {
        return (
          <p key={crypto.randomUUID()} className="tracking-tight">
            <strong className="capitalize">{descriptionItem.version}: </strong>
            {descriptionItem.flavorText}
          </p>
        )
      })}
    </div>
  )
}
