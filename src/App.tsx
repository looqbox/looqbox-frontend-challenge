import {
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './styles/global.css';
import './styles/app.css';
import { api } from './utils/api';
import imageLogo from './assets/images/pokemonLogo.png';
import { Card } from './components/Card';

interface pokemon {
  name: string;
}
export function App() {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  const [pokemonName, setPokemonName] = useState('');

  async function loadPokemon() {
    const response = await api.get('pokemon?limit=6');
    setPokemons(response.data.results);
  }
  useEffect(() => {
    async function load() {
      await loadPokemon();
    }
    load();
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const namePokemon = pokemonName.toLocaleLowerCase();
      setPokemons([{ name: namePokemon }]);
    },
    [pokemonName],
  );

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header-image">
          <button onClick={loadPokemon} className="header-image-button">
            <img src={imageLogo} />
          </button>
        </div>

        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <div className="form-div-search-input">
              <input
                type="text"
                required
                className="form-search-input"
                placeholder="Digite aqui para buscar pokemons"
                onChange={e => setPokemonName(e.target.value)}
              />
            </div>

            <button type="submit" className="form-button-submit">
              buscar
            </button>
          </form>
        </div>

        <div className="container-cards">
          {pokemons.map(pokemon => (
            <Card onPokemonName={pokemon.name} key={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
