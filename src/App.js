import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex'
import AppNavigator from './components/AppNavigator'

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  )
}
