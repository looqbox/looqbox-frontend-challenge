import React from 'react';
import Modal from './components/Modal';
import { ModalProvider } from './contexts/ModalContext';
import { PokemonProvider } from './contexts/PokemonContext';
import { Routes } from './pages/routes';

const App: React.FC = () => {
    return (
        <PokemonProvider>
            <ModalProvider>
                <Routes />
                <Modal />
            </ModalProvider>
        </PokemonProvider>
    );
};

export default App;
