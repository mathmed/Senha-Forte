
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Clipboard
} from 'react-native'

import AnimatedBar from "react-native-animated-bar";

import {modificaSenhaTeste, criptografarSenha} from '../actions/AppActions'
import {connect} from 'react-redux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi, Makiko, Kohana, Kaede } from 'react-native-textinput-effects';import Rotas from '../Rotas'





class Principal extends Component {
	copiarParaClip(){
		Clipboard.setString(this.props.criptografada);
	}

	render(){
		return(
		<View style = {{backgroundColor: 'snow', flex:1}}>
			<View style = {{height: 80, marginTop: 10}}>
				<Kaede
				    style={{ backgroundColor: '#f9f5ed' }}
				    label={'Senha'}
				    labelStyle={{ color: 'white', backgroundColor: '#bdc3c7' }}
				    inputStyle={{ color: 'black', backgroundColor: 'white' }}
				    value = {this.props.senhaTeste}
				    onChangeText={senha => this.props.modificaSenhaTeste(senha)}
				    secureTextEntry = {true}
				  />
			</View>


					<View style= {{marginBottom: 10, alignItems: 'center'}}>
						<TouchableHighlight underlayColor = 'transparent' onPress= {()=> this.props.criptografarSenha(this.props.senhaTeste)}>
							<View style = {styles.botao}>
								<Text style = {{fontSize:15, fontWeight: 'bold', color: 'snow'}}> Criptografar em MD5! </Text>
							</View>
						</TouchableHighlight>
					</View>



				<View style= {{height: 150, backgroundColor: 'white', margin:7, borderRadius:10, borderColor: 'black', borderWidth: 3, marginBottom: 0 }}>
					<View style ={{alignItems: 'center'}}>
						<Text style = {{fontSize:20, fontWeight: 'bold', color: 'black'}}> Senha criptografada: </Text>
						<Text style = {{fontSize:17, fontWeight: 'bold', color: '#16a085', marginTop: 30}}> {this.props.criptografada} </Text>
					</View>
				</View>
				<View style ={{backgroundColor: 'snow', alignItems: 'center', marginTop: 20}}>
					<TouchableHighlight underlayColor = 'transparent' onPress = {() => this.copiarParaClip()}>
						<Image source = { require('../imgs/eae.png')}>
						</Image>
					</TouchableHighlight>
				</View>
		</View>


			)
	}
}




const styles = StyleSheet.create({
	titulo:{
		fontSize:25,
		color: 'snow',
		fontWeight: 'bold'

	},
	viewTitulo: {
		alignItems: 'center',
		marginTop: 30
	},
	botao: {
		backgroundColor: '#1abc9c',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 250,
		borderRadius:100,
		borderColor: 'black',
		borderWidth: 3 

	}

})

const mapStateToProps = state =>(
    {
    	senhaTeste: state.AppReducer.senhaTeste,
    	criptografada: state.AppReducer.criptografada

    }
)


export default connect (mapStateToProps, {modificaSenhaTeste, criptografarSenha})(Principal);





