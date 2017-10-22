import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Principal from './Principal'
import Criptografia from './Criptografia'
import Cabecario from './Cabecario'
import Gerador from './Gerador'

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';



export default class TabBarX extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Teste' },
      { key: '2', title: 'Cript' },
      { key: '3', title: 'Gerador'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <Cabecario {...props} />;

  _renderScene = SceneMap({
    '1': Principal,
    '2': Criptografia,
    '3' : Gerador
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});