const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")

campoSenha.value = 'batata23'
let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//minusculas, numeros e simbolos'
tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;


const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onlicl = geraSenha;
      }
const botoes = document.querySelectorAll('.parametro-senha__botao')


// pega o 1°botao = -
botoes[0].onclick = diminuir;
// funçao diminuir
function diminuir(){
   // diminui de 1 em 1 e mostra na tela
   tamanhoSenha--;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
}


// BOTAO DE AUMENTAR
// pega o 1°botao = +
botoes[1].onclick = AUMENTAR;
// funçao AUMENTAR
function AUMENTAR(){
   // aumenta de 1 em 1 e mostra na tela
   tamanhoSenha++;
   numeroSenha.textContent = tamanhoSenha;
   geraSenha()
}


//FUNÇÂO DECRIAR A SENHA ALEATÒRIA
geraSenha()

function geraSenha(){
    let senha = ''
    //LOOP - Repetições 
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
    classificarSenha()
}

// Função  para classificar senha
function classificarSenha(){

    forcaSenha.classList.remove('forte' , 'media' , 'fraca' , )
     
    if(tamanhoSenha > 11){
        forcaSenha.classList.add('forte')
    }else if(tamanhoSenha < 7){
        forcaSenha.classList.add('fraca')
    }else{
        forcaSenha.classList.add('media')
    }
}