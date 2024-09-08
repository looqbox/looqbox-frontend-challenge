import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetails from './containers/PokemonDetails';
import Footer from './components/Footer';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh'
        }}
      >
        <AppNavigator onSearch={setSearchTerm} />
        <Box sx={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Pokedex searchTerm={searchTerm} />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}
