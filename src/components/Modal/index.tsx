import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';

const Modal: React.FC = () => {
  const { isOpen, closeModal, content } = React.useContext(ModalContext);
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div
            className={styles.closeModal}
            role="close"
            onClick={closeModal}
          />
          {content}
        </div>
      )}
    </>
  );
};

export default Modal;
