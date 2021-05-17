import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';

const Modal: React.FC = () => {
  const { isOpen, content } = React.useContext(ModalContext);
  return <>{isOpen && <>{content}</>}</>;
};

export default Modal;
