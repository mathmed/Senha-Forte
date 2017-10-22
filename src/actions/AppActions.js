import md5 from "react-native-md5";
import EventEmitter from "react-native-md5";


export const modificaSenhaTeste = senha => {
	return{
		type: 'modifica_senha_teste',
		payload: senha
	}
}

export const calcularSegurancaSenha = senha => {
	var itens = {	bonusBase: 0,
	bonusExcesso: 0,
	bonusUpper: 0,
	bonusNum: 0,
	bonusSimbolos:0,
	bonusCombo: 0,
	porcentagem: 0,
	bonusBase:0,
	penaLetra: 0,
	penaNum: 0,
	corBase: '',
	corBarra:''
	}

	if(senha.length >= 6){
		for(i=0; i< senha.length; i++){
			if (senha[i].match(/[A-Z]/g)) {itens.bonusUpper+=4.5;}
        	if (senha[i].match(/[0-9]/g)) {itens.bonusNum+=3;}
        	if (senha[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {itens.bonusSimbolos+=5;}
		}
	}

	if(senha.length >=8){
		itens.bonusBase = 15
		itens.bonusExcesso = (senha.length - 8)*3
	}

   if (itens.bonusUpper && itens.bonusNum && itens.bonusSimbolos){
        itens.bonusCombo = 25;

    }else if ((itens.bonusUpper && itens.bonusNum) || (itens.bonusUpper && itens.bonusSimbolos) || (itens.bonusNum && itens.bonusSimbolos)){
        itens.bonusCombo =15 ; 
    }



    if (senha.match(/^[\sa-z]+$/))
    { 
        itens.penaLetra = -10;
    }
 	

 	if (senha.match(/^[\s0-9]+$/))
    { 
        itens.penaNum = -25;
    }
    itens.porcentagem= ((itens.bonusExcesso)+itens.bonusUpper + itens.bonusNum + itens.bonusSimbolos + itens.bonusBase + itens.bonusCombo + itens.penaNum + itens.penaLetra)
    if(itens.porcentagem<=20){
    	itens.corBase= 'tomato'
    	itens.corBarra = 'red'
    }else if(itens.porcentagem <=40){
    	itens.corBase= '#FFA500'
    	itens.corBarra= '#FF4500'
    }else if(itens.porcentagem <=60){
    	itens.corBase= '#F0E68C'
    	itens.corBarra= '#FFD700'
    }else if(itens.porcentagem <=80){
    	itens.corBase= '#ADD8E6'
    	itens.corBarra= '#00BFFF'
    }else{
    	itens.corBase= '#98FB98'
    	itens.corBarra= '#008000'
    }
	if(itens.porcentagem< 0){
		itens.porcentagem=0
	}
	if(itens.porcentagem >=100){
		itens.porcentagem =99
	}
	return{
		type : 'altera_props',
		payload: itens
	}

}

export const criptografarSenha = senha => {
        let hex_md5v = md5.hex_md5(senha);


	return {type : 'criptografar', payload: hex_md5v}
}



export const modificaTamanhoSenhaGerada = senha => {
	return{
		type: 'modifica_tamanho_senha_gerada',
		payload: senha
	}
}


export const alteraCheckMai = (estado) => {
	let status = !estado
	return{
		type: 'altera_check_mai',
		payload: status
	}
}
export const alteraCheckMin = (estado) => {
	let status = !estado
	return{
		type: 'altera_check_min',
		payload: status
	}
}
export const alteraCheckSim = (estado) => {
	let status = !estado
	return{
		type: 'altera_check_sim',
		payload: status
	}
}
export const alteraCheckNum = (estado) => {
	let status = !estado
	return{
		type: 'altera_check_num',
		payload: status
	}
}


export const gerarSenha = (tamanho, mai, min, sim, num) => {
	var resultado = ''
	tamanho = parseInt(tamanho);
	var contador =0;
	const arrayMai = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z'];
	const arrayMin = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x' ,'w', 'y', 'z' ];
	const arrayNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const arraySim = ['!','@','#','$','%','^','&','*','?','_','~']
	var arrayFim = []
	if((tamanho>=6 && tamanho <=20) && (mai==true || min == true || sim == true || num == true)){
		while(tamanho>0){

			if(mai == true){
				arrayFim[contador] = arrayMai[Math.floor(Math.random()*26)]
				contador++;
				tamanho--;
			}


			if(min == true){
				arrayFim[contador] = arrayMin[Math.floor(Math.random()*26)]
				contador++;
				tamanho--;
			}

			if(num == true){
				arrayFim[contador] = arrayNum[Math.floor(Math.random()*10)]
				contador++;
				tamanho--;

			}


			if(sim ==true){
				arrayFim[contador] = arraySim[Math.floor(Math.random()*9)]
				contador++;
				tamanho--;
			}

		}
		for(var i = arrayFim.length-1; i>0; i--){
			var j = Math.floor(Math.random()*(i+1));
			[arrayFim[i],arrayFim[j]]=[arrayFim[j], arrayFim[i]];
		}
		resultado = arrayFim.join("")

	}else{
		resultado = 'Tamanho e/ou tipo de senha indisponível.'
	}
	
	return{
		type: 'gerar',
		payload: resultado
	}
}