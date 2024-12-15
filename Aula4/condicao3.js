/*1. Implemente um sistema de controle de tráfego que:
    - Exiba “Siga em frente” se o sinal for verde.
    - Exiba “Atenção” se o sinal for amarelo.
    - Exiba “Pare” se o sinal for vermelho.*/

let sinal = "Vermelho";
if (sinal == "Verde"){
   console.log("Siga em frente");
}else if (sinal == "Amarelo"){
    console.log("Atenção");
}else{
    console.log("Pare")
}