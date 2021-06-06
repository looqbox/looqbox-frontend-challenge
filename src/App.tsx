import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
