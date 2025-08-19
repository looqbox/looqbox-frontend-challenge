import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "./app/AppProviders";
import { AppRoutes } from "./app/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>,
);
