import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import store from './store/store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#009a76',
        borderRadius: 6,
      },
    }}
  >
    <Router>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
    </Router>
    </ConfigProvider>
  </StrictMode>,
)
