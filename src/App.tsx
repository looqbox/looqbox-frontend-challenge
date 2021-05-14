import React from 'react';
import Modal from './components/Modal';
import { ModalProvider } from './contexts/ModalContext';
import { Routes } from './pages/routes';

const App: React.FC = () => {
    return (
        <ModalProvider>
            <Routes />
            <Modal />
        </ModalProvider>
    );
};

export default App;
