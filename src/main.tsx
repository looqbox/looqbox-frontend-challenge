import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./state/store";
import PokemonPage from "./pages/pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:name",
    element: <PokemonPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
