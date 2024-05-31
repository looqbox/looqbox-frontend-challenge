// vendors
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Card, Flex, Image, Modal } from 'antd';

// store
import { RootState } from '../../store/store';

// styles
import './PokemonModal.scss';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

// types
type PokemonModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const PokemonModal: React.FC<PokemonModalProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { selectedPokemon, selectedPokemonStatus } = useSelector((state: RootState) => state.pokemon);

  if (!selectedPokemon) {
    return;
  }

  return (
    <Modal
      title={selectedPokemon.name.toUpperCase()}
      centered
      getContainer={false}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      okText="Go to detailed page"
      onOk={() => {
        setIsOpen(false);
        navigate(`/PokemonDetail/${selectedPokemon.name}`);
      }}
      cancelText="Close"
      okButtonProps={{ style: { backgroundColor: '#399c62' } }}
    >
      {selectedPokemonStatus == 'loading' && <Loading />}

      {selectedPokemonStatus == 'succeeded' && (
        <Fragment>
          <div className="pokemon-img-container">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
              alt={selectedPokemon.name}
              width={300}
              preview={false}
            />
          </div>

          <Flex>
            <Card style={{ width: '100%' }}>
              <p>
                <strong>Height:</strong> {selectedPokemon.height}
              </p>

              <p>
                <strong>Weight:</strong> {selectedPokemon.weight}
              </p>

              <p>
                <strong>Base Experience:</strong> {selectedPokemon.base_experience}
              </p>
            </Card>
          </Flex>
        </Fragment>
      )}
    </Modal>
  );
};

export default PokemonModal;
