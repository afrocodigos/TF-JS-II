// instalar: npm install prompt-sync
const prompt = require("prompt-sync")();

// const nomeUsuario = prompt("Qual o seu nome? ");

// for (let contador = 0; contador < 10; contador++) {
//   console.log(nomeUsuario);
// }

/*
const contador = 0; // contador
contador < 10; // enquanto o contador for menor que 10
contador++; // some mais um ao contador
*/

// let numero1 = parseInt(prompt("Digite um número"));
// while (numero1 !== 10) {
//   console.log("ops");
//   numero1 = parseInt(prompt("Digite um número"));
// }

// let numero = prompt("Digite um número");

// while (numero !== "10") {
//   console.log("ops");
//   numero = prompt("Digite um número");
// }

// do {
//   numero = prompt("Digite um número");
// } while (numero !== "10");




// Jogo da adivinhação: desenvolva um jogo que permita que o usuário 
// tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, 
// o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, 
// ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.

const prompt = require('prompt-sync')();

let numeroAleatorio =  Math.floor(Math.random() *100) +1;
let tentativas = 0;
let palpite 
console.log(numeroAleatorio);

do {
    palpite = parseInt(prompt('Tente adivinhar o número secreto entre 1 e 100: '));
    
    if(palpite < numeroAleatorio){

        console.log("Tente novamente. O número secreto é maior. ") ;
    
    } else if (palpite > numeroAleatorio){
        console.log("Tente novamente. O número secreto é menor." );
    }
    tentativas++

}while (palpite !== numeroAleatorio);
console.log(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas`)
