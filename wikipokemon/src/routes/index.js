import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:id" exact component={Pokemon} />
  </Switch>
);

export default Routes;
