import React, {Component} from 'react'
import {View,Text,StatusBar,Image, TouchableHighlight} from 'react-native'
import {TabBar} from 'react-native-tab-view'
import {connect }from 'react-redux'
import { Actions } from 'react-native-router-flux';


export default class Cabecario extends Component{
	render(){
		return(
				<View style = {{backgroundColor:'#34495e', elevation: 4}}>
					<StatusBar backgroundColor = '#34495e'/>

					<View style = {{}}>
						<View style = {{height: 50,flexDirection: 'row', alignItems: 'center'}}>
							<Text style = {{fontSize: 22, fontWeight: 'bold', color : '#BAFFA8' , fontFamily:'serif'}}> Senha forte </Text>
							<TouchableHighlight underlayColor = 'transparent' onPress= {()=> Actions.informacoes()}>
								<Text style = {{fontSize: 20, color : 'white', marginLeft:20, fontWeight: 'bold'}}>Sobre</Text>
							</TouchableHighlight>

							<TouchableHighlight underlayColor = 'transparent' onPress= {()=> Actions.resultados()}>
								<Text style = {{fontSize: 20, color : 'white', marginLeft:20, fontWeight: 'bold'}}>Estatísticas</Text>
							</TouchableHighlight>
						</View>
					</View>

					<TabBar {...this.props}  indicatorStyle={{ backgroundColor: 'white' }} pressColor = 'white' style = {{backgroundColor:'#34495e', elevation: 0}} />
				</View>



	)

			

	}
}

