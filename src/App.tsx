import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./routes/Home";
import "./styles/global.css";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Nunito",
        fontSize: 16,
        colorPrimary: "#312e98",
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
