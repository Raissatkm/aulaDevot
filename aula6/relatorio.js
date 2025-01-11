/*3. Relatório de Vendas
Crie uma função chamada relatorioVendas que receba uma lista de produtos vendidos. Cada produto deve ser um objeto com nome, preço e quantidade. A função deve retornar:
- O total arrecadado.
- O produto mais vendido.
- O produto mais caro vendido.
Exemplo de Código:


function relatorioVendas(produtos) {
    let totalArrecado = 0;
    let produtoMaisvendido= '';
    let produtoMaiscaro = '';
    let maiorQuantidade = 0;
    let maiorPreco = 0;

    for(let i = 0; i < produtos.length; i++)  {
        const produto = produto[i];
        totalArrecado += produtos.preco * produtos.quantidade;

        if(produto.quantidade > maiorQuantidade){
            maiorQuantidade= produto.quantidade;
            produtoMaisvendido= produto.nome;
        }
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco;
            produtoMaiscaro = produto.nome;
        
        }
    } // Seu codigo
    return {
        totalArrecado: totalArrecado,
        produtoMaisvendido: produtoMaisvendido,
        produtoMaiscaro: produtoMaiscaro


    }
}
const vendas = [
  { nome: "Camiseta", preco: 50, quantidade: 10 },  
  { nome: "Calça", preco: 100, quantidade: 5 },  
  { nome: "Boné", preco: 30, quantidade: 20 },
];
console.log(relatorioVendas(vendas));
*/

function relatorioVendas(produtos) {
    let totalArrecadado = 0;
    let produtoMaisVendido = '';
    let produtoMaisCaro = '';
    let maiorQuantidade = 0;
    let maiorPreco = 0;

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        
        totalArrecadado += produto.preco * produto.quantidade;

        if (produto.quantidade > maiorQuantidade) {
            maiorQuantidade = produto.quantidade;
            produtoMaisVendido = produto.nome;
        }

        if (produto.preco > maiorPreco) {
            maiorPreco = produto.preco;
            produtoMaisCaro = produto.nome;
        }
    }

    return {
        totalArrecadado,
        produtoMaisVendido,
        produtoMaisCaro,
    };
}

const vendas = [
  { nome: "Camiseta", preco: 50, quantidade: 10 },
  { nome: "Calça", preco: 100, quantidade: 5 },
  { nome: "Boné", preco: 30, quantidade: 20 },
];

console.log(relatorioVendas(vendas));
