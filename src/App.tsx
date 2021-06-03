import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/pokemon/:id" element={<h1>Pokemon</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
