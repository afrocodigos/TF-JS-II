
const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1 
let tentativaAdivinhar
let qtdTentativas = 0

console.log("Bem vinde ao jogo de adivinhação!")


do {
    tentativaAdivinhar = parseInt(prompt("Tente adivinhar um número que está entre 1 e 100: ")) 
    qtdTentativas++

    if (tentativaAdivinhar < 1 || tentativaAdivinhar > 100 || isNaN(tentativaAdivinhar)) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    if (tentativaAdivinhar < numeroAleatorio) {
        console.log("Não foi dessa vez. Tente um número maior na próxima!")

    } else if (tentativaAdivinhar > numeroAleatorio) {
        console.log("Não foi dessa vez. Tente um número menor na próxima!")

    } else {
        console.log(`Parabéns! Você adivinhou o número ${numeroAleatorio} em ${qtdTentativas} tentativas.`);
        break
    }

} while (true)