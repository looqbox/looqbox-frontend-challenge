import React from 'react';
import Modal from './components/Modal';
import { ModalProvider } from './contexts/ModalContext';
import { Routes } from './pages/routes';

function App() {
    return (
        <ModalProvider>
            <Routes />
            <Modal />
        </ModalProvider>
    );
}

export default App;
