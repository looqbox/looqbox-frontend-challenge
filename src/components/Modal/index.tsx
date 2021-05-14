import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';

const Modal = () => {
    const { isOpen, closeModal, content } = React.useContext(ModalContext);
    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                    <div
                        className={styles.closeModal}
                        onClick={closeModal}
                    ></div>
                    {content}
                </div>
            )}
        </>
    );
};

export default Modal;
