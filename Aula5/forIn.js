/*Objetivo: Itere sobre as propriedades de um objeto.
    1. Crie um objeto com informações de um livro: */
        

const livro = {
    titulo: "A culpa das estrelas",
    autor: "John green",
    ano: 2014
};

for(let dados in livro){
    console.log(livro+ dados+ "=" + livro[dados]);
}