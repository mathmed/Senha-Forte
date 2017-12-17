import React, { Component } from 'react';
import {View,Text,Image, Picker, TextInput, StyleSheet, TouchableHighlight, ScrollView} from 'react-native'




export default class Informacoes extends Component {
	render(){
		return(
			<ScrollView>
				<View>
					<View style = {{backgroundColor: 'white', margin:15, marginTop: 30, borderRadius:30, borderColor: 'black', borderWidth: 3, height: 2000}}>
						<View style = {{alignItems: 'center'}}>
							<Text style = {{color: 'black', fontWeight: 'bold', fontSize: 25  }}> Sobre o programa </Text>
						</View>
						<Text style = {styles.texto}> Programa desenvolvido por @MateusMedeiros para o projeto
						da disciplina de Metodologia do trabalho cientifico da Universidade Federal do Rio Grande do Norte com base em análise feita 
						em relação à segurança das senhas. O algoritmo utilizado para os calculos de porcentagem de força levam em consideração apenas matemática, sem considerar dados pessoais ou a chance de quebra de senha por força bruta.</Text>
						<Text style = {styles.texto}> Versão do programa: 1.0 </Text>

						<View style = {{alignItems: 'center'}}>
							<Text style = {{color: 'black', fontWeight: 'bold', fontSize: 25  }}> Sobre as porcentagens </Text>
						</View>

						<Text style = {styles.texto}> Todas porcentagens elaboradas à partir do concenso de diversos programadores em relação
						ao nível de força de uma senha. São utilizadas as seguintes porcentagens: </Text>
						<View style ={{marginTop: 10, margin:5}}>
							<Text style = {styles.textoPor}>Por letra maiuscula: 5%  </Text>
							<Text style = {styles.textoPor}>Por número: 2.5% </Text>
							<Text style = {styles.textoPor}>Por caracter especial: 4.5% </Text>
							<Text style = {styles.textoPor}>Por excesso (a partir de 8): 2.5% </Text>
							<Text style = {styles.textoPor}>Por combo (maiuscula + número + símbolo: 30%) </Text>
							<Text style = {styles.textoPor}>Por duas combinações: 18% </Text>
							<Text style = {styles.textoPor}>Penalização por conter somente números: 30% </Text>
							<Text style = {styles.textoPor}>Penalização por conter somente letras: 20% </Text>
							<Text style = {styles.textoPor}> </Text>
						</View>
						

						<View style = {{alignItems: 'center'}}>
							<Text style = {{color: 'black', fontWeight: 'bold', fontSize: 25  }}> Dicas </Text>
						</View>
						<Text style = {styles.texto}> Algumas dicas para criar e manter uma senha segura: </Text>
						<Text style = {styles.texto}>- Não utilize dados pessoais como cpf, rg, nome, data de nascimento ou time de coração em suas senhas.</Text>
						<Text style = {styles.texto}>- Utilize ao menos 8 caracteres.</Text>
						<Text style = {styles.texto}>- Utilize ao menos um caracter especial.</Text>
						<Text style = {styles.texto}>- Utilize ao menos uma letra maiúscula e uma minúscula.</Text>
						<Text style = {styles.texto}>- Utilize ao menos um número.</Text>
						<Text style = {styles.texto}>- Utilize uma senha diferente para cada site, email ou plataforma virtual.</Text>
						<Text style = {styles.texto}>- Evite o uso de palavras comuns.</Text>
						<Text style = {styles.texto}>- Altere sua senha ao menos a cada 90 dias.</Text>
						<Text style = {styles.texto}>- Não escreva sua senha em papéis de fácil acesso.</Text>
						<Text style = {styles.texto}>- Utilize esse programa para testar a força da sua senha.</Text>
						<Text style = {styles.texto}>Entendendo as dicas, crie uma senha e teste sua força nesse programa!!</Text>
						<Text style = {styles.texto}></Text>
						<Text style = {styles.texto}></Text>
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