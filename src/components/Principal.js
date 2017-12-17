
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native'

import AnimatedBar from "react-native-animated-bar";

import {modificaSenhaTeste, calcularSegurancaSenha} from '../actions/AppActions'
import {connect} from 'react-redux'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi, Makiko, Kohana, Kaede } from 'react-native-textinput-effects';import Rotas from '../Rotas'





class Principal extends Component {

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
						<TouchableHighlight underlayColor = 'transparent' onPress= {()=> this.props.calcularSegurancaSenha(this.props.senhaTeste)}>
							<View style = {styles.botao}>
								<Text style = {styles.titulo}> Testar </Text>

								<Image source = {require("../imgs/certo2.png")} />
							</View>
						</TouchableHighlight>
					</View>



				<View style= {{height: 250, backgroundColor: 'white', margin:7, borderRadius:10, borderColor: 'white', borderWidth: 3, marginBottom: 0 }}>
					<ScrollView>
						<View style = {{marginTop: 30}}>
  							<AnimatedBar
                  progress={this.props.porcentagem/100}
                  height={40}
                  borderColor="#DDD"
                  fillColor={this.props.corBase}
                  barColor={this.props.corBarra}
                  borderRadius={5}
                  borderWidth={5}
                  row



                 >
                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style = {{fontSize: 20, color: 'white'}}> {this.props.porcentagem}% </Text>
                </View>
                </AnimatedBar>

						</View>


						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus base: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusBase}%</Text>
						</View>

						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus por excesso: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusExcesso}%</Text>
						</View>

						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus maisculas: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusUpper}%</Text>
						</View>


						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus números: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusNum}%</Text>
						</View>
						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus símbolos: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusSimbolos}%</Text>
						</View>

						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Bonus combo: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.bonusCombo}%</Text>
						</View>
						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Somente números: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.penaNum}%</Text>
						</View>
						<View style = {{ marginTop: 5, alignItems: 'flex-start', flexDirection: 'row'}}>
							<Text style ={{fontSize:20, color: 'black'}}> Somente letras: </Text>
							<Text style ={{fontSize:20, color: 'black'}}> {this.props.penaLetra}%</Text>
						</View>
					</ScrollView>
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
		backgroundColor: '#2ecc71',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 250,
		borderRadius:100,
		borderColor: 'black',
		borderWidth: 3,
		flexDirection: 'row' 

	}

})

const mapStateToProps = state =>(
    {
    	senhaTeste: state.AppReducer.senhaTeste,
    	bonusBase: state.AppReducer.bonusBase,
		bonusExcesso: state.AppReducer.bonusExcesso,
		bonusUpper: state.AppReducer.bonusUpper,
		bonusNum: state.AppReducer.bonusNum,
		bonusSimbolos:state.AppReducer.bonusSimbolos,
		bonusCombo: state.AppReducer.bonusCombo,
		porcentagem: state.AppReducer.porcentagem,
    penaLetra: state.AppReducer.penaLetra,
    penaNum: state.AppReducer.penaNum,
    corBase: state.AppReducer.corBase,
    corBarra: state.AppReducer.corBarra

    }
)


export default connect (mapStateToProps, {modificaSenhaTeste, calcularSegurancaSenha})(Principal);





