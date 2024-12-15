/*1. Implemente um programa que receba uma nota de conceito (`A`, `B`, `C`, `D`, `F`) e exiba a mensagem correspondente:
    - `A`: “Excelente”
    - `B`: “Bom”
    - `C`: “Regular”
    - `D`: “Ruim”
    - `F`: “Reprovado”
    Caso o conceito não seja válido, exiba “Nota inválida”. */


let nota = "R";
switch (nota){
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log('Bom')
        break;
    case "C":
        console.log("Regular")
        break;
    case "D":
        console.log("Ruim")
        break;
    case "F":
        console.log("Reprovado")
        break;
    default:
        console.log("Nota inválida")
        break;
    
}