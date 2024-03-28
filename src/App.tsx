import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./routes/Home";
import "./styles/global.css";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Nunito, sans-serif",
        fontSize: 16,
        colorPrimary: "#312e98",
      },
      components: {
        Layout: {
          headerHeight: 72,
        },
      },
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);

export default App;
