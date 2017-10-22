import React, { Component } from 'react';
import {View,Text,Image, Picker, TextInput, StyleSheet, TouchableHighlight, ScrollView} from 'react-native'




export default class Informacoes extends Component {
	render(){
		return(
			<ScrollView>
				<View>
					<View style = {{backgroundColor: 'white', margin:15, marginTop: 30, borderRadius:30, borderColor: 'black', borderWidth: 3, height: 1000}}>
						<View style = {{alignItems: 'center'}}>
							<Text style = {{color: 'black', fontWeight: 'bold', fontSize: 25  }}> Sobre o programa </Text>
						</View>
						<Text style = {styles.texto}> Programa desenvolvido por @MateusMedeiros, @LaioAlencar, @DeivysonCesar para o projeto
						da disciplina de Metodologia do trabalho cientifico da Universidade Federal do Rio Grande do Norte com base em análise feita 
						em relação à segurança das senhas. O algoritmo utilizado para os calculos de porcentagem de força levam em consideração apenas matemática, sem considerar dados pessoais ou a chance de quebra de senha por força bruta.</Text>
						<Text style = {styles.texto}> Versão do programa: 1.0 </Text>

						<View style = {{alignItems: 'center'}}>
							<Text style = {{color: 'black', fontWeight: 'bold', fontSize: 25  }}> Sobre as porcentagens </Text>
						</View>

						<Text style = {styles.texto}> Todas porcentagens elaboradas à partir do concenso de diversos programadores em relação
						ao nível de força de uma senha. São utilizadas as seguintes porcentagens: </Text>
						<View style ={{marginTop: 10, margin:5}}>
							<Text style = {styles.textoPor}>Por letra maiuscula: 4,5%  </Text>
							<Text style = {styles.textoPor}>Por número: 3% </Text>
							<Text style = {styles.textoPor}>Por caracter especial: 5% </Text>
							<Text style = {styles.textoPor}>Por excesso (a partir de 8): 3% </Text>
							<Text style = {styles.textoPor}>Por combo (maiuscula + número + símbolo: 25%) </Text>
							<Text style = {styles.textoPor}>Por duas combinações: 15% </Text>
							<Text style = {styles.textoPor}>Penalização por conter somente números: 25% </Text>
							<Text style = {styles.textoPor}>Penalização por conter somente letras: 10% </Text>
							<Text style = {styles.textoPor}> </Text>
						</View>


					</View>
				</View>
			</ScrollView>




			)
	}



}

const styles = StyleSheet.create({
	texto:{
		color: 'black',
		fontSize: 20,
		margin: 10
	},

	textoPor: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold'
	}



})