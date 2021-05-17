import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Pokemon } from './Pokemon';

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pokemon/:id" component={Pokemon} />
    <Route path="*" component={Home} />
  </Switch>
);
