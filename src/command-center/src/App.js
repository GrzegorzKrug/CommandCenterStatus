import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './banana.png';
import './App.css';

const Child = ({ match }) => (
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
          <div className="Content-Table">
            <ul>
              <li><Link to='/netlifx'>Netflix</Link></li>
              <li><Link to='/discord'>Discord</Link></li>
              <li><Link to='/gitlab'>Gitlab</Link></li>
              <li><Link to='/yahoo'>Yahoo</Link></li>
            </ul>
          </div>
          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}

export default App;
