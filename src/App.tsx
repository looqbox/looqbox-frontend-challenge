import { FormEvent, Fragment, useCallback, useEffect, useState } from 'react';
import './styles/global.css';
import './styles/app.css';
import { api } from './utils/api';
import imageLogo from './assets/images/pokemonLogo.png';
import notfound from './assets/images/notfound.png';

import { Card } from './components/Card';
import { Loader } from './components/Loader';
import { PokemonStats } from './dtos/pokemonDTO';
import { MoreButton } from './components/MoreButton';

import { FaArrowUp } from 'react-icons/fa';

interface pokemons {
  name: string;
}
export function App() {
  const [pokemon, setPokemon] = useState<PokemonStats[]>([]);

  const [pokemonName, setPokemonName] = useState('');

  const [loading, setLoading] = useState(false);

  const [offset, setOffset] = useState(0);

  const [error, setError] = useState(false);

  const [showScroll, setShowScroll] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setLoading(true);
      setError(false);
      try {
        event.preventDefault();
        const namePokemon = pokemonName.toLocaleLowerCase();
        const response = await api.get(`/pokemon/${namePokemon}`);
        setPokemon([response.data]);
        setError(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    },
    [pokemonName],
  );

  const loadMore = async () => {
    setOffset(oldValue => oldValue + 6);
  };

  const reload = () => {
    if (offset !== 0) {
      setPokemon([]);
      setOffset(0);
      setError(false);
    } else if (pokemon.length === 1) {
      setPokemon([]);
      setOffset(0);
      loadPokemon();
    }
    setError(false);
    setShowScroll(false);
  };

  async function loadPokemon() {
    setLoading(true);
    try {
      const response = await api.get(`pokemon?limit=6&offset=${offset}`);

      const arrayPokemon: PokemonStats[] = response.data.results.map(
        async (pokemon: pokemons) => {
          const response = await api.get<PokemonStats>(
            `pokemon/${pokemon.name}`,
          );

          return response.data;
        },
      );
      const result = await Promise.all(arrayPokemon);

      setPokemon(oldValues => {
        return [...oldValues, ...result];
      });
      setLoading(false);
    } catch (err) {
      console.log('not found');
      setLoading(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollToTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollToTop);

    return function cleanupListener() {
      window.removeEventListener('scroll', checkScrollToTop);
    };
  }, [showScroll]);

  useEffect(() => {
    loadPokemon();
  }, [offset]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header-div-image">
          <button onClick={reload} className="header-image-button">
            <img src={imageLogo} className="header-image" />
          </button>
        </div>
        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <div className="form-div-search-input">
              <input
                type="text"
                required
                className="form-search-input"
                placeholder="pequisar pokemons"
                onChange={e => setPokemonName(e.target.value)}
              />
            </div>

            <button type="submit" className="form-button-submit">
              buscar
            </button>
          </form>
        </div>

        {error ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img src={notfound} alt="notfound" width="50%" />
          </div>
        ) : (
          <Fragment>
            <div className="container-cards">
              {pokemon?.map(pokemon => (
                <Card onPokemon={pokemon} key={pokemon.name} />
              ))}
            </div>
            {!loading && pokemon.length !== 1 && (
              <MoreButton onLoadMore={loadMore} />
            )}
            {loading && <Loader />}
          </Fragment>
        )}
      </div>
      {showScroll && (
        <div className="up-to-top" onClick={scrollToTop}>
          <FaArrowUp size={30} color="#FFCC03" />
        </div>
      )}
    </div>
  );
}
