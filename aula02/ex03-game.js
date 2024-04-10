/* 3 - Jogo da adivinhação: desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100.
Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas
realizadas para descobrir. dica: pesquise como gerar um numero aleatório usando o Math */

const prompt = require("prompt-sync")()

let guesses= 1
let numberSorted = parseInt(Math.random()*101)
let guessNumber = parseInt(prompt('Tente adivinhar o número secreto entre 1 e 100: '))

do {
    if(guessNumber > 100 || guessNumber < 1) {
        console.log(`O numero ${guessNumber} está fora do limite permitido.`)
    } else if(guessNumber > numberSorted) {
        console.log(`O numero ${guessNumber} é MAIOR que o secreto`)
    } else {
        console.log(`O numero ${guessNumber} é MENOR que o secreto`)
    }

    guessNumber = parseInt(prompt('Tente novamente! Digite um o número entre 1 e 100: '))
    guesses++

} while (guessNumber !== numberSorted);

console.log(`ACERTOU! O numero é ${numberSorted}! Foram ${guesses} tentativas`)
