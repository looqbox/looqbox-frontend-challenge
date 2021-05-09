import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import Main from './components/Main';
// import Pokelist from './components/Pokelist';
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
        {/* <Route
          exact
          path='/'
          component={Main}
          render={(props) => <Pokelist {...props} />}
        /> */}
        <Route
          exact
          path='/:pokemonId/'
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </>
  )
}
