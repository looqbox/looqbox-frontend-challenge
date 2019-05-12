/* HELPERS */
import axios from 'axios'

/* SLUGIFY (Return a slug based on a string) */
export const slugify = (string = '') =>
  string
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')

/* UNSLUGIFY (Return a formatted string based on a slug) */
export const unslugify = (slug) =>
  slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join(' ')

/* SEARCH / GET RANDOM (Wrapper to make requests to PokéApi) */
const API_URL = 'https://pokeapi.co/api/v2'
export const search = (what, query) => axios.get(`${API_URL}/${what}/${slugify(query)}`)
export const getRandom = (offset) => axios.get(`${API_URL}/pokemon/?offset=${offset}`)
/* Generate random integer number between range (inclusive) */
export const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* GET EVOLUTIONS (Recursive method that returns an array with the Pokémon evolution chain) */
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
