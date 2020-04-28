import React, { Component } from 'react';
import MyBox from './my_container';
// import Button from './Button';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './banana.png';

import './App.css';

const Child = ({ match }) => console.log('match', match) || (
  <div>
    <h3>You are here @{match.params.id}</h3>
  </div>
)


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome traveler</h2>
          </div>
          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}

export default App;
