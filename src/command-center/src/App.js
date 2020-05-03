import React, { Component } from 'react';
import { connect } from "react-redux";

import StatusOverlay from './status_overlay';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StatusOverlay />
      </div>
    );
  }
}

export default connect(  
)(App);