import { pokeApi } from '@/services/api';

export async function getPokemons(limit = 10, offset = 0) {
  try {
    const response = await pokeApi.get('/pokemon', {
      params: {
        limit,
        offset,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao carregar lista: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao carregar lista de pokémons');
  }
}

export async function getPokemonByName(name: string) {
  try {
    const response = await pokeApi.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      if (
        error.message.includes('404') ||
        error.message.includes('não encontrado')
      ) {
        throw new Error(`Pokémon "${name}" não foi encontrado`);
      }
      throw new Error(`Erro ao carregar detalhes: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao carregar detalhes do pokémon');
  }
}

export async function getTypeById(type: string) {
  try {
    const response = await pokeApi.get(`/type/${type}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      // Se for 404, personaliza a mensagem
      if (
        error.message.includes('404') ||
        error.message.includes('não encontrado')
      ) {
        throw new Error(`Tipo "${type}" não foi encontrado`);
      }
      throw new Error(`Erro ao filtrar por tipo: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao filtrar pokémons por tipo');
  }
}
