/*4. Números Pares e Ímpares
Escreva uma função chamada analiseNumeros que receba uma lista de números. A função deve retornar:
- A quantidade de números pares.
- A quantidade de números ímpares.
Exemplo de Código:*/


function analiseNumeros(numeros) {
    let quantidadeImpares = numeros.filter(numeros => numeros % 2 !== 0).length;
    let quantidadePares = numeros.filter(numeros => numeros % 2 === 0).length;
    return { quantidadeImpares, quantidadePares};


}
const resultado = analiseNumeros([3, 7, 2, 8, 1]);
console.log(resultado);// { quantidadePares: 2, quantidadeImpares: 3 }