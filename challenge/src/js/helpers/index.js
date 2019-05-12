/* HELPERS */
import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

export const slugify = (string) => string

export const search = (what, query) => axios.get(`${API_URL}/${what}/${slugify(query)}`)

export const getEvolutions = (evolutionChainObj, evolutions = [], stop) => {
  if (stop) return evolutions

  const stopRecursion =
    evolutionChainObj.evolves_to.length === 0
      ? true
      : false

  if (stopRecursion && evolutions.length === 0) return null

  return getEvolutions(
    evolutionChainObj.evolves_to[0],
    evolutions.concat(evolutionChainObj.species.name),
    stopRecursion
  )
}
