import ReactModal from 'react-modal';
import './modal.css';
import { PokemonStats } from '../../dtos/pokemonDTO';
import { useEffect, useState } from 'react';
import { colors } from '../../constants/colors';
import { GiSwordsEmblem } from 'react-icons/gi';

import ReactApexChart from 'react-apexcharts';

interface ModalProps {
  onHandleModalToggle: () => void;
  onModalIsOpen: boolean;
  onPokemon: PokemonStats;
}

const amountMoves: number[] = [1, 2, 3, 4, 5, 6];

const Modal = ({
  onHandleModalToggle,
  onModalIsOpen,
  onPokemon,
}: ModalProps) => {
  const [pokemon, setPokemon] = useState<PokemonStats>();
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [specialAtk, setSpecialAtk] = useState(0);
  const [specialDef, setSpecialDef] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [hp, setHp] = useState(0);

  useEffect(() => {
    if (onPokemon) {
      setPokemon(onPokemon);
      setHp(onPokemon.stats[0].base_stat);
      setAtk(onPokemon.stats[1].base_stat);
      setDef(onPokemon.stats[2].base_stat);
      setSpecialAtk(onPokemon.stats[3].base_stat);
      setSpecialDef(onPokemon.stats[4].base_stat);
      setSpeed(onPokemon.stats[5].base_stat);
    }
  }, []);

  const options = {
    fill: {
      colors: ['#fff'],
    },
    dataLabels: {
      style: {
        colors: ['#000'],
      },
    },
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['ATK', 'DEF', 'S.ATK', 'S.DEF', 'SPEED', 'HP'],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
          fontSize: '15',
        },
      },
    },
  };
  const series = [
    {
      name: 'stats',
      data: [atk, def, specialAtk, specialDef, speed, hp],
    },
  ];

  return (
    <ReactModal
      isOpen={onModalIsOpen}
      ariaHideApp={false}
      className="Modal"
      overlayClassName="Overlay"
      shouldCloseOnOverlayClick={true}
      onRequestClose={onHandleModalToggle}
    >
      <div
        className="container-modal-pokemon"
        style={{ backgroundColor: '#333' }}
      >
        <div className="modal-pokemon-main-info">
          <div className="modal-pokemon-info">
            <p className="modal-pokemon-info-text-id">#{pokemon?.id}</p>
            <p className="modal-pokemon-info-text-name">{pokemon?.name}</p>
            <div className="modal-pokemon-info-text-type">
              {pokemon?.types.map(poke => (
                <p
                  key={poke.type.name}
                  style={{
                    backgroundColor: colors[poke.type.name],
                  }}
                >
                  {poke.type.name}
                </p>
              ))}
            </div>
          </div>
          <div className="modal-pokemon-image">
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          </div>
        </div>

        <div className="modal-pokemon-secondary-info">
          <div className="modal-pokemon-secondary-info-moves">
            <p className="modal-pokemon-secondary-info-moves-title">Moveset</p>
            {amountMoves.map((moves, index) => (
              <div key={moves}>
                <GiSwordsEmblem size={30} color="#fff" />
                <p>
                  {pokemon?.moves[index] ? pokemon.moves[index].move.name : ''}
                </p>
              </div>
            ))}
          </div>
          <div className="modal-pokemon-secondary-info-stats">
            <p className="modal-pokemon-secondary-info-stats-title">Stats</p>

            <ReactApexChart options={options} series={series} type="bar" />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
