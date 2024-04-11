/* CONTROLE DE ACESSO
Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar. O programa deve analisar 3 dados: nome do usuário, seu nível de acesso
(visitante, funcionário, gerente ou administrador) e o horário de acesso como entrada. O programa deve:

- Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
- Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
- Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
- Conceder acesso ao usuário se todas as condições forem atendidas.
- Negar acesso ao usuário se alguma das condições não for atendida.
- Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro o porquê. */

const userName = 'Michelle'
const accessLevel = 'visitante' // visitante, funcionário, gerente ou administrador
const buildingAccessHour = 10

const isVisitor = accessLevel === 'visitante' ? true : false
const isEmployee = ['funcionário', 'gerente', 'administrador']


if(isVisitor){
    if(buildingAccessHour >= 9 && buildingAccessHour < 18){
        console.log(`Visitante ${userName} - Horário de acesso está dentro do horário das 9h às 18h`)
    } else {
        console.log(`Visitante ${userName} - Entrada não permitida, informamos que o horário ${buildingAccessHour} está fora do nosso horário de visitas, pedimos por gentileza que retorne entre 9h às 18h.`)
    }

} else if (isEmployee.includes(accessLevel)) {
    if(buildingAccessHour >= 8 && buildingAccessHour < 22) {
        console.log(`${accessLevel.toUpperCase()} ${userName} - Horário de acesso está dentro do horário de funcionamento do prédio das 8h às 22h`)
    } else {
        console.log(`${accessLevel.toUpperCase()} ${userName} - Entrada não permitida, por favor retornar no horário de funcionamento do prédio: 8h às 22h`)
    }

} else {
    console.log(`${userName} entrada não permida, pois não encontra-se como visitante ou funcionário dentro dos horarios permitidos`)
}
