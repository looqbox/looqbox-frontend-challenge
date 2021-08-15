import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";
import Compare from "./views/Compare";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/compare" component={Compare}/>
            </Switch>
        </BrowserRouter>
    );
}