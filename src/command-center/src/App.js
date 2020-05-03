import React, { Component } from 'react';
import { connect } from "react-redux";



import StatusOverlay from './status_overlay';
import './App.css';

// import { helloSaga } from './sagas'



export default class App extends Component {
  render() {
    return (
      <StatusOverlay />
    );
  }
}
