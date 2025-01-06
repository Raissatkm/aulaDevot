/*Reduz um array a um único valor, aplicando uma função acumulativa.

### Exemplo:

```jsx
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
console.log(soma); // Resultado: 10*/

const precos = [19.99, 49.99, 25.5, 10];
const somaPrecos = precos.reduce((acumulador, numeroAtual)=> acumulador + numeroAtual, 0);
console.log(somaPrecos);