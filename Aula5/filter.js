/*- **Objetivo:** Filtre elementos de um array.
    1. Dado o array:
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        ```
        
        Use `filter` para criar um novo array apenas com números pares.*/
        function filtra(){
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const pares = numeros.filter((numero) => numero % 2 === 0);
        console.log(pares);

        }
        filtra();
     