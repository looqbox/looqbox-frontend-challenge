/* HELPERS */
import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

const slugify = (string) => string
const search = (what, query) => axios.get(`${API_URL}/${what}/${slugify(query)}`)

export default search
