/*### 13. Combine diferentes métodos de iteração

- **Objetivo:** Resolva problemas combinando diferentes métodos.
    1. Dado um array de produtos:
        
        ```jsx
        const produtos = [
          { nome: "Camiseta", preco: 25 },
          { nome: "Calça", preco: 80 },
          { nome: "Boné", preco: 15 }
        ];
        ```
        
        - Use `filter` para obter apenas os produtos com preço acima de 20.
        - Em seguida, use `map` para criar um array contendo apenas os nomes desses produtos.
        - Finalmente, use `reduce` para calcular o preço total desses produtos.*/

        const produtos = [
            { nome: "Camiseta", preco: 25 },
            { nome: "Calça", preco: 80 },
            { nome: "Boné", preco: 15 }
          ];
        produtos.filter((numero) => numero < 20);
        console.log(produtos);