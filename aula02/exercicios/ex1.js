// Dada uma string retorne-a com a ordem dos caracteres invertida. 
// Utilize um loop for para iterar pela string do fim ao início, concatenando cada caractere a uma nova string e exibindo no final.
// ex: a string "Olá mundo!" deve retornar !odnum álO

const prompt = require("prompt-sync")();
const texto = prompt("Infome uma palavra ou frase: ");

const tamanho = texto.length;

let novaString = ""; 

for (let contador = tamanho; contador > 0; contador--){
    novaString += texto[contador-1]
}

console.log(`A palavra/frase invertida é: ${novaString}`);