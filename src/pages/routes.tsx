import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Pokemon } from './Pokemon';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pokemon/:name" component={Pokemon} />
                <Route path="*" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};
