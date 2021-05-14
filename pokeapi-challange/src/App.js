import React  from 'react';
import { Home } from "./pages/Home";
import './styles/index.scss';

import Context from './context'

function App() {
  return (
    <>
        <Context>
          <Home/>
        </Context>
    </>
  );
}

export default App;
