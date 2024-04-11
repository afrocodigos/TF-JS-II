let aviao1 = "Boing";
let aviao2 = "Airbus";
const velocidade_boeing = 900;
const velocidade_airbus = 850;
const velocidade_vento = 1000;
let distancia = 1000;

let tempo1 = distancia/velocidade_vento;
let tempo2 = distancia/velocidade_vento;


let consumo_boeing = tempo1 * 900;
let consumo_airbus = tempo2 * 850;

if(aviao1 ==="Boing" || aviao2=== "Airbus")
{
    if(aviao1 === "Boing")
    {
        console.log(`Velocidade do Boing ${velocidade_boeing}`);
        if (velocidade_vento > 0){
            console.log(`O consumo do boeing é: ${Math.trunc(consumo_boeing*=1.1)}L`);
        }
        else{
            console.log(`O consumo de combustivel boeing é: ${Math.trunc(consumo_boeing*=0.95)}L`);         
        }
        let combustiveltotal_boing = tempo1*consumo_boeing;
        console.log(`Tempo de voou do boing: ${tempo1}h`);
        console.log(`Combustivel gasto para percorrer a distancia ${distancia}KM boing: ${Math.trunc(combustiveltotal_boing)}L`);
    }
    if(aviao2 === "Airbus")
    {
        console.log(`Velocidade do Airbus ${velocidade_airbus}`);
        if (velocidade_vento > 0){
            console.log(`O consumo do airbus é: ${Math.trunc(consumo_airbus*=1.1)}L`);
        }
        else{
            console.log(`O consumo de combustivel airbus é: ${Math.trunc(consumo_airbus*=0.95)}L`)           
        }
        let combustiveltotal_airbus = tempo2*consumo_airbus;
        console.log(`Combustivel gasto para percorrer a distancia ${distancia}KM airbus: ${Math.trunc(combustiveltotal_airbus)}L`);
    }
}else{
    console.log("Avião não registrado!!!")
}