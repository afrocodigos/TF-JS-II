const prompt = require("prompt-sync")();

const numeroSecreto = Math.round(Math.random()* (100 - 1) + 1);
let numeroDigitado = 0;
let numeroTentativas = 0;

do {
    numeroDigitado = parseInt(prompt("Digite um número de 1 a 100: "));
    if (numeroDigitado > numeroSecreto){
        console.log("O número é menor");
        numeroTentativas++;

    }else if (numeroDigitado < numeroSecreto){
        console.log("O número é maior")
        numeroTentativas++;
    }else{
        numeroTentativas++;
        console.log("Você acertou com " + numeroTentativas + " tentativa(s) o número " + numeroSecreto);
    }
}while(numeroDigitado !== numeroSecreto)