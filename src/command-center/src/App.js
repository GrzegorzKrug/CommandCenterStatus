import React, { Component } from 'react';
import { connect } from "react-redux";



import StatusOverlay from './status_overlay';
import './App.css';

// import { helloSaga } from './sagas'



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <StatusOverlay />      
    );
  }
}

// const mapDispachToProps = dispatch => {
//   return {
//     onRestart: () => dispatch({ type: "RESTART", }),
//   };
// };


// export default connect(
//   null
// )(App);