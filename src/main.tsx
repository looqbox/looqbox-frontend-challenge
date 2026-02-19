import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import '@/styles/global.css';
import { App } from '@/App';
import { store } from '@/app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
