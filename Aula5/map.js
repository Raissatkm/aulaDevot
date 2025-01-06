/*- **Objetivo:** Transforme arrays usando `map`*
- **Objetivo:** Transforme arrays usando `map`.
    1. Dado o array:
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        ```
        
        Use `map` para criar um novo array contendo o triplo de cada número.*/
        



const numeros = [1, 2, 3, 4, 5];

const triplo = numeros.map((numero) =>(numero * 3));
console.log(triplo);