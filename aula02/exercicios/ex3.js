// Jogo da adivinhação: desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. 
// Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado 
// e número de tentativas realizadas para descobrir.

const prompt = require("prompt-sync")();

const numeroAleatório = parseInt(Math.random() * (100 - 1) + 1);

let numero = "";

do {
    numero = prompt("Digite um número entre 1 e 100: ");

    if (numero > 100 || numero < 1) {
        console.log("Por favor, digite um número correto!")
    } else{
        if (numeroAleatório > numero) {
            console.log(`O número aleatório é maior que ${numero}.`)
        } else if (numeroAleatório < numero) {
            console.log(`O número aleatório é menor que ${numero}.`)
        } else {
            console.log(`Acertou! \nO número aleatório era ${numeroAleatório}.`)
        }
    }

} while (parseInt(numero) !== numeroAleatório);