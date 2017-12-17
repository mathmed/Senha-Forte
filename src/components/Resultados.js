import React, { Component } from 'react';
import {View,Text,Image, Picker, TextInput, StyleSheet, TouchableHighlight, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import firebase from 'firebase'
import AnimatedBar from "react-native-animated-bar";


class Resultados extends Component {
    constructor(props){
        super(props);
        this.state = {testadas: 0, mediaFinal: 0, nivel: '', cor: ''}
    }

    componentWillMount(){
            var testes =0;
            var databaseTestes2 = firebase.database().ref("testes");
            databaseTestes2.once('value', (snapshot) => {
            testes = snapshot.val();
            this.setState({testadas:testes})
            })

            var databaseSoma2 = firebase.database().ref("soma");
            databaseSoma2.once('value', (snapshot) => {
            var soma = snapshot.val();
            var databasePorc2 = firebase.database().ref("media");
            var media = (parseFloat(soma)/parseFloat(testes))
            this.setState({mediaFinal: media})
            if(testes==0){
                this.setState({nivel: 'nula', mediaFinal: 0})
            }else{
                if(media<=20){
                    this.setState({nivel: 'muito fraca', cor: 'red'})
                }else if(media >=20 && media <=40){
                    this.setState({nivel: 'fraca', cor: '#FF8C00'})
                
                }else if (media>=40 && media <=60){
                    this.setState({nivel: 'razoavel', cor: '#F0E68C'})
                    
                }else if( media >= 60 && media <=80){
                    this.setState({nivel: 'boa', cor: '#ADD8E6'})
                    
                }else{
                    this.setState({nivel: 'excelente', cor: '#98FB98'})
                    
                }
            }
            })
            
    }

    limparDados(){
        var database = firebase.database();
        database.ref("soma").set(0);
        database.ref("media").set(0);
        database.ref("testes").set(0)
        this.setState({testadas: 0, mediaFinal: 0, nivel: 'nula', cor: 'grey'})
    }

    
	render(){
        let {testadas, mediaFinal, nivel, cor} = this.state;
        let porcentagemFinal = mediaFinal.toFixed(2);
		return(
            <ScrollView>
            <View style = {styles.principal}>
                <View style= {{height: 130, backgroundColor: '#cb6e51', borderRadius:1, borderColor: 'black', borderWidth: 3, padding:10, margin: 10, alignItems: 'center' }}>
                    <Text style = {styles.texto}> Senhas testadas até o momento: </Text>
                    <Text style = {{fontSize: 26, color: 'black', fontWeight: 'bold'}}> {testadas} </Text>
                </View>
                <View style= {{height: 150, backgroundColor: '#cb6e51', borderRadius:1, borderColor: 'black', borderWidth: 3, padding:10, margin: 10, alignItems: 'center' }}>
                    <Text style = {styles.texto}> Porcentagem média de força: </Text>
                    <Text> </Text>
                    <AnimatedBar
                    progress={porcentagemFinal/100}
                    height={40}
                    borderColor="#DDD"
                    fillColor={'white'}
                    barColor={'red'}
                    borderRadius={5}
                    borderWidth={5}
                    row



                    >
                    <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize: 20, color: 'black', fontWeight:'bold'}}> {porcentagemFinal}% </Text>
                    </View>
                    </AnimatedBar>
                </View>
                <View style= {{height: 150, backgroundColor: '#cb6e51', borderRadius:1, borderColor: 'black', borderWidth: 3, padding:10, margin: 10, alignItems: 'center' }}>

                    <Text style = {styles.texto}> A média de força de senhas é </Text>
                    <Text style = {{fontWeight: 'bold', fontSize: 26, color: cor}}> {nivel} </Text>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableHighlight underlayColor = 'transparent' onPress= {() => this.limparDados()}>
                        <View style = {styles.botao}>
                            <Image source = {require('../imgs/download.png')} />
                            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'black'}}> Limpar dados </Text>
                        </View>
                    </TouchableHighlight>

                </View>


            </View>
            </ScrollView>
		


			)
	}



}

const styles = StyleSheet.create({
    principal: {
        backgroundColor: 'snow',
        flex:1
    },
    texto: {
        fontWeight: 'bold',
        fontSize:26,
        color: 'snow'
    },
    botao: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 250,
		borderRadius:100,
		borderColor: 'black',
        borderWidth: 5,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20

	}



})



const mapStateToProps = state =>(
    {

    }
)


export default connect (mapStateToProps, {})(Resultados);