import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);
