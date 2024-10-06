import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/Dashboard";
import { MainLayout } from "@/pages/_layouts/MainLayout";
import { NotFound } from "./pages/_errors/NotFound";
import { UnknownError } from "./pages/_errors/UnknownError";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <UnknownError />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
