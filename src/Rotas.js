

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import Principal from './components/Principal'
import Informacoes from './components/Informacoes'
import Dicas from './components/Dicas'
import TabBarX from './components/TabBarX'

export default class Rotas extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key ='root'>
          <Scene key = 'tabBar' component = {TabBarX} title = 'Senha Forte' navigationBarStyle = {{backgroundColor: 'transparent'}}
          titleStyle= {{color: 'black', fontWeight: 'bold', fontSize: 20, alignItems: 'center'}} hideNavBar initial/>


          <Scene key = 'informacoes' component = {Informacoes} title = 'Informações' navigationBarStyle = {{backgroundColor: 'transparent'}} titleStyle= {{color: 'black', fontWeight: 'bold', fontSize: 20, alignItems: 'center'}}/>
          <Scene key = 'dicas' component = {Dicas} title = 'Dicas' navigationBarStyle = {{backgroundColor: 'transparent'}} titleStyle= {{color: 'black', fontWeight: 'bold', fontSize: 20, alignItems: 'center'}}/>
        </Scene>
      </Router>
    );
  }
}

