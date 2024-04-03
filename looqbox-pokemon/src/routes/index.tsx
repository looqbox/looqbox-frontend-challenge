import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import DefaultTemplate from "../templates/Default";

export function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultTemplate>
                <Home />
              </DefaultTemplate>
            }
          />
          <Route
            path="/pokemon/:name?"
            element={
              <DefaultTemplate>
                <Pokemon />
              </DefaultTemplate>
            }
          />
          s
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
