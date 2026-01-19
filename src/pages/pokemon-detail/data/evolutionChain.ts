import type { EvolutionChain } from '../../../types/evolutionChainTypes'

export const extractSpecies = (
  chainNode: EvolutionChain,
  acc: { name: string; id: string }[] = []
) => {
  if (!chainNode) return acc
  acc.push({
    name: chainNode.species.name,
    id: chainNode.species.url.split('/')[6]
  })

  if (chainNode.evolves_to && chainNode.evolves_to.length > 0)
    chainNode.evolves_to.forEach((evolution: EvolutionChain) =>
      extractSpecies(evolution, acc)
    )

  return acc
}
