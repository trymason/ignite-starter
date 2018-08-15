import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
