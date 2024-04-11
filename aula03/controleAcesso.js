const prompt = require("prompt-sync")();

let nomeUsuario = prompt("Digite o seu nome: ")
let nivelAcesso = prompt("Digite seu nível de acesso(visitante, funcionario, gerente ou administrador): ").toLocaleLowerCase()
let horarioAcesso = parseInt(prompt("Digite o horário de acesso: "))

if (horarioAcesso < 8 || horarioAcesso > 22){
    console.log("Horário fora do horário de funcionamento do prédio das 8h às 22h")
}else if(nivelAcesso === "visitante"){
    if(horarioAcesso < 9 || horarioAcesso > 18){
        console.log("Acesso não permitido, volte no horário de visita das 9h às 18h!")
    }
    else{
        console.log(`Seja bem vindo(a) ${nomeUsuario}!`)
    }
}else if(nivelAcesso === "funcionario" || nivelAcesso === "gerente" || nivelAcesso === "administrador"){
    console.log(`Seja bem vindo(a) ${nomeUsuario}!`)
}else{
    console.log("Acesso não permitido, nível de Acesso inválido!")
}