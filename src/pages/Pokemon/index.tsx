import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';
import { ModalPokemon } from '../../components/ModalPokemon';

export const Pokemon = () => {
  const { toogleModal, InsertContent } = React.useContext(ModalContext);

  React.useEffect(() => InsertContent(<ModalPokemon />), []);

  return (
    <div className={styles.container}>
      Pokemon{' '}
      <button onClick={toogleModal} type="button">
        Abrir
      </button>
    </div>
  );
};
