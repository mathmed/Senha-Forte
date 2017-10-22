import React, { Component } from 'react';
import {View,Text,Image, Picker, TextInput, StyleSheet, TouchableHighlight, ScrollView} from 'react-native'




export default class Dicas extends Component {
	render(){
		return(
			<ScrollView>
				<View>
					<View style = {{backgroundColor: 'white', margin:15, marginTop: 30, borderRadius:30, borderColor: 'black', borderWidth: 3, height: 1000}}>
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