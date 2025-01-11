/*5. Análise de Usuários
Crie uma função chamada cadastroUsuarios que receba uma lista de objetos representando usuários (com nome, idade e cidade) e retorne:
- O usuário mais velho.
- O usuário mais jovem.
- A quantidade de pessoas de uma mesma cidade.
Exemplo de Código:*/



function análiseDeUsuarios(usuarios, cidadeAlvo) {
       let usuarioMaisVelho = Math.max(...usuarios);
       let usuarioMaisJovem = Math.min(...usuarios);
       let quantidadePessoasCidade= usuarios.filter(usuario => usuario.cidade === cidadeAlvo)
    

}

return{
    usuarioMaisVelho,
    usuarioMaisJovem,
}
const usuarios = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "João", idade: 30, cidade: "Rio de Janeiro" },  
  { nome: "Maria", idade: 20, cidade: "São Paulo" },
];
console.log(cadastroUsuarios(usuarios, "São Paulo"));
// { maisVelho: { nome: 'João', idade: 30, cidade: 'Rio de Janeiro' },
//   maisJovem: { nome: 'Maria', idade: 20, cidade: 'São Paulo' },
//   quantidadeMesmaCidade: 2 }

