import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import Main from './components/Main';
import Pokemon from './components/Pokemon';

import './styles/global.css';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Main {...props} />}
        />
        <Route
          exact
          path='/:pokemonId/'
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </>
  )
}
