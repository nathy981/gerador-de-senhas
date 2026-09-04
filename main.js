const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'nathy31'
//OPEN IN WEBVIEW
let letrasmaiuculas = 'AbCDEFGHIJKLMNOPQRSTUVWXYZ'
//minusculas, numeros e simbolos

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; < checkbox.length; i ++){
   checkbox[i].onclick = geraSenha;
}

//checkbox[0] = maiusculas
//checkbox[1] =
//checkbox[2] =
//checkbox[3] =


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
//FUNÇÂO CRIAR SENHA ALEATORIA
geraSenha()

function geraSenha(){
    let senha = ''
    //LOOP - Repetições
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()* 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasmaiuculas[numeroAleatorio]
        }
        campoSenha.value = senha; 
    }

