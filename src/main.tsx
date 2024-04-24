import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import RenderRouter from "./router/router";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RenderRouter />
    </Provider>
  </React.StrictMode>
);
