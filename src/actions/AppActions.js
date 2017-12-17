import md5 from "react-native-md5";
import EventEmitter from "react-native-md5";
import firebase from 'firebase'


export const modificaSenhaTeste = senha => {
  return{
    type: 'modifica_senha_teste',
    payload: senha
  }
}

export const calcularSegurancaSenha = senha => {
  var itens = {
    bonusBase: 0,
    bonusExcesso: 0,
    bonusUpper: 0,
    bonusNum: 0,
    bonusSimbolos:0,
    bonusCombo: 0,
    porcentagem: 0,
    penaLetra: 0,
    penaNum: 0,
    corBase: '',
    corBarra:'',
    testes: 0,
    soma: 0,
    media:0
  }
  const bonusMaiusculaMax = 30;
  const bonusNumeroMax = 35;
  const bonusSimboloMax = 50;


  if(senha.length >= 6){
    for(i=0; i< senha.length; i++){
      if (senha[i].match(/[A-Z]/g)) {
      	if(itens.bonusUpper < bonusMaiusculaMax){
      	itens.bonusUpper+=5;
      	}
      }
      if (senha[i].match(/[0-9]/g)) {
      	if(itens.bonusNum < bonusNumeroMax){
      		itens.bonusNum+=2.5
      	}
      }

      if (senha[i].match(/(.*[!,@,#,$,%,^,+,-,<,>,=,;,),(,|,ç,{,},&,*,?,_,~])/)){
      	if(itens.bonusSimbolos < bonusSimboloMax){

       		itens.bonusSimbolos+=4.5;
       	}
      }
    }
  }

  if(senha.length >=8){
    itens.bonusBase = 15
    itens.bonusExcesso = (senha.length - 8)*2.5
    if(itens.bonusExcesso>50){
    	itens.bonusExcesso = 50
    }
  }

   if (itens.bonusUpper && itens.bonusNum && itens.bonusSimbolos){
        itens.bonusCombo = 30;

    }else if ((itens.bonusUpper && itens.bonusNum) || (itens.bonusUpper && itens.bonusSimbolos) || (itens.bonusNum && itens.bonusSimbolos)){
        itens.bonusCombo =18 ; 
    }



    if (senha.match(/^[\sa-z]+$/))
    {
        itens.penaLetra = -20;
    }


    if (senha.match(/^[\sA-Z]+$/))
    { 
        itens.penaLetra = -15;
    }
  

  if (senha.match(/^[\s0-9]+$/))
    { 
        itens.penaNum = -30;
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

  
  var databaseTestes = firebase.database().ref("testes");
  databaseTestes.once('value', (snapshot) => {
    itens.testes = snapshot.val();
    itens.testes++;
    databaseTestes.set(itens.testes);
  })

  var databaseSoma = firebase.database().ref("soma");
  databaseSoma.once('value', (snapshot) => {
    itens.soma = snapshot.val();
    itens.soma+= itens.porcentagem;
    databaseSoma.set(itens.soma);
      var databasePorc = firebase.database().ref("media");
      itens.media = (parseFloat(itens.soma)/parseFloat(itens.testes))
      databasePorc.set(itens.media)
  })





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
  var tamanhoTotal = parseInt(tamanho);
  var resultado = ''
  var contador = 0;
  var qtdGerada = 0;
  var res = "";
  var qtdGerar;
  var qtdRemainingTypes;
  const maiItems = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minItems = "abcdefghijklmnopqrstuvwxyz";
  const numItems = "0123456789"
  const espItems = "!@#$%&*()_?+-<>=.,;/|}{ç"

    if (tamanhoTotal >= 6 && tamanhoTotal <= 20){
      // Primeiro, verifico a quantidade total dos tipos que eu preciso gerar
      qtdRemainingTypes = boolToInt(mai) + boolToInt(min) + boolToInt(sim) + boolToInt(num);

      // Vou sempre iniciar gerando os valores nessa ordem: minúsculo, maiúsculo, número e caracteres especiais,
      // pois a probabilidade de haver maior quantidade de dígitos para cada um dos tipos vai decrescendo.
      // Portanto, o risco de sair uma senha com muitos caracteres especiais, por exemplo, diminuirá.
      if (min){
        qtdRemainingTypes--;
        qtdGerar = getQuantity (tamanhoTotal, qtdGerada, qtdRemainingTypes);
        qtdGerada = qtdGerada + qtdGerar;
        for (contador = 0; contador < qtdGerar; contador++)
          res += minItems.charAt(Math.floor(Math.random() * minItems.length));
      }

      if (mai){
        qtdRemainingTypes--;
        qtdGerar = getQuantity (tamanhoTotal, qtdGerada, qtdRemainingTypes);
        qtdGerada = qtdGerada + qtdGerar;        
        for (contador = 0; contador < qtdGerar; contador++)
          res += maiItems.charAt(Math.floor(Math.random() * maiItems.length));
      }

      if (sim){
        qtdRemainingTypes--;
        qtdGerar = getQuantity (tamanhoTotal, qtdGerada, qtdRemainingTypes);
        qtdGerada = qtdGerada + qtdGerar;        
        for (contador = 0; contador < qtdGerar; contador++)
          res += espItems.charAt(Math.floor(Math.random() * espItems.length));
      }

      if (num){
        qtdRemainingTypes--;
        qtdGerar = getQuantity (tamanhoTotal, qtdGerada, qtdRemainingTypes);
        qtdGerada = qtdGerada + qtdGerar;        
        for (contador = 0; contador < qtdGerar; contador++)
          res += numItems.charAt(Math.floor(Math.random() * numItems.length));
      }

    



  resultado = (res.shuffle());

  }else{
    resultado = 'Tamanho e/ou tipo de senha indisponível.'
  }

    return{
    type: 'gerar',
    payload: resultado
  }
}


// Essa função vai retornar quantos caracteres eu vou gerar. Ela será
// chamada pra cada um dos tipos.
// Parâmetros: 
// (1) Total dos caracteres que a senha deve conter
// (2) Quantos caracteres eu já gerei anteriormente (pra outros tipos)
// (3) Quantos tipos ainda precisarão ser gerados (por exemplo, se eu estou gerando a quantidade)
//     para os maiúsculos, mas ainda falta gerar para os caracteres especiais, por exemplo.
function getQuantity (totalSize, generatedSize, remainingTypesQuantity){
  if (remainingTypesQuantity == 0)
    return totalSize - generatedSize;    
  min = 1;
  max = totalSize - generatedSize - remainingTypesQuantity;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Pequeno helper pra diminuir a verbosidade
function boolToInt (val){
  return val ? 1 : 0;
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

