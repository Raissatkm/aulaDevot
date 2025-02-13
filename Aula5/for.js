/*Objetivo: Pratique o uso do `for` para iteração.
    1. Crie um array com os números de 1 a 10. Use um loop `for` para calcular e exibir a soma de todos os números do array.
    2. Modifique o código para exibir apenas os números pares.*/

function interar(){
    let total = 0
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < numeros.length; i++){
    total += numeros[i]
}
console.log("a soma dos numeoros é", total);
}
interar();