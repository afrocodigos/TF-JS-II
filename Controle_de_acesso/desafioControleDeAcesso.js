const prompt = require("prompt-sync")();

let nome = prompt("Qual é o seu nome? ");
let nivelDeAcesso = prompt("Qual é a sua função? ").toLowerCase();;
let horarioDeAcesso = parseInt(prompt("Qual é o horario que você deseja entrar? "));

let horarioTrabalhador = horarioDeAcesso >= 8 && horarioDeAcesso <= 22;
let horarioVisita = horarioDeAcesso >= 9 && horarioDeAcesso <= 19;
let acessoGerente = nivelDeAcesso === "gerente";
let acessoFuncionario = nivelDeAcesso === "funcionario";
let acessoAdmin = nivelDeAcesso === "administrador";
let acessoVisita = nivelDeAcesso === "visitante";

if (horarioTrabalhador) {
  if (acessoGerente) {
    console.log(`Bem-vindo Sr(a) ${nome}! Acesso concedido!`);
  } else if (acessoFuncionario) {
    console.log(`Bem-vindo Sr(a) ${nome}! Acesso concedido!`);
  } else if (acessoAdmin) {
    console.log(`Bem-vindo Sr(a) ${nome}! Acesso concedido!`);
  } else if (acessoVisita) {
    if (horarioVisita) {
      console.log(`Bem-vindo Sr(a) ${nome}! Acesso concedido!`);
    } else {
      console.log(`Acesso negado. Desculpe ${nome}, verifique suas credenciais ou horário de visita.`);
    }
  } else {
    console.log(`Acesso negado. Desculpe ${nome}, Horário fora do expediente.`);
  }
} else {
  console.log(`Acesso negado. Desculpe ${nome}, Horário fora do expediente.`);
}
