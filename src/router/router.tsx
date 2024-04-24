import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import PokemonPage from "../pages/pokemon";

export default function RenderRouter() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "pokemon/:name",
      element: <PokemonPage />,
      action: async () => {
        return null;
      },
    },
  ]);
  return <RouterProvider router={router} />;
}
