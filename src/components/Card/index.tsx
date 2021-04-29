import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import './cards.css';
import { RiSwordFill } from 'react-icons/ri';
import { GiBoltShield, GiHealthPotion, GiWeight } from 'react-icons/gi';
import { colors } from '../../constants/colors';

interface PokemonProps {
  url: string;
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}
interface PokemonTypes {
  type: {
    name: string;
  };
}
interface PokemonStats {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonTypes[];
  stats: Stats[];
  weight: number;
}

export const Card = ({ url }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonStats>();
  const [pokemonType, setPokemonType] = useState<string>('fire');

  useEffect(() => {
    async function loadPokemon() {
      const { data } = await api.get(url);
      setPokemon(data);
      setPokemonType(data.types[0].type.name);
    }
    loadPokemon();
  }, [url]);

  return (
    <>
      {pokemon && (
        <div className="cards" style={{}}>
          <div className="header-card">
            <div className="header-card-name">{pokemon?.name}</div>
            <div className="header-card-image">
              <img src={pokemon?.sprites.front_default} />
            </div>
          </div>

          <div>
            <p>ALL</p>
          </div>

          <div className="header-card-body">
            <div className="header-card-body-item">
              <div
                className="header-card-body-item-text"
                style={{ color: colors[pokemonType] }}
              >
                <p>
                  <GiHealthPotion size={35} />
                </p>
                <p>{pokemon?.stats[0].stat.name}</p>
                <p>{pokemon?.stats[0].base_stat}</p>
              </div>
            </div>
            <div className="header-card-body-item">
              <div
                className="header-card-body-item-text"
                style={{ color: colors[pokemonType] }}
              >
                <p>
                  <RiSwordFill size={35} />
                </p>
                <p>{pokemon?.stats[1].stat.name}</p>
                <p>{pokemon?.stats[1].base_stat}</p>
              </div>
            </div>
            <div className="header-card-body-item">
              <div
                className="header-card-body-item-text"
                style={{ color: colors[pokemonType] }}
              >
                <p>
                  <GiBoltShield size={35} />
                </p>
                <p>{pokemon?.stats[2].stat.name}</p>
                <p>{pokemon?.stats[2].base_stat}</p>
              </div>
            </div>
            <div className="header-card-body-item">
              <div
                className="header-card-body-item-text"
                style={{ color: colors[pokemonType] }}
              >
                <p>
                  <GiWeight size={35} />
                </p>
                <p>weight</p>
                <p>{pokemon?.weight}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
