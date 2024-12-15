/*1. Reescreva o exercício 1 usando o operador ternário para classificar a nota.

1. Crie um programa que receba um número e exiba:
    - “Par” se o número for divisível por 2.
    - “Ímpar” caso contrário.
    Use o operador ternário para resolver.*/


    let nota = 3;
if (nota >=7){
    console.log("Aprovado");
} else if (nota >=5){
    console.log("Recuperação");
}else {
    console.log("Reprovado");
}


let numero = 5;
let tipo = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(tipo); // "Ímpar"