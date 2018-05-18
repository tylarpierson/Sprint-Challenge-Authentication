import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Jokes from './jokes/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome User!</h1>
        </header>
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
