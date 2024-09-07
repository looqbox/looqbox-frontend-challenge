import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetails from './containers/PokemonDetails';
import Footer from './components/Footer';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <AppNavigator onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Pokedex searchTerm={searchTerm} />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
