let angulo1 = 5;
let angulo2 = 7;
let angulo3 = 8;

if(angulo1 === angulo2 && angulo1 === angulo3 && angulo2 === angulo3){
    console.log("Triângulo equilatero");
}
else if(angulo1 === angulo2 || angulo1 == angulo3 || angulo2 === angulo3){
    console.log("Triângulo isósceles");
}
else if(angulo1 !== angulo2 && angulo1 !== angulo3 && angulo2 !== angulo3){
    console.log("Triângulo escaleno");
}
if (angulo1+angulo2 < angulo3 || angulo1+angulo3<angulo2 || angulo3+angulo2<angulo1){
    console.log("Isso não e um Triângulo");
}else{
    console.log("Isso é um triângulo");
}