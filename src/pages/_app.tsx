import "@styles/globals.css";
import { store, persistor } from '@/app/store';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd/lib";
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E0282E",
          colorBgContainer: "#f0f2f5"
        },
        components: {
          Layout: {
            headerColor: "#E0282E"
          }
        }
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ConfigProvider>

  );
}

export default MyApp;