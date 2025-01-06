/*forEach

- **Objetivo:** Pratique iterações com `forEach`.
    1. Crie um array de números e use `forEach` para exibir o dobro de cada número no console.*/
   /* let numeros = [1, 2, 3, 4, 5];
    let dobro= numeros.forEach((numero) => numero * 2);
    console.log(dobro);*/

let numeros = [1, 2, 3, 4, 5];
let dobro = [];

numeros.forEach((numero) => {
  dobro.push(numero * 2); 
});

console.log(dobro); 
