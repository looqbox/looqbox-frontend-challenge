export type EvolutionChain = {
  species: {
    url: string
    name: string
  }
  evolves_to: EvolutionChain[]
}

export type EvolutionChainProps = {
  chain: EvolutionChain
}
