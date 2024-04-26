import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div style={{ padding: 24, height: '100vh' }}>
      <Outlet />
    </div>
  );
}

export default App;
