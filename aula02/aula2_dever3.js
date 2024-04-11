const prompt = require("prompt-sync")();
let cont = 0;
let numero_certo = parseInt ;
let sorteio = Math.floor(Math.random()* 100 - 1);
console.log(sorteio);
do{
    numero_certo = parseInt(prompt("Digite outro numero: "));
    if(numero_certo < sorteio)
    {
        console.log(`O numero ${numero_certo} e menor que o numero sorteado!!!`);
        cont +=1;
    }
    else
    {
        console.log(`O numero ${numero_certo} e maior que o numero sorteado!!!`);
        cont +=1;
    }
}while(numero_certo !== sorteio)
console.log(`Numero acertado o numero de tentativas foi ${cont} e o numero acertado foi ${numero_certo}`);