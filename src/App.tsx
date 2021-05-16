import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from './components/Modal';
import { ModalProvider } from './contexts/ModalContext';
import { PokemonProvider } from './contexts/PokemonContext';
import { Routes } from './pages/routes';

const App: React.FC = () => (
  <BrowserRouter>
    <PokemonProvider>
      <ModalProvider>
        <Routes />
        <Modal />
      </ModalProvider>
    </PokemonProvider>
  </BrowserRouter>
);

export default App;
