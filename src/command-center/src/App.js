import React, { Component } from 'react';
import StatusOverlay from './status_overlay';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



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
        <StatusOverlay />
        <Route path="/:id" component={Child} />
      </Router>
    );
  }
}

export default App;
