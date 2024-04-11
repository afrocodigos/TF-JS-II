// Desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, 
// o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas 
// realizadas para descobrir.
// dica: pesquise como gerar um numero aleatório usando o Math



const prompt = require("prompt-sync")();

let min = 1;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

let entradaDoUsuario = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
let tentativas = 0;



while(true){
    let entradaDoUsuario = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
    tentativas++;

    if(numeroAleatorio === entradaDoUsuario){
        console.log(`Acertou, "Você acertou na ${tentativas}"º tentativa`);
        break;
    } else if (numeroAleatorio > entradaDoUsuario){
        console.log("Chutou baixo!");
    } else if (numeroAleatorio < entradaDoUsuario){
        console.log("Chutou alto");
    }
}