import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import HomeScreen from "../screens/HomeScreen";
import LocationsScreen from "../screens/LocationsScreen";
import PokemonsScreen from "../screens/PokemonsScreen";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
      {
        path: "pokemons",
        element: <PokemonsScreen />,
      },
      {
        path: "locations",
        element: <LocationsScreen />,
      },
    ],
  },
]);
