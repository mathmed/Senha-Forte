

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux' 
import firebase from 'firebase';

import {createStore, applyMiddleware} from 'redux'

import reducers from './src/reducers';

import ReduxThunk from 'redux-thunk'


import Rotas from './src/Rotas'

export default class App extends Component<{}> {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCQ2HoC7rWt5IH76T2fPZn4CnCcW4Nq3Zg",
      authDomain: "senha-forte.firebaseapp.com",
      databaseURL: "https://senha-forte.firebaseio.com",
      projectId: "senha-forte",
      storageBucket: "senha-forte.appspot.com",
      messagingSenderId: "91457662355"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Rotas />
      </Provider>
    );
  }
}

