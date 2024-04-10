const prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome: ")
let nome2 = "";//lembrar de declarar a variavel fora do for
for( let i = nome.length-1 ; i >= 0;i--)
{  
    
    nome2 += nome[i];//atribuindo o valor dos caracter na variavel nome2 lembrar de usar o += pra incrimentar o valor 
}
console.log(nome2);
