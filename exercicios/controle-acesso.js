const prompt = require("prompt-sync")()

const nomeUsuario = prompt("Bem vinde ao sistema. Digite seu nome: ")
const nivelAcesso = prompt("Digite seu nível de acesso: ")
const horarioAcesso = parseInt(prompt("Digite o horário de acesso: "))

const horarioPermitidoI = 8
const horarioPermitidoF = 22

if(isNaN(horarioAcesso)) {
    console.log("Acesso negado: horário inválido.")
} else {
    
    if (horarioAcesso < horarioPermitidoI || horarioAcesso > horarioPermitidoF) {
        console.log("Acesso Negado: você está fora do horário de funcionamento do prédio.")

    } else {
        if (typeof nivelAcesso !== 'string' || !["visitante", "funcionario", "gerente", "administrador"].includes(nivelAcesso)) {
            console.log("Acesso negado: nível de acesso inválido.");
            
        } else if (nivelAcesso === "visitante" && (horarioAcesso < 9 || horarioAcesso > 18)) { 
        console.log("Acesso negado: o horário para visitantes é das 9h às 18h.")

        } else {
        console.log("Acesso permitido. Bem-vinde, " + nomeUsuario + "!")
        }
    }
}
