async function getPokemons(count: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
    const pokemons = await response.json()
    const results = pokemons.results
    return results
}

export default getPokemons;