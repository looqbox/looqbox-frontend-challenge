import axios from 'axios'

export const Api = () => {
  return axios.create({
    baseURL: 'http://pokeapi.co/api/v2',
  })
}
