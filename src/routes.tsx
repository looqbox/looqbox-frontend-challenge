import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layout/index";
import { ErrorPage } from "@/pages/error";
import { HomePage } from "@/pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/type",
        element: <div>type</div>,
      },
    ],
  },
]);
