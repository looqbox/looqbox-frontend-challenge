import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';

import Pokelist from './Pokelist';
import Pokemon from './Pokemon';

import './styles/global.css';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Pokelist {...props} />}
        />
        <Route
          exact
          path='/:pokemonId'
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </>
  )
}
