/* REACT */
import React, { Component } from 'react'

/* ROUTER */
import { Router, Route, Switch } from 'react-router-dom'
import history from '../router/history'

/* COMPONENTS */
import Search from './Search'
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          {/* HEADER */}

          <Search />

          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:name" component={Pokemon} />
          </Switch>

          {/* FOOTER */}
        </>
      </Router>
    )
  }
}

export default App
