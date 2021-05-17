import React from 'react';
import { useHistory } from 'react-router';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';

interface IProps {
  variations: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
  pokemon_select: string;
}
const ModalVariations: React.FC<IProps> = ({ variations, pokemon_select }) => {
  const { closeModal } = React.useContext(ModalContext);
  function closeModalBackground(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  return (
    <div className={styles.container} onClick={closeModalBackground}>
      <div className={styles.content}>
        {variations.map(item => (
          <button
            type="button"
            className={`${styles.container_variation} ${
              item.pokemon.name === pokemon_select && styles.selected
            }`}
            key={item.pokemon.name}
          >
            {item.pokemon.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModalVariations;
