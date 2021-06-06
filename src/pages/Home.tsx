import { useEffect, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import { usePokemon } from '../hooks/usePokemon';
import { Loading } from '../components/Loading/index';
import { CardPokemon } from '../components/CardPokemon/index';

import styles from '../styles/pages/home.module.scss';
import globalStyles from '../styles/global.module.scss';

export function Home() {
  const [name, setName] = useState('');
  const { indexPokemons, pokemons, isLoading } = usePokemon();
  const navigate = useNavigate();

  //ativa a função que faz busca a lista de pokemnos
  useEffect(() => {
    // gera um valor aleatótio até 480 para consumir a listagem dinâmica na PokeApi
    const offSet = Math.floor(Math.random() * 480);
    indexPokemons(offSet);
  }, [indexPokemons]);

  /**
   * @description Função que previne o padrão do envio do formulário, e caso houver valor no input, redireciona para a página do pokemon específico
   * @param event - Evento do formulário
   */
  function handleSearchPokemon(event: FormEvent) {
    event.preventDefault();

    if (name.length !== 0) {
      navigate(`/pokemon/${name}`);
    } else {
      toast.error('Type a name or ID of a pokemon');
    }
  }

  if (isLoading) return <Loading />;

  return (
    <div className={globalStyles.min100vh}>
      <main className={globalStyles.container}>
        <img
          className={styles.pokemonLogo}
          src="/images/pokemon/logo.svg"
          alt="Logo of Pokemon"
        />
        <form onSubmit={handleSearchPokemon} className={styles.containerForm}>
          <div className={styles.containerInputSearch}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Look for a pokemon (Name or ID)"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>

        <ul className={styles.pokemonList}>
          {pokemons?.results.map(({ name, url }) => {
            return <CardPokemon key={name} url={url} name={name} />;
          })}
        </ul>
      </main>
    </div>
  );
}
