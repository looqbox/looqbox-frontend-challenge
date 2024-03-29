import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./routes/Home";
import "./styles/global.css";
import Character from "./routes/Character";
import NotFound from "./routes/NotFound";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Nunito, sans-serif",
        fontSize: 16,
        colorPrimary: "#312e98",
      },
      components: {
        Breadcrumb: {
          lastItemColor: "#312e98",
        },
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
          <Route element={<Character />} path="/pokemon/:character" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);

export default App;
