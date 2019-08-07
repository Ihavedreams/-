import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './home';
import Reducer from './reducer';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route to="/home" component={Home} />
          <Route to="/reducer" component={Reducer} />

          <Redirect to="/reducer" />
        </Switch>
      </div>
    );
  }
}

export default Index;
