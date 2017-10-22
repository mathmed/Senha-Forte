

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux' 

import {createStore, applyMiddleware} from 'redux'

import reducers from './src/reducers';

import ReduxThunk from 'redux-thunk'


import Rotas from './src/Rotas'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Rotas />
      </Provider>
    );
  }
}

