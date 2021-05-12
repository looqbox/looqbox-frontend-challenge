import axios from 'axios'

const URL = `https://pokeapi.co/api/v2`

export const api = axios.create({
    baseURL: URL,
})