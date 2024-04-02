import React from 'react';
import RoutesApp from './routes';
import { Provider } from 'react-redux';
import { store } from './redux';

const App: React.FC = () => {
  return (
      <>
        <Provider store={store}>
          <RoutesApp />
        </Provider>
      </>
  );
}

export default App;
