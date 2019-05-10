import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>dasdsa</h1>
        {/* <Header /> */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route component={Page404} /> */}
        </Switch>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
