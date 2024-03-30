import "@styles/globals.css";
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd/lib";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E0282E",
          colorBgContainer: "#f0f2f5"
        }
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ConfigProvider>

  );
}

export default MyApp;