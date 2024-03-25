async function getPokemonsAbilities(url: string) {
    const response = await fetch(url)
    const ability = await response.json()
    return await ability
}

export default getPokemonsAbilities;