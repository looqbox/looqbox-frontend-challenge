import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/Router.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store/store.ts';
import { ConfigProvider } from 'antd';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Nunito, system-ui, sans-serif',
            colorPrimary: '#ff6d1b',
            colorInfo: '#ff6d1b',
            borderRadius: 12,
          },
          components: {
            Button: {
              colorPrimaryHover: '#ff833b',
              colorPrimaryActive: '#e85f14',
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </StrictMode>,
);
