import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layout/index";
import { ErrorPage } from "@/pages/error";
import { HomePage } from "@/pages/home";
import { TypePage } from "@/pages/type";

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
        path: "/type/:type",
        element: <TypePage />,
      },
    ],
  },
]);
