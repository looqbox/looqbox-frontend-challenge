import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { PokemonContextProvider } from "./contexts/PokemonContextProvider.tsx";
import { routes } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <RouterProvider router={routes} />
    </PokemonContextProvider>
  </React.StrictMode>
);
