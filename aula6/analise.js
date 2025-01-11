/*Escreva uma função chamada `analiseIdades` que receba uma lista de idades e retorne:

- A maior idade.

- A menor idade.

- A idade média.

**Dica:**
- Use métodos como `Math.max`, `Math.min` e operações com listas para calcular os resultados.

**Exemplo de Código:*/



function analiseIdades(idades) {
    return {
        maiorIdade: Math.max(...idades),
        menorIdade: Math.min(...idades),
        idadeMedia: idades.reduce((a, b) => a + b, 0)
    };
    
}
const resultado = analiseIdades([25, 30, 18, 40]);
console.log(resultado);
