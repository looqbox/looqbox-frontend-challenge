import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../services/api';
import { IndexPokemons, ShowPokemon } from '../ts/pokemon';

interface PokemonContextData {
  pokemons: IndexPokemons | null;
  selectedPokemon: ShowPokemon | null;
  indexPokemons: (offSet: number) => Promise<void>;
  showPokemon: (id: string) => Promise<void>;
  isLoading: boolean;
}

interface PokemonProviderData {
  children: ReactNode;
}

const PokemonContext = createContext({} as PokemonContextData);

export function PokemonProvider({ children }: PokemonProviderData) {
  const [pokemons, setPokemons] = useState<IndexPokemons | null>(null);
  const [selectedPokemon, setSelectedPokemon] =
    useState<ShowPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  /**
   * @description Função assíncrona que faz a chamda da listagem na PokeApi
   * @param offset - Número randômico até 480, para definir a partir de qual pokemon a listagem vai ocorrer
   */
  const indexPokemons = useCallback(async (offSet: number) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/pokemon?limit=20&offset=${offSet}`);
      setPokemons(response.data);
    } catch (err) {
      toast.error("It wasn't possible to list the Pokemons, try again later");
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * @description Função assíncrona que faz a chamda do pokemon específico na PokeApi
   * @param id - ID ou nome do pokemon
   */
  const showPokemon = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const response = await api.get(`/pokemon/${id}`);
        setSelectedPokemon(response.data);
      } catch (err) {
        navigate('/');
        if (err.response.status === 404) {
          toast.error("Pokemon's Name or ID invalid");
        }

        console.log(err.response);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        selectedPokemon,
        showPokemon,
        indexPokemons,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

/**
 * @description Função que retorna uma instancia do `PokemonContextData`
 * @return `PokemonContextData`
 */
export function usePokemon() {
  const pokemon = useContext(PokemonContext);

  return pokemon;
}
