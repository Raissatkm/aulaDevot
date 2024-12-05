/*## 1. Identificando Tipos

1. Crie variáveis contendo os seguintes tipos de dados:
    - Uma string com seu nome.
    - Um número representando sua idade.
    - Um booleano representando se você gosta de programar.
    - Um array com suas três comidas favoritas.
    - Um objeto contendo informações sobre seu computador (marca, modelo e ano).
    
    Use `typeof` para exibir o tipo de cada variável no console.
    
2. Dada a lista abaixo:
    
    ```jsx
    let itens = [42, "texto", true, null, { nome: "João" }, [1, 2, 3]];
    ```
    
    Escreva um programa que identifique o tipo de cada elemento da lista. */
// 1
let nome = "Raissa";
let idade = 25;
let gostadePrograma = true;
let comidaFavorita = ["Bolo", "lasanha", "chocolate"];
let computador = { 
  marca: "lenovo",
  modelo: "80YH",
  ano: 2023}
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof gostadePrograma);
console.log(typeof comidaFavorita);
console.log(typeof computador);

//2 
let itens = [42, "texto", true, null, { nome: "João" }, [1, 2, 3]];
console.log(typeof itens);