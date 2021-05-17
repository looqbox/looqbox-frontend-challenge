import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { PokemonContext } from '../../contexts/PokemonContext';
import icon_back from '../../assets/icons/back.svg';
import styles from './styles.module.css';
import { useHistory } from 'react-router';

interface IProps {
  clear?: boolean;
}
const Image: React.FC<IProps> = ({ clear }) => {
  const { closeModal, isOpen } = React.useContext(ModalContext);
  const { cleanPokemonSelected } = React.useContext(PokemonContext);
  const navigate = useHistory();

  function closeModalClick() {
    closeModal();
    clear && cleanPokemonSelected();
    if (!isOpen) {
      navigate.push('/');
    }
  }
  return (
    <button className={styles.close_modal_btn} onClick={closeModalClick}>
      <img src={icon_back} alt="back" />
    </button>
  );
};

export default Image;
