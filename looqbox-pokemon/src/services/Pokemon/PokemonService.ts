import { Api } from '../ApiConfig'
import { ApiException } from '../ApiException'

export interface IPokemons {
  results: IPokemon[]
}

export interface IPokemon {
  name: string
  url: string
}

const getAll = async (): Promise<IPokemons | ApiException> => {
  try {
    const { data } = await Api().get('/pokemon?offset=0&limit=50')
    return data
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar favorecidos.')
  }
}

export const PokemonService = {
  getAll,
}
