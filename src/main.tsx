import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Favorites from "./pages/favorites";

const router = createBrowserRouter([
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
