import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
            </Switch>
        </BrowserRouter>
    );
}