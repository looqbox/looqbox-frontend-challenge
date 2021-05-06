import { Route, Switch } from 'react-router-dom';
import Pokelist from './Pokelist';
import Pokemon from './Pokemon';

function App() {
  return (
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
  )
}

export default App;
