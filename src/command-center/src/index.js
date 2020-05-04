import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from "./sagas/saga"
import reducer from './reducers/reducer.js';

import { Provider } from 'react-redux';



ReactDOM.render(

  <App />,

  document.getElementById('root')

);
