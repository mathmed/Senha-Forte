const INITIAL_STATE = {
	senhaTeste : '',
	bonusBase: 0,
	bonusExcesso: 0,
	bonusUpper: 0,
	bonusNum: 0,
	bonusSimbolos:0,
	bonusCombo: 0,
	porcentagem: 0,
	penaLetra: 0, 
	penaNum: 0,
	corBase: 'grey',
	corBarra: 'grey',
	criptografada: '',
	tamanhoSenha: '',
	senhaGerada: '',
	checkMai: false,
	checkMin: false,
	checkSim: false,
	checkNum: false
	
};


export default (state = INITIAL_STATE,action) => {
	switch (action.type){
		case 'modifica_senha_teste':
			return{...state, senhaTeste: action.payload}
		case 'modifica_tamanho_senha_gerada':
			return{...state, tamanhoSenha: action.payload}
		case 'altera_props':
			return {
				...state, bonusBase: action.payload.bonusBase, bonusUpper: action.payload.bonusUpper,
				 bonusSimbolos: action.payload.bonusSimbolos, bonusNum: action.payload.bonusNum,
				 bonusExcesso: action.payload.bonusExcesso, bonusCombo: action.payload.bonusCombo,
				 porcentagem: action.payload.porcentagem, penaNum: action.payload.penaNum,
				 penaLetra: action.payload.penaLetra, corBase: action.payload.corBase,
				 corBarra: action.payload.corBarra, senhaTeste: '', senhasTestadas: action.payload.testes,
				  porcentagemMedia: action.payload.media




				  }

					  

		case 'criptografar':
			return{...state, criptografada: action.payload, senhaTeste: ''}

		case 'altera_check_mai':
			return{...state, checkMai: action.payload}
		case 'altera_check_min':
			return{...state, checkMin: action.payload}
		case 'altera_check_sim':
			return{...state, checkSim: action.payload}
		case 'altera_check_num':
			return{...state, checkNum: action.payload}
		case 'gerar':
			return{...state, senhaGerada: action.payload, tamanhoSenha: '', checkMai: false, checkMin: false, checkNum: false, checkSim: false}
		default:
			return state;
	}

}