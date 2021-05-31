import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Cabecalho } from "./components/Cabecalho";
import { AboutScreen } from "./screens/About";
import { HomeScreen } from "./screens/Home";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "10px" }}>
        <Cabecalho />
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
