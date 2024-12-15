/*1. Escreva um programa que receba a idade de uma pessoa e classifique-a como:
    - “Criança” para menos de 12 anos.
    - “Adolescente” para entre 12 e 17 anos.
    - “Adulto” para 18 anos ou mais.
*/

let idade = 17;
if (idade >= 18){
    console.log("adulto");
}else if (idade <= 12){
    console.log("criança");
}else{
    console.log("adolecente");
}