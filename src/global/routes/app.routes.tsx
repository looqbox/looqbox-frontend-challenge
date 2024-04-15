import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomeScreen } from 'screens/home/home.screen'
import { LoginScreen } from 'screens/login/Login.screen'
import { PokemonDetailsScreen } from 'screens/pokemonDetails/pokemonDetails.screen'

import { Routing } from './Routing'
import { ProtectedRoute } from 'global/helpers/ProtectedRoute'
import { useStateSelector } from 'global/hooks/useStateSelector'
import { FavoritePokemonsScreen } from 'screens/favoritePokemons/favoritePokemons.screen'

export function AppRoutes() {
  const username = useStateSelector((state) => state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Routing.HOME}
          element={
            <ProtectedRoute username={username.username}>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${Routing.POKEMON_DETAILS}/:id`}
          element={
            <ProtectedRoute username={username.username}>
              <PokemonDetailsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routing.FAVORITE_POKEMONS}
          element={
            <ProtectedRoute username={username.username}>
              <FavoritePokemonsScreen />
            </ProtectedRoute>
          }
        />
        <Route path={Routing.LOGIN} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
