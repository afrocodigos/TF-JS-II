/*
Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar. 
O programa deve analisar 3 dados: nome do usuário, seu nível de acesso (visitante, funcionário, gerente ou administrador) e o horário de acesso como entrada. O programa deve:
Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
Conceder acesso ao usuário se todas as condições forem atendidas.
Negar acesso ao usuário se alguma das condições não for atendida.
Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro o porquê.
*/

//Cadastro de VISITANTE
const dadosUsuario = {
    nome: "Vanilo",
    nivel: "visitante",
    horarioAcesso: 7
}
//Cadastro de FUNCIONÁRIO
/*
const dadosUsuario = {
    nome: "Marcelo",
    nivel: "funcionario",
    horarioAcesso: 7
}
*/
//Cadastro  de ADMINISTRADOR
/*
const dadosUsuario = {
    nome: "Thiago",
    nivel: "administrador", 
    horarioAcesso: 4
}
*/
const horariofuncionameto = dadosUsuario.horarioAcesso >= 8 && dadosUsuario.horarioAcesso <= 22;
const horarioVisistas = dadosUsuario.horarioAcesso >= 9 && dadosUsuario.horarioAcesso <= 18;
const nivelAcesso = dadosUsuario.nivel;

if (horariofuncionameto) {
    if (nivelAcesso === "visitante") {
        if (horarioVisistas) {
            console.log(`Seja bem-vindo(a), ${dadosUsuario.nome}!`);
        } else {
            console.log(`Fora do horário de visitas! \nPor favor, ${dadosUsuario.nome}, volte entre 9h e 18h.`);
        }
    } else {
        console.log(`Seja bem-vindo(a) ao trabalho ${dadosUsuario.nome}!`);
    }
} else {
    if (nivelAcesso !== "administrador") {
        if (nivelAcesso === "visitante") {
            console.log(`${dadosUsuario.nome}, estamos fora do horário de funcionamento. \nPor favor, volte entre 9h e 18h!`);
        } else if (nivelAcesso === "funcionario") {
            console.log(`${dadosUsuario.nome}, você está fora da jornada de trabalho. \nPor favor, volte entre 8h e 22h!`);
        }
    } else {
        console.log(`Seja bem-vindo, ${dadosUsuario.nome}!`);
    }
}