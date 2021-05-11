import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import ListPage from "./pages/ListPage";
import InformationPage from "./pages/InformationPage";
import ComparePage from "./pages/ComparePage";

const src: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/information/:pokemon_id" component={InformationPage} />
        <Route path="/compare" component={ComparePage} />
      </Switch>
    </HashRouter>
  );
};

export default src;
