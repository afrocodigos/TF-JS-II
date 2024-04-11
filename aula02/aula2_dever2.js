const prompt = require("prompt-sync")();
let contador = 1;
const numero = prompt("Digite um número: ");
let fatorial = 1;
while (contador <= numero){
    fatorial *= contador;
    contador ++;
}
console.log(fatorial);