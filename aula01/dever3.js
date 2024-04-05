let horario_acesso = 12;
let nivel_acesso = "visitante";


if (horario_acesso >= 8 && horario_acesso <= 22  )
{
    if(horario_acesso >= 9 && horario_acesso <= 18 && nivel_acesso === "visitante")
    {
        console.log(`Acesso permitido ${nivel_acesso}`);
    }
    else if (horario_acesso < 9){
        console.log(`Fora do horario de acesso ${horario_acesso}`);
    }
    else if(nivel_acesso !== "visitante")
    {
        console.log(`nivel de acesso abaixo do permitido`)
    }
    if(horario_acesso >= 8 && horario_acesso <= 22 && nivel_acesso === "funcionario" || nivel_acesso === "gerente" || nivel_acesso === "administrador")
    {
        console.log(`Acesso permitido, nivel de acesso: ${nivel_acesso} e horario de acesso permitido ${horario_acesso}h`);
    }
    else if(nivel_acesso !== "funcionario" || nivel_acesso === "gerente" || nivel_acesso === "administrador")
    {
        console.log(`nivel de acesso abaixo do permitido`);
    }

}else{
    console.log(`Fora do horario de funcionamento ${horario_acesso}h`);
}