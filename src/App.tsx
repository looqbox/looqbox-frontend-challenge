import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Pokemon } from './pages/Pokemon';

export function App() {
  // https://pokeres.bastionbot.org/images/pokemon/860.png

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
