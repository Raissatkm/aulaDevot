/*1. Use o código abaixo e inspecione:
    - Os valores de `numeros` e `soma`. */

const numeros = [2, 4, 6, 8, 10];
let soma = 0;numeros.forEach((numero) => {
  soma += numero;});
console.log("Soma dos números:", soma);