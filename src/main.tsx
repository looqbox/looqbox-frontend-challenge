import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./views/Home/index.tsx";
import DetailsPage from "./views/Details/index.tsx";
import NotFoundPage from "./views/NotFound/index.tsx";
import { store } from "./store.ts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/details/:name",
    element: <DetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { fontFamily: "Montserrat" } }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
