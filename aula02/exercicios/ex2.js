// Crie um código que receba do usuário um número N e retorna o fatorial de N. 
// Utilize um loop while para iterar de 1 a N e multiplicar o resultado por cada número.
// ex: N = 5, o fatorial seria 5x4x3x2x1 = 120

const prompt = require("prompt-sync")();
const numero = prompt("Digite um número: ");

let resultado = 1;

let contador = 1

while (contador <= numero) {
    resultado *= contador;
    contador++;
}

console.log(`O fatorial de ${numero} é ${resultado}.`);

