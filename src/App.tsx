import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/app.css';
import { api } from './utils/api';
import imageLogo from './assets/images/pokemonLogo.png';
import { Card } from './components/Card';

interface pokemon {
  name: string;
  url: string;
}
export function App() {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get('pokemon?limit=5');
      setPokemons(response.data.results);
    }
    loadPokemon();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        {/* DIV DA IMAGEM */}
        <div className="header-image">
          <img src={imageLogo} />
        </div>

        {/* DIV DO FORMULARIO */}
        <div>
          <form>
            <div className="form-div-search-input">
              <input type="text" className="form-search-input" />
            </div>
            <button type="submit">enviar</button>
          </form>
        </div>

        {/* DIV DOS CARDS */}
        <div className="container-cards">
          {pokemons.map(pokemon => (
            <Card url={pokemon.url} key={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
