import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DetailsPage from "@/pages/DetailsPage";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="details/:id" element={<DetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
