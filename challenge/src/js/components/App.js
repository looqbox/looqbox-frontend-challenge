/* REACT */
import React, { Component } from 'react'

/* ROUTER */
import { Router, Route, Switch } from 'react-router-dom'
import history from '../router/history'
import ScrollToTop from './ScrollToTop'

/* COMPONENTS */
import Search from './Search'
import GetRandomPokemon from './GetRandomPokemon'
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'

const App = () => {
  return (
    <Router history={history}>
      <ScrollToTop>
        <div className="container">
          <Search />
          <GetRandomPokemon />

          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:name" component={Pokemon} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
