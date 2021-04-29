import { Fragment, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import './cards.css';
import { RiSwordFill } from 'react-icons/ri';
import { GiBoltShield, GiHealthPotion, GiWeight } from 'react-icons/gi';
import { colors } from '../../constants/colors';
import { FaAngleRight } from 'react-icons/fa';
import Modal from '../Modal';
import { PokemonStats } from '../../dtos/pokemonDTO';

interface PokemonProps {
  onPokemonName: string;
}

export const Card = ({ onPokemonName }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonStats>();
  const [pokemonType, setPokemonType] = useState<string>('');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const { data } = await api.get(`pokemon/${onPokemonName}`);
        setPokemon(data);
        setPokemonType(data.types[0].type.name);
      } catch (err) {
        console.log('not found');
      }
    }
    loadPokemon();
  }, [onPokemonName]);

  function toggleModal(): void {
    setModalIsOpen(!modalIsOpen);
  }

  function openModalPokemonStats() {
    toggleModal();
  }

  return (
    <Fragment>
      {pokemon && (
        <>
          <Modal
            onHandleModalToggle={toggleModal}
            onModalIsOpen={modalIsOpen}
            onPokemon={pokemon}
          />

          <div className="cards">
            <div className="header-card">
              <div className="header-card-name">
                <p
                  style={{
                    color: colors[pokemonType],
                  }}
                >
                  {' '}
                  {pokemon.name}
                </p>
              </div>
              <div className="header-card-image">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
            </div>

            <div className="all-status">
              <button
                className="all-status-button"
                style={{
                  color: colors[pokemonType],
                }}
                onClick={() => openModalPokemonStats()}
              >
                <p className="all-status-button-text">All</p>
                <FaAngleRight />
              </button>
            </div>

            <div className="card-body">
              <div className="card-body-item">
                <div
                  className="card-body-item-text"
                  style={{ color: colors[pokemonType] }}
                >
                  <p>
                    <GiHealthPotion size={35} />
                  </p>
                  <p>{pokemon.stats[0].stat.name}</p>
                  <p>{pokemon.stats[0].base_stat}</p>
                </div>
              </div>
              <div className="card-body-item">
                <div
                  className="card-body-item-text"
                  style={{ color: colors[pokemonType] }}
                >
                  <p>
                    <RiSwordFill size={35} />
                  </p>
                  <p>{pokemon.stats[1].stat.name}</p>
                  <p>{pokemon.stats[1].base_stat}</p>
                </div>
              </div>
              <div className="card-body-item">
                <div
                  className="card-body-item-text"
                  style={{ color: colors[pokemonType] }}
                >
                  <p>
                    <GiBoltShield size={35} />
                  </p>
                  <p>{pokemon.stats[2].stat.name}</p>
                  <p>{pokemon.stats[2].base_stat}</p>
                </div>
              </div>
              <div className="card-body-item">
                <div
                  className="card-body-item-text"
                  style={{ color: colors[pokemonType] }}
                >
                  <p>
                    <GiWeight size={35} />
                  </p>
                  <p>weight</p>
                  <p>{pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};
