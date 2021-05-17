import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokeInfo from './pages/PokeInfo';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/poke/:pokeName" exact component={PokeInfo} />
  </Switch>
);

export default Routes;
