
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
import CheckBox from 'react-native-checkbox';
 


import {connect} from 'react-redux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi, Makiko, Kohana, Kaede } from 'react-native-textinput-effects';
import Rotas from '../Rotas'
import {modificaTamanhoSenhaGerada, alteraCheckMai, alteraCheckMin, alteraCheckSim, alteraCheckNum, gerarSenha} from '../actions/AppActions'





class Gerador extends Component {
	copiarParaClip(){
		Clipboard.setString(this.props.senhaGerada);
	}

	render(){
		return(
			<View style = {{backgroundColor: 'snow', flex:1}}>
					<View style = {{height: 80, marginTop: 10}}>
						<Kaede
							style={{ backgroundColor: '#f9f5ed' }}
							label={'Tamanho senha'}
							labelStyle={{ color: 'white', backgroundColor: '#bdc3c7' }}
							inputStyle={{ color: 'black', backgroundColor: 'white' }}
							keyboardType= 'numeric'
							onChangeText={senha => this.props.modificaTamanhoSenhaGerada(senha)}
							value = {this.props.tamanhoSenha}
						/>
					</View>

					<View style = {{flexDirection: 'row', justifyContent: 'center'}}>
			 			<View style = {{ justifyContent: 'space-between', padding: 10}}>
							<CheckBox
							  label='Maiusculas'
							  checked={this.props.checkMai}
							  onChange={ checked => this.props.alteraCheckMai(checked)}
							/>
							<CheckBox
							  label='Minusculas'
							  checked={this.props.checkMin}
							  onChange={checked => this.props.alteraCheckMin(checked)}
							/>
						</View>
						<View style = {{ justifyContent: 'center',justifyContent: 'space-between', padding:10}}>
							<CheckBox
							  label='Símbolos'
							  checked={this.props.checkSim}
							  onChange={checked => this.props.alteraCheckSim(checked)}
							/>
							<CheckBox
							  label='Números'
							  checked={this.props.checkNum}
							  onChange={checked => this.props.alteraCheckNum(checked)}
							/>
						</View>
				</View>

					<View style= {{marginTop: 10, alignItems: 'center'}}>
						<TouchableHighlight underlayColor = 'transparent' onPress= {() => this.props.gerarSenha(this.props.tamanhoSenha, this.props.checkMai, this.props.checkMin, this.props.checkSim, this.props.checkNum)}>
							<View style = {styles.botao}>
								<Text style = {styles.titulo}> Gerar! </Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style= {{height: 150, backgroundColor: 'white', margin:7, borderRadius:10, borderColor: 'black', borderWidth: 3, marginTop: 20 }}>
						<View style ={{alignItems: 'center'}}>
							<Text style = {{fontSize:20, fontWeight: 'bold', color: 'black'}}> Senha gerada: </Text>
							<Text style = {{fontSize:17, fontWeight: 'bold', color: '#16a085', marginTop: 30}}> {this.props.senhaGerada} </Text>
						</View>
					</View>
					<View style ={{backgroundColor: 'snow', alignItems: 'center', marginTop: 1}}>
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
    	tamanhoSenha: state.AppReducer.tamanhoSenha,
    	senhaGerada: state.AppReducer.senhaGerada,
		checkMai: state.AppReducer.checkMai,
		checkMin: state.AppReducer.checkMin,
		checkSim: state.AppReducer.checkSim,
		checkNum: state.AppReducer.checkNum

    }
)


export default connect (mapStateToProps, {modificaTamanhoSenhaGerada, alteraCheckMai, alteraCheckMin, alteraCheckSim, alteraCheckNum, gerarSenha})(Gerador);





