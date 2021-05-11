import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./styles/globalStyles";
import Router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <Router />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
